import {
  Alert,
  Button,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";
import { useLogin } from "../../hooks";

export const LoginPage = () => {
  const {
    email,
    password,
    onInputChange,
    errorMessage,
    isAuthenticating,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    onSubmit,
  } = useLogin();

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
