import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // https://carbondesignsystem.com/elements/typography/overview/#sans-serif-font-stack
  typography: {
    fontFamily: ["IBM Plex Sans", "Helvetica Neue", "Arial", "sans-serif"].join(
      ","
    ),
  },
});
