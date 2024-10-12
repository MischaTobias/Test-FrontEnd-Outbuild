import { Grid2, Typography } from "@mui/material";
import { DashboardLayout } from "../layout/DashboardLayout";
import { DashboardTable } from "../components/DashboardTable";
import { useSelector } from "react-redux";

export const DashboardPage = () => {
  const { items } = useSelector((state) => state.dashboard);

  return (
    <DashboardLayout>
      <Grid2
        container
        justifyContent="center"
        sx={{ mt: 5, backgroundColor: "tertiary.main" }}
        size={12}
      >
        <Grid2 size={{ xs: 12, sm: 10 }}>
          {!items || items.length === 0 ? (
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              No items found
            </Typography>
          ) : (
            <DashboardTable items={items} />
          )}
        </Grid2>
      </Grid2>
    </DashboardLayout>
  );
};
