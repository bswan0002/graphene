import { alpha, createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const theme = createTheme({
  // https://carbondesignsystem.com/elements/typography/overview/#sans-serif-font-stack
  typography: {
    fontFamily: ["IBM Plex Sans", "Helvetica Neue", "Arial", "sans-serif"].join(
      ","
    ),
    // https://carbondesignsystem.com/elements/typography/overview/#weights
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 600,
    button: {
      fontWeight: 400,
      textTransform: "none",
      lineHeight: 1.3,
    },
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
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          boxShadow: "none",
        },
        sizeLarge: {
          padding: "14px 63px 14px 15px",
        },
        sizeMedium: {
          padding: "10px 63px 10px 15px",
        },
        sizeSmall: {
          padding: "6px 63px 6px 15px",
        },
      },
    },
  },
});
