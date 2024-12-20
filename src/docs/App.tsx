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
import { PatternsOverview as PatternsOverview } from "./routes/PatternsOverview";
import { PatternsCommonActions } from "./routes/PatternsCommonActions";
import { ComponentsOverview } from "./routes/ComponentsOverview";
import { ComponentsButton } from "./routes/ComponentsButton";
import { MigratingGuide } from "./routes/MigratingGuide";
import { MigratingFAQs } from "./routes/MigratingFAQs";
import { StartQuickStart } from "./routes/StartQuickStart";
import { StartTutorial } from "./routes/StartTutorial";
import { AboutGoals } from "./routes/AboutGoals";
import { AboutStatus } from "./routes/AboutStatus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DocsLayout />,
    children: [
      {
        path: "about",
        children: [
          { index: true, element: <Navigate to="./goals" /> },
          { path: "goals", element: <AboutGoals /> },
          { path: "status", element: <AboutStatus /> },
        ],
      },
      {
        path: "getting-started",
        children: [
          { index: true, element: <Navigate to="./quick-start" /> },
          { path: "quick-start", element: <StartQuickStart /> },
          { path: "tutorial", element: <StartTutorial /> },
        ],
      },
      {
        path: "migrating",
        children: [
          { index: true, element: <Navigate to="./guide" /> },
          { path: "guide", element: <MigratingGuide /> },
          { path: "faqs", element: <MigratingFAQs /> },
        ],
      },
      {
        path: "components",
        children: [
          { index: true, element: <Navigate to="./overview" /> },
          { path: "overview", element: <ComponentsOverview /> },
          { path: "button", element: <ComponentsButton /> },
        ],
      },
      {
        path: "patterns",
        children: [
          { index: true, element: <Navigate to="./overview" /> },
          { path: "overview", element: <PatternsOverview /> },
          { path: "common-actions", element: <PatternsCommonActions /> },
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
