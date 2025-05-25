import {
  Action,
  Reducer,
  ReducersMapObject,
  configureStore,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authApi, authReducer } from "@/entities/auth";
import { $api, baseApi } from "@/shared/api";
import { createReducerManager } from "./reducerManager";
import { StateSchema } from "./types";

const authPersistConfig = {
  storage,
  key: "auth",
  whitelist: ["user"],
};

const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    auth: persistReducer(authPersistConfig, authReducer),
    [authApi.reducerPath]: authApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArgument: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema, Action, StateSchema>,
    devTools: import.meta.env.VITE_IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
  });

  // @ts-expect-error some library issues
  store.reducerManager = reducerManager;

  return store;
};

export { createReduxStore };

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

export type ExtraParamsThunkType<T> = {
  rejectValue: T;
};

export type ThunkExtraArg = {
  api: AxiosInstance;
  navigate?: (to: To, opttions?: NavigateOptions) => void;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
};
