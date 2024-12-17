import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";

import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme } from "../lib/theme";

export function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box sx={{ p: "16px 24px" }}>
          <Typography variant="h1">Graphene UI</Typography>
          <Typography>
            A thin layer of IBM's Carbon Design System on top of the Material UI
            component library
          </Typography>
          <Button variant="contained">Click me!</Button>
        </Box>
      </ThemeProvider>
    </>
  );
}
