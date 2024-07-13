import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthSchema } from "./types";

const initialState: AuthSchema = {
  email: undefined,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setUser: (state, { payload }: PayloadAction<{ email: string }>) => {
      state.email = payload.email;
    },
    signOut: () => initialState,
  },
});

export const actions = {
  ...authSlice.actions,
};
export const { reducer } = authSlice;
