import { createSlice } from "@reduxjs/toolkit";
import { authStatusTypes } from "./authStatusTypes";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    photoURL: null,
    status: authStatusTypes.CHECKING,
    uid: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.status = authStatusTypes.AUTHENTICATED;
      state.uid = payload.uid;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.email = null;
      state.photoURL = null;
      state.status = authStatusTypes.NOT_AUTHENTICATED;
      state.uid = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkCredentials: (state) => {
      state.status = authStatusTypes.CHECKING;
      state.errorMessage = null;
    },
  },
});

export const { login, logout, checkCredentials } = authSlice.actions;
