import { useDispatch, useSelector } from "react-redux";
import { onSetActiveItem } from "../store/dashboard";

export const useDashboardStore = () => {
  const dispatch = useDispatch();
  const { items, activeItem } = useSelector((state) => state.dashboard);

  const selectItem = (item) => {
    dispatch(onSetActiveItem(item));
  };

  return {
    //* Properties
    activeItem,
    items,
    itemCurrentlySelected: !!activeItem,

    //* Methods
    selectItem,
  };
};
