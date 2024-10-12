import { Grid2, Typography } from "@mui/material";

import { DashboardLayout } from "../layout";
import { DashboardTable } from "../components";
import { useDashboardStore, useUiStore } from "../../hooks";

export const DashboardPage = () => {
  const { items, selectItem } = useDashboardStore();
  const { openItemModal } = useUiStore();

  const onSelectItem = (item) => {
    selectItem(item);
    openItemModal();
  };

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
            <DashboardTable items={items} onSelectItem={onSelectItem} />
          )}
        </Grid2>
      </Grid2>
    </DashboardLayout>
  );
};
