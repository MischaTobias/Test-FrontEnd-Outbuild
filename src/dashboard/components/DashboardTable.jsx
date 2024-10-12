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

export const DashboardTable = ({ items }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "calc(100vh - 200px)",
          border: "1px solid #ccc",
          boxShadow: 2,
        }}
      >
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {items.map(({ id, name, email }) => (
              <TableRow key={id}>
                {/* Data Rows with fixed widths */}
                <TableCell
                  align="center"
                  sx={{ width: "25%", minWidth: { xs: "80px", sm: "100px" } }}
                >
                  {id}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ width: "25%", minWidth: { xs: "150px", sm: "200px" } }}
                >
                  {name}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ width: "25%", minWidth: { xs: "200px", sm: "250px" } }}
                >
                  {email}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ width: "25%", minWidth: "60px" }}
                >
                  <IconButton color="primary">
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
