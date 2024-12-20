import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./index.scss";
import { DocsLayout } from "./components/DocsLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../lib/theme";
import { ComponentsRoot } from "./routes/ComponentsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DocsLayout />,
    children: [{ path: "/components/:component", element: <ComponentsRoot /> }],
  },
]);

export const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};
