import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const outbuildTheme = createTheme({
  palette: {
    primary: {
      main: "#C5D9CE",
    },
    secondary: {
      main: "#848C79",
    },
    tertiary: {
      main: "#F5F5F5",
    },
    error: {
      main: red.A400,
    },
  },
});
