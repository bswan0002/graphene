import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";

import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../lib/theme";

export function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Graphene UI</Typography>
      </ThemeProvider>
    </>
  );
}
