import { useEffect, useState } from "react";
import { useDashboardStore, useUiStore } from "./";

export const useDashboardModal = () => {
  const { isItemModalOpen, closeItemModal } = useUiStore();
  const { activeItem } = useDashboardStore();

  const [itemValues, setItemValues] = useState({
    id: "",
    name: "",
    email: "",
    body: "",
  });

  useEffect(() => {
    if (activeItem !== null) {
      setItemValues({ ...activeItem });
    }
  }, [activeItem]);

  return {
    ...itemValues,
    closeItemModal,
    isItemModalOpen,
  };
};
