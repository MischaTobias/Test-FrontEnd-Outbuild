import { createSlice } from "@reduxjs/toolkit";
import { authTypes } from "./authTypes";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: authTypes.CHECKING,
    email: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = authTypes.AUTHENTICATED;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = authTypes.NOT_AUTHENTICATED;
      state.email = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkCredentials: (state) => {
      state.status = authTypes.CHECKING;
      state.errorMessage = null;
    },
  },
});

export const { login, logout, checkCredentials } = authSlice.actions;
