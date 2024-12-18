type TypographyTokens = { [key: string]: React.CSSProperties };

/**
 * [Carbon > Typography > Fixed heading styles](https://carbondesignsystem.com/elements/typography/type-sets/#fixed-heading-styles)
 */
export const heading = {
  "compact-01": {
    fontFamily: "sans-serif",
    fontSize: "0.875rem",
    lineHeight: "1.125rem",
    fontWeight: 600,
    letterSpacing: "0.16px",
  },
} as const satisfies TypographyTokens;

export const body = {
  "body-compact-02": {
    fontFamily: "sans-serif",
    fontSize: "1rem",
    lineHeight: "1.375rem",
    fontWeight: 400,
    letterSpacing: "0px",
  },
} as const satisfies TypographyTokens;
