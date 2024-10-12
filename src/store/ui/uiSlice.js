import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isItemModalOpen: false,
  },
  reducers: {
    onOpenItemModal: (state) => {
      state.isItemModalOpen = true;
    },
    onCloseItemModal: (state) => {
      state.isItemModalOpen = false;
    },
  },
});

export const { onOpenItemModal, onCloseItemModal } = uiSlice.actions;
