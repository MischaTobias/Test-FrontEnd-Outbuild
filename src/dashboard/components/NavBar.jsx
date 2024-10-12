import { useDispatch } from "react-redux";

import { LogoutOutlined } from "@mui/icons-material";
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material";

import { startLogout } from "../../store/auth";

export const NavBar = ({ title }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ height: { xs: "56px", sm: "64px" } }}>
        <Grid2
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          {/* Empty Grid2 to occupy space on the left */}
          <Grid2 xs={4}></Grid2>

          {/* Centered title */}
          <Grid2 xs={4} container justifyContent="center">
            <Typography variant="h6" noWrap component="div">
              {title}
            </Typography>
          </Grid2>

          {/* Logout button to the right */}
          <Grid2 xs={4} container justifyContent="flex-end">
            <IconButton color="error" onClick={onLogout}>
              <LogoutOutlined />
            </IconButton>
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};
