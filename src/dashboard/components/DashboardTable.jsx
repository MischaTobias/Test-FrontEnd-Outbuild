import { Visibility } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useMemo } from "react";

export const DashboardTable = ({ items, onSelectItem }) => {
  const itemRows = useMemo(
    () =>
      items.map((item) => (
        <TableRow key={item.id}>
          {/* Data Rows with fixed widths */}
          <TableCell
            align="center"
            sx={{ width: "25%", minWidth: { xs: "80px", sm: "100px" } }}
          >
            {item.id}
          </TableCell>
          <TableCell
            align="center"
            sx={{ width: "25%", minWidth: { xs: "150px", sm: "200px" } }}
          >
            {item.name}
          </TableCell>
          <TableCell
            align="center"
            sx={{ width: "25%", minWidth: { xs: "200px", sm: "250px" } }}
          >
            {item.email}
          </TableCell>
          <TableCell align="center" sx={{ width: "25%", minWidth: "60px" }}>
            <IconButton color="primary" onClick={() => onSelectItem(item)}>
              <Visibility />
            </IconButton>
          </TableCell>
        </TableRow>
      )),
    [items]
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: { xs: "calc(100vh - 200px)", sm: "800px" },
          border: "1px solid #ccc",
          boxShadow: 2,
        }}
      >
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>{itemRows}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
