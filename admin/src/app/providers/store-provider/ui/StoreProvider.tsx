import { ReducersMapObject } from "@reduxjs/toolkit";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { createReduxStore } from "../model/store";
import { StateSchema } from "../model/types";

type StoreProviderProps = {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
};

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  const persistor = persistStore(store);

  return (
    <PersistGate loading={<h2>Loading...</h2>} persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
};
