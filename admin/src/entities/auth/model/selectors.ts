import { StateSchema } from "@/app/providers/store-provider";
import { createSelector } from "@reduxjs/toolkit";

export const getAuthSlice = createSelector(
  (state: StateSchema) => state,
  (state) => state.auth,
);

export const getIsAuth = createSelector(getAuthSlice, (state) => !!state.email);
