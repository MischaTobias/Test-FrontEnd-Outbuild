import {
  loginWithEmailAndPassword,
  logoutFirebase,
} from "../../firebase/providers";
import { validateEmail, validatePassword } from "../../helpers";
import { checkCredentials, login, logout } from "./authSlice";

export const startCheckingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkCredentials());
  };
};

export const startEmailAndPasswordSignIn = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkCredentials());

    if (!validateEmail(email))
      return dispatch(logout({ errorMessage: "Invalid email" }));

    if (!validatePassword(password))
      return dispatch(
        logout({
          errorMessage:
            "Password must be at least 6 characters long and contain at least one letter and one number",
        })
      );

    /*
      Validation is not against sample user since user with the following email and password is the only one in the database
      email: prologin@prologin.com
      password: ProLogin123456
    */
    const result = await loginWithEmailAndPassword({
      email,
      password,
    });

    if (!result.ok)
      return dispatch(logout({ errorMessage: "Authentication failed" }));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout({}));
  };
};
