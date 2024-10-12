import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "./useForm";
import { startEmailAndPasswordSignIn } from "../store";

const initialForm = {
  email: "",
  password: "",
};

export const useLogin = () => {
  // Hooks
  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } = useForm(initialForm);
  const { status, errorMessage } = useSelector((state) => state.auth);

  // State
  const [showPassword, setShowPassword] = useState(false);

  // Memoized Value
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  // Handlers
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Submit Handler
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startEmailAndPasswordSignIn(formState));
  };

  return {
    email,
    password,
    onInputChange,
    errorMessage,
    isAuthenticating,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    onSubmit,
  };
};
