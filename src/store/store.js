import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { dashboardSlice } from "./dashboard";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
});
