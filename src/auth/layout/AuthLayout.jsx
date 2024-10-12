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
        xs={12} // Full width on small screens
        md={6} // Half width on medium and larger screens
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 2, // Shadow effect
          maxWidth: "450px", // Max width as specified
        }}
      >
        {children}
      </Grid2>
    </Grid2>
  );
};
