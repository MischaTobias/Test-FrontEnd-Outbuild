import { Grid2, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid2
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      {/* Title Section */}
      <Grid2 sx={{ mb: 3 }}>
        <Typography variant="h3">{title}</Typography>
      </Grid2>

      {/* Children Container */}
      <Grid2
        container
        xs={12}
        md={6}
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 2,
          maxWidth: "450px",
        }}
      >
        {children}
      </Grid2>
    </Grid2>
  );
};
