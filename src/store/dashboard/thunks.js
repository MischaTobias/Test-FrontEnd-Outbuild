import { loadItems } from "../../dashboard";
import { setItems, setLoading } from "./dashboardSlice";

export const startLoadingDashboardItems = () => {
  return async (dispatch, getState) => {
    dispatch(setLoading());
    const { uid } = getState().auth;
    if (!uid) throw new Error("User UID not found");

    const items = await loadItems();

    dispatch(setItems(items));
  };
};
