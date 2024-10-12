import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    items: null,
    isLoading: false,
    activeItem: null,
  },
  reducers: {
    onSetActiveItem: (state, { payload }) => {
      state.activeItem = payload;
    },
    onSetItems: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    onSetLoading: (state) => {
      state.items = null;
      state.isLoading = true;
    },
  },
});

export const { onSetActiveItem, onSetItems, onSetLoading } =
  dashboardSlice.actions;
