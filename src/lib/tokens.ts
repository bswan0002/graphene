import {
  // Blue
  // blue10,
  blue20,
  blue30,
  blue40,
  blue60,
  blue70,
  // blue100,

  // Gray
  gray10,
  gray10Hover,
  gray20,
  gray20Hover,
  gray30,
  gray40,
  gray50,
  gray60,
  gray70,
  gray80,
  gray80Hover,
  gray100,

  // Support
  blue50,
  green40,
  green50,
  yellow30,
  orange40,
  red50,
  red60,
  purple60,
  purple40,

  // Constants
  // black,
  white,
  whiteHover,
  // rgba,
} from "./colors";
import { alpha } from "@mui/material";

/**
 * Tokens from https://github.com/carbon-design-system/carbon/blob/main/packages/themes/src/white.js
 */

export const background = {
  white,
  inverse: gray80,
  brand: blue60,
  active: alpha(gray50, 0.5),
  hover: alpha(gray50, 0.12),
  inverseHover: gray80Hover,
  selected: alpha(gray50, 0.2),
  selectedHover: alpha(gray50, 0.32),
} as const;

// Layer
// layer-01
export const layer01 = gray10;
export const layerActive01 = gray30;
export const layerHover01 = gray10Hover;
export const layerSelected01 = gray20;
export const layerSelectedHover01 = gray20Hover;

// layer-02
export const layer02 = white;
export const layerActive02 = gray30;
export const layerHover02 = whiteHover;
export const layerSelected02 = gray20;
export const layerSelectedHover02 = gray20Hover;

// layer-03
export const layer03 = gray10;
export const layerActive03 = gray30;
export const layerHover03 = gray10Hover;
export const layerSelected03 = gray20;
export const layerSelectedHover03 = gray20Hover;

// layer
export const layerSelectedInverse = gray100;
export const layerSelectedDisabled = gray50;

// layer-accent-01
export const layerAccent01 = gray20;
export const layerAccentActive01 = gray40;
export const layerAccentHover01 = gray20Hover;

// layer-accent-02
export const layerAccent02 = gray20;
export const layerAccentActive02 = gray40;
export const layerAccentHover02 = gray20Hover;

// layer-accent-03
export const layerAccent03 = gray20;
export const layerAccentActive03 = gray40;
export const layerAccentHover03 = gray20Hover;

// Field
// field-01
export const field01 = gray10;
export const fieldHover01 = gray10Hover;

// field-02
export const field02 = white;
export const fieldHover02 = whiteHover;

// field-03
export const field03 = gray10;
export const fieldHover03 = gray10Hover;

// Border
// border-subtle-00
export const borderSubtle00 = gray20;

// border-subtle-01
export const borderSubtle01 = gray30;
export const borderSubtleSelected01 = gray30;

// border-subtle-02
export const borderSubtle02 = gray20;
export const borderSubtleSelected02 = gray30;

// border-subtle-03
export const borderSubtle03 = gray30;
export const borderSubtleSelected03 = gray30;

// border-strong
export const borderStrong01 = gray50;
export const borderStrong02 = gray50;
export const borderStrong03 = gray50;

// border-tile
export const borderTile01 = gray30;
export const borderTile02 = gray40;
export const borderTile03 = gray30;

// border-inverse
export const borderInverse = gray100;

// border-interactive
export const borderInteractive = blue60;

// border
export const borderDisabled = gray30;

export const button = {
  secondary: gray80,
  secondaryHover: gray80Hover,
  secondaryActive: gray60,
} as const;

// Text
export const textPrimary = gray100;
export const textSecondary = gray70;
export const textPlaceholder = alpha(textPrimary, 0.4);
export const textHelper = gray60;
export const textError = red60;
export const textInverse = white;
export const textOnColor = white;
export const textOnColorDisabled = gray50;
export const textDisabled = alpha(textPrimary, 0.25);

// Link
export const linkPrimary = blue60;
export const linkPrimaryHover = blue70;
export const linkSecondary = blue70;
export const linkInverse = blue40;
export const linkVisited = purple60;
export const linkInverseVisited = purple40;
export const linkInverseActive = gray10;
export const linkInverseHover = blue30;

// Icon
export const iconPrimary = gray100;
export const iconSecondary = gray70;
export const iconInverse = white;
export const iconOnColor = white;
export const iconOnColorDisabled = gray50;
export const iconDisabled = alpha(iconPrimary, 0.25);
export const iconInteractive = blue60;

// Support
export const supportError = red60;
export const supportSuccess = green50;
export const supportWarning = yellow30;
export const supportInfo = blue70;
export const supportErrorInverse = red50;
export const supportSuccessInverse = green40;
export const supportWarningInverse = yellow30;
export const supportInfoInverse = blue50;
export const supportCautionMinor = yellow30;
export const supportCautionMajor = orange40;
export const supportCautionUndefined = purple60;

// Focus
export const focus = blue60;
export const focusInset = white;
export const focusInverse = white;

// Skeleton
export const skeletonBackground = whiteHover;
export const skeletonElement = gray30;

// Misc
export const interactive = blue60;
export const highlight = blue20;
export const overlay = "rgba(22, 22, 22, 0.5)";
export const toggleOff = gray50;
export const shadow = "rgba(0, 0, 0, 0.3)";
