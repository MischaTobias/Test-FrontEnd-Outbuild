import { Grid2 } from "@mui/material";
import { NavBar, ItemModal } from "../components";

export const DashboardLayout = ({ children }) => {
  return (
    <div
      className="d-flex flex-column animate__animated animate__fadeIn animate__faster"
      style={{ minHeight: "100vh" }}
    >
      <NavBar title="ProDashboard" />

      {/* Main Content */}
      <Grid2
        className="content flex-grow-1"
        sx={{
          padding: "1rem",
          paddingTop: { xs: "calc(1rem + 56px)", sm: "calc(1rem + 64px)" }, // 56px is the height of the NavBar Toolbar
          backgroundColor: "tertiary.main",
        }}
      >
        {/* Children (main content) */}
        {children}
      </Grid2>
      <ItemModal />
    </div>
  );
};
