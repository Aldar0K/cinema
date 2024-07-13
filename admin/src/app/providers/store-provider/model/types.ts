import {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";

import { AuthSchema, authApi } from "@/entities/auth";

export type StateSchema = {
  auth: AuthSchema;
  [authApi.reducerPath]: ReturnType<typeof authApi.reducer>;
};

export type StateSchemaKey = keyof StateSchema;

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

export type ReducersListEntry = [StateSchemaKey, Reducer];

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
};

export type ReduxStoreWithManager = EnhancedStore<StateSchema> & {
  reducerManager: ReducerManager;
};
