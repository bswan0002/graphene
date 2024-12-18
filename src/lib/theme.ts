import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";
import {
  borderSubtle00,
  textDisabled,
  textPrimary,
  textSecondary,
} from "./tokens";

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
      letterSpacing: "0.16px",
    },
  },
  palette: {
    // https://carbondesignsystem.com/elements/color/tokens/#text
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      disabled: textDisabled,
    },
    // Carbon's tokens are more granular than those in MUI. As such, there is no single "primary" token. However,
    // Blue 60 is used in numerous places that would translate to MUI's primary.main token, e.g. for Carbon's $button-primary
    // https://carbondesignsystem.com/elements/color/tokens/#button
    primary: {
      main: colors.blue[60],
      light: colors.blue[50],
      dark: colors.blue[70],
    },
    error: {
      main: colors.red[60],
      light: colors.red[50],
      dark: colors.red[70],
    },
    divider: borderSubtle00,
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    /**
     * Reference carbon/packages/styles/scss/components:
     * https://github.com/carbon-design-system/carbon/tree/main/packages/styles/scss/components
     */
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: "32px",
        },
        content: {
          margin: 0,
        },
      },
    },
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
          borderWidth: "0.75px",
          variants: [
            {
              props: { color: "primary" },
              style: {
                borderColor: colors.blue[60],
              },
            },
          ],
        },
        sizeLarge: {
          padding: "14px 63px 14px 15px",
          minHeight: "48px",
        },
        sizeMedium: {
          padding: "10px 63px 10px 15px",
          minHeight: "40px",
        },
        sizeSmall: {
          padding: "6px 63px 6px 15px",
          minHeight: "32px",
        },
      },
    },
  },
});
