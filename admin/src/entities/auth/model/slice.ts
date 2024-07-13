import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthSchema, LoginResponse, RegistrationResponse } from "./types";

const initialState: AuthSchema = {
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    signUp: (state, { payload }: PayloadAction<RegistrationResponse>) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    signIn: (state, { payload }: PayloadAction<LoginResponse>) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    signOut: () => initialState,
  },
});

export const actions = {
  ...authSlice.actions,
};
export const { reducer } = authSlice;
