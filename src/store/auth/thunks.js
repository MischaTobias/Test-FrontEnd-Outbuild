import {
  loginWithEmailAndPassword,
  logoutFirebase,
} from "../../firebase/providers";
import { checkCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkCredentials());
  };
};

export const startEmailAndPasswordSignIn = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkCredentials());

    /*
      Validation is not against sample user since user with the following email and password is the only one in the database
      email: prologin@prologin.com
      password: ProLogin123456
    */
    const result = await loginWithEmailAndPassword({
      email,
      password,
    });

    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout({}));
  };
};
