import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks";
import { startEmailAndPasswordSignIn } from "../../store/auth";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const initialForm = {
  email: "",
  password: "",
};

export const LoginPage = () => {
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

  return (
    <AuthLayout title="ProLogin">
      <form
        aria-label="login-form"
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={onSubmit}
      >
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={email}
              onChange={onInputChange}
              required
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="password"
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={password}
              onChange={onInputChange}
              required
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid2>

          <Grid2
            size={{ xs: 12 }}
            display={!!errorMessage ? "" : "none"}
            sx={{ mt: 1 }}
          >
            <Alert severity="error">{errorMessage}</Alert>
          </Grid2>

          <Grid2
            container
            size={12}
            spacing={2}
            sx={{ mb: 1, mt: 2 }}
            justifyContent={"flex-end"}
          >
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                type="submit"
                sx={{ height: 45, borderRadius: "8px" }}
              >
                Login
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
