import { StateSchema } from "@/app/providers/store-provider";
import { createSelector } from "@reduxjs/toolkit";

export const getAuthSlice = createSelector(
  (state: StateSchema) => state,
  (state) => state.auth,
);

export const getAccessToken = createSelector(
  getAuthSlice,
  (auth) => auth.accessToken,
);

export const getRefreshToken = createSelector(
  getAuthSlice,
  (auth) => auth.refreshToken,
);

export const getIsAuth = createSelector(
  getAuthSlice,
  (auth) => !!auth.accessToken,
);
