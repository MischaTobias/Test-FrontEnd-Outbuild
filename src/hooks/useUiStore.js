import { useDispatch, useSelector } from "react-redux";
import { onCloseItemModal, onOpenItemModal } from "../store";

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isItemModalOpen } = useSelector((state) => state.ui);

  const openItemModal = () => {
    dispatch(onOpenItemModal());
  };

  const closeItemModal = () => {
    dispatch(onCloseItemModal());
  };

  return {
    //* Properties
    isItemModalOpen,
    //* Methods
    openItemModal,
    closeItemModal,
  };
};
