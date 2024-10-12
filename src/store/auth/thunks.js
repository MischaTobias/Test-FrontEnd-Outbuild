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

// Function to validate email format
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Function to validate password (min 6 chars, letters and numbers)
const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordRegex.test(password);
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
