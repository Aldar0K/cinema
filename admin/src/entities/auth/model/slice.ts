import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserEntity } from "@/entities/user";
import { AuthSchema } from "./types";

const initialState: AuthSchema = {
  user: undefined,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setUser: (state, action: PayloadAction<UserEntity>) => {
      state.user = action.payload;
    },
    signOut: () => initialState,
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
