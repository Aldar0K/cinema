import {
  Action,
  Reducer,
  ReducersMapObject,
  configureStore,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";

import { createReducerManager } from "./reducerManager";
import { StateSchema } from "./types";

const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema, Action, StateSchema>,
    devTools: import.meta.env.VITE_IS_DEV,
    preloadedState: initialState,
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
