import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./index.scss";
import { DocsLayout } from "./components/DocsLayout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../lib/theme";
import { Overview } from "./routes/components/Overview";
import { Button } from "./routes/components/Button";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DocsLayout />,
    children: [
      {
        path: "components",
        children: [
          { index: true, element: <Navigate to="./overview" /> },
          { path: "overview", element: <Overview /> },
          { path: "button", element: <Button /> },
        ],
      },
    ],
    errorElement: <Navigate to="/" />,
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
