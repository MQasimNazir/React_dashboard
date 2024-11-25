/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/
/**
 * The base typography styles for the Vision UI Dashboard PRO Material.
 * You can add new typography style using this file.
 * You can customized the typography styles for the entire Vision UI Dashboard PRO Material using thie file.
 */

// Vision UI Dashboard PRO React Base Styles
import colors from "assets/theme/base/colors";
import "./typography.css";

// Vision UI Dashboard PRO React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { dark } = colors;

const baseProperties = {
  fontFamily: '"Plus Jakarta Display", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(10),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeMD: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightMedium,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2,
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(48),
    lineHeight: 1.25,
    ...baseHeadingProperties,
    "@media (max-width: 1440px)": { fontSize: pxToRem(42) },
    "@media (max-width: 1024px)": { fontSize: pxToRem(36) },
    "@media (max-width: 768px)": { fontSize: pxToRem(30) },
  },

  h2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(36),
    lineHeight: 1.3,
    ...baseHeadingProperties,
    "@media (max-width: 1440px)": { fontSize: pxToRem(32) },
    "@media (max-width: 1024px)": { fontSize: pxToRem(28) },
    "@media (max-width: 768px)": { fontSize: pxToRem(24) },
  },

  h3: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(30),
    lineHeight: 1.375,
    ...baseHeadingProperties,
    "@media (max-width: 1440px)": { fontSize: pxToRem(26) },
    "@media (max-width: 1024px)": { fontSize: pxToRem(22) },
    "@media (max-width: 768px)": { fontSize: pxToRem(20) },
  },

  h4: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(24),
    lineHeight: 1.375,
    ...baseHeadingProperties,
    "@media (max-width: 1440px)": { fontSize: pxToRem(22) },
    "@media (max-width: 1024px)": { fontSize: pxToRem(20) },
    "@media (max-width: 768px)": { fontSize: pxToRem(18) },
  },

  h5: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(20),
    lineHeight: 1.375,
    ...baseHeadingProperties,
    "@media (max-width: 1440px)": { fontSize: pxToRem(18) },
    "@media (max-width: 1024px)": { fontSize: pxToRem(16) },
    "@media (max-width: 768px)": { fontSize: pxToRem(14) },
  },

  h6: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    ...baseHeadingProperties,
    "@media (max-width: 1440px)": { fontSize: pxToRem(14) },
    "@media (max-width: 1024px)": { fontSize: pxToRem(12) },
    "@media (max-width: 768px)": { fontSize: pxToRem(10) },
  },

  lg: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(18),
    lineHeight: 1.625,
    ...baseHeadingProperties,
    "@media (max-width: 1440px)": { fontSize: pxToRem(16) },
    "@media (max-width: 1024px)": { fontSize: pxToRem(14) },
    "@media (max-width: 768px)": { fontSize: pxToRem(12) },
  },

  xxs: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(10),
    lineHeight: 1.625,
    ...baseHeadingProperties,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
    "@media (max-width: 1440px)": { fontSize: baseProperties.fontSizeLG },
    "@media (max-width: 1024px)": { fontSize: baseProperties.fontSizeMD },
    "@media (max-width: 768px)": { fontSize: baseProperties.fontSizeSM },
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.6,
    "@media (max-width: 1440px)": { fontSize: pxToRem(12) },
    "@media (max-width: 1024px)": { fontSize: pxToRem(10) },
    "@media (max-width: 768px)": { fontSize: pxToRem(8) },
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
    "@media (max-width: 1440px)": { fontSize: baseProperties.fontSizeLG },
    "@media (max-width: 1024px)": { fontSize: baseProperties.fontSizeMD },
    "@media (max-width: 768px)": { fontSize: baseProperties.fontSizeSM },
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6,
    "@media (max-width: 1440px)": { fontSize: baseProperties.fontSizeXS },
    "@media (max-width: 1024px)": { fontSize: pxToRem(12) },
    "@media (max-width: 768px)": { fontSize: pxToRem(10) },
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightBold,
    lineHeight: 1.5,
    textTransform: "uppercase",
    "@media (max-width: 1440px)": { fontSize: baseProperties.fontSizeXS },
    "@media (max-width: 1024px)": { fontSize: pxToRem(12) },
    "@media (max-width: 768px)": { fontSize: pxToRem(10) },
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.25,
    "@media (max-width: 1440px)": { fontSize: pxToRem(10) },
    "@media (max-width: 1024px)": { fontSize: pxToRem(8) },
    "@media (max-width: 768px)": { fontSize: pxToRem(6) },
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(12),
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.25,
    "@media (max-width: 1440px)": { fontSize: pxToRem(10) },
    "@media (max-width: 1024px)": { fontSize: pxToRem(8) },
    "@media (max-width: 768px)": { fontSize: pxToRem(6) },
  },

  d1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(80),
    ...baseDisplayProperties,
  },

  d2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(72),
    ...baseDisplayProperties,
  },

  d3: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(64),
    ...baseDisplayProperties,
  },

  d4: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(56),
    ...baseDisplayProperties,
  },

  d5: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(48),
    ...baseDisplayProperties,
  },

  d6: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(40),
    ...baseDisplayProperties,
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;
