import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { outbuildTheme } from "./";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={outbuildTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
