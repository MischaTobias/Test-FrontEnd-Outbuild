import { loadItems } from "../../dashboard";
import { onSetItems, onSetLoading } from "./dashboardSlice";

export const startLoadingDashboardItems = (URL) => {
  return async (dispatch, getState) => {
    dispatch(onSetLoading());
    const { uid } = getState().auth;
    if (!uid) throw new Error("User UID not found");

    const items = await loadItems(URL);

    dispatch(onSetItems(items));
  };
};
