import { css } from "styled-components";

const fontFamily = '"Poppins", sans-serif';
const borderRadius = "4px";
const transition = "all 0.35s cubic-bezier(0, 0, 0.44, 1.18)";

const settings = {
  breakpoints: {
    mobile: "767px",
    desktop: "768px",
  },

  colors: {
    primary: "#141b2c",
    secondary: "#202a43",
    secondaryDark: "#212944",
    placeholder: "#425277",
    textPrimary: "#cbddf0",
    textSecondary: "#a9c8e8",
    textMenu: "#a9c8e8",
    borderColor: "#1F2942",
    success: "#82c94e",
    successText: "#b6d79e",
    neutral: "#ffffff",
    ctaActive: "#4788c7",
    ctaHover: "#74ACE2",
    checkHover: "#27334F",
    checkHoverText: "#344261",
    warning: "#cd5050",
    overlay: "rgba(2,7,19,0.9)",
  },

  fontSizes: {
    xs: " 0.8rem",
    s: "1.2rem",
    base: "1.4rem",
    m: "1.6rem",
    l: "2.4rem",
  },

  lineHeights: {
    xs: "1.35em",
    s: "1.5em",
    base: "1.71em",
    m: "2em",
    l: "2.2em",
    xl: "2.8em",
  },

  fontWeights: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  gutters: {
    xxs: "0.5rem",
    xs: "1rem",
    s: "1.5rem",
    base: "2rem",
    m: "2.3rem",
    l: "3rem",
    xl: "3.5rem",
  },
};

const inlineContainer = css`
  background-color: ${settings.colors.primary};
  color: ${settings.colors.textPrimary};
  border-radius: calc(${borderRadius} * 3);
  padding: ${settings.gutters.base};
  font-family: ${fontFamily};
  font-weight: ${settings.fontWeights.medium};
  font-size: ${settings.fontSizes.m};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export { fontFamily, borderRadius, transition, settings, inlineContainer };
