import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type AuthStore = {
  username: string | null;
};

const initialState = {
  username: null,
} as AuthStore;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthStore>) {
      state.username = action.payload.username;
    },
    logoutUser(state) {
      state.username = null;
    },
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;

export const selectUser = (state: RootState) => state.username;
