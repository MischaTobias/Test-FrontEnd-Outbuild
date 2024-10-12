import {
  Grid2,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DashboardLayout } from "../layout/DashboardLayout";
import { Visibility } from "@mui/icons-material";

const rows = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Brown", email: "bob@example.com" },
  { id: 5, name: "Charlie White", email: "charlie@example.com" },
  { id: 6, name: "Bob Brown", email: "bob@example.com" },
  { id: 7, name: "Charlie White", email: "charlie@example.com" },
  { id: 8, name: "Bob Brown", email: "bob@example.com" },
  { id: 9, name: "Charlie White", email: "charlie@example.com" },
  { id: 10, name: "Bob Brown", email: "bob@example.com" },
  // Add more rows here if necessary
];

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Grid2
        container
        justifyContent="center"
        sx={{ mt: 5, backgroundColor: "tertiary.main" }}
        size={12}
      >
        <Grid2 sx={{ xs: 10 }} size={10}>
          <Paper>
            <TableContainer
              sx={{
                maxHeight: "calc(100vh - 200px)", // Limit the height to make it scrollable
                overflowY: "scroll",
              }}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell align="center">
                        <IconButton color="primary">
                          <Visibility />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid2>
      </Grid2>
    </DashboardLayout>
  );
};
