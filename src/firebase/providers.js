import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const response = await signInWithPopup(firebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = response.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const response = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = response.user;

    await updateProfile(firebaseAuth.currentUser, {
      displayName,
    });

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
