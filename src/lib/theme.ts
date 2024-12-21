import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";
import {
  borderSubtle00,
  textDisabled,
  textPrimary,
  textSecondary,
} from "./tokens";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    "heading-compact-01": React.CSSProperties;
    "heading-03": React.CSSProperties;
    "heading-06": React.CSSProperties;
    "heading-07": React.CSSProperties;
    "body-compact-01": React.CSSProperties;
    "body-compact-02": React.CSSProperties;
    "body-01": React.CSSProperties;
    "body-02": React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    "heading-compact-01"?: React.CSSProperties;
    "heading-03"?: React.CSSProperties;
    "heading-06"?: React.CSSProperties;
    "heading-07"?: React.CSSProperties;
    "body-compact-01"?: React.CSSProperties;
    "body-compact-02"?: React.CSSProperties;
    "body-01"?: React.CSSProperties;
    "body-02"?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "heading-compact-01": true;
    "heading-03": true;
    "heading-06": true;
    "heading-07": true;
    "body-compact-01": true;
    "body-compact-02": true;
    "body-01": true;
    "body-02": true;
  }
}

const fontFamily = '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif';

export const theme = createTheme({
  // https://carbondesignsystem.com/elements/typography/overview/#sans-serif-font-stack
  typography: {
    fontFamily,
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
    "heading-compact-01": {
      fontFamily,
      fontSize: "0.875rem",
      lineHeight: "1.125rem",
      fontWeight: 600,
      letterSpacing: "0.16px",
    },
    "heading-03": {
      fontFamily,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    "heading-06": {
      fontFamily,
      fontSize: "2.625rem",
      lineHeight: "3.125rem",
      fontWeight: 300,
      letterSpacing: "0px",
    },
    "heading-07": {
      fontFamily,
      fontSize: "3.375rem",
      lineHeight: "4rem",
      fontWeight: 300,
      letterSpacing: "0px",
    },
    "body-compact-01": {
      fontFamily,
      fontSize: "0.875rem",
      lineHeight: "1.125rem",
      fontWeight: 400,
      letterSpacing: "0.16px",
    },
    "body-compact-02": {
      fontFamily,
      fontSize: "1rem",
      lineHeight: "1.375rem",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    "body-01": {
      fontFamily,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontWeight: 400,
      letterSpacing: "0.16px",
    },
    "body-02": {
      fontFamily,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: 400,
      letterSpacing: "0px",
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
          minHeight: "32px", // default size
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
