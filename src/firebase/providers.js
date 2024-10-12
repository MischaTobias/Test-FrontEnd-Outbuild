import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "./config";

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = response.user;

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut();
};
