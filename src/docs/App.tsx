import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./index.scss";
import { DocsLayout } from "./components/DocsLayout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
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
import { ComponentsTabs } from "./routes/ComponentsTabs";
import { ComponentsIconButton } from "./routes/ComponentsIconButton";

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
          { path: "tabs", element: <ComponentsTabs /> },
          { path: "icon-button", element: <ComponentsIconButton /> },
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={(theme) => ({
            fontFamily: theme.typography.fontFamily,
          })}
        />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};
