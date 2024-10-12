import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    items: null,
    isLoading: false,
  },
  reducers: {
    setItems: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    setLoading: (state) => {
      state.items = null;
      state.isLoading = true;
    },
  },
});

export const { setItems, setLoading } = dashboardSlice.actions;
