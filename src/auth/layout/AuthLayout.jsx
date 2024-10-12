import { Grid2 } from "@mui/material"; // Import Grid2 from Material UI
import { Typography } from "@mui/material"; // Import Typography for the title

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid2
      container
      direction="column" // Arrange items vertically
      justifyContent="center" // Center items vertically
      alignItems="center" // Center items horizontally
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }} // Use sx for custom styles
    >
      {/* Title Section */}
      <Grid2 item sx={{ mb: 3 }}>
        <Typography variant="h3">{title}</Typography>
      </Grid2>

      {/* Children Container */}
      <Grid2
        item
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
