import { alpha, createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const theme = createTheme({
  // https://carbondesignsystem.com/elements/typography/overview/#sans-serif-font-stack
  typography: {
    fontFamily: ["IBM Plex Sans", "Helvetica Neue", "Arial", "sans-serif"].join(
      ","
    ),
  },
  palette: {
    // https://carbondesignsystem.com/elements/color/tokens/#text
    text: {
      primary: colors.gray[100],
      secondary: colors.gray[70],
      disabled: alpha(colors.gray[100], 0.25),
    },
    // Carbon's tokens are more granular than those in MUI. As such, there is no single "primary" token. However,
    // Blue 60 is used in numerous places that would translate to MUI's primary.main token, e.g. for Carbon's $button-primary
    // https://carbondesignsystem.com/elements/color/tokens/#button
    primary: {
      main: colors.blue[60],
      light: colors.blue[50],
      dark: colors.blue[70],
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // Specificity hack
          "&.MuiButtonBase-root": {
            textTransform: "none",
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
