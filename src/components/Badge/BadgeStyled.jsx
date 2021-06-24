import styled from "styled-components";
import { settings } from "../../styles/global/settings";

const BadgeStyled = styled.span`
  @media screen and (max-width: ${settings.breakpoints.mobile}) {
    display: none;
  }

  @media screen and (min-width: ${settings.breakpoints.desktop}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.type === "circle" ? "20px" : "auto")};
    height: 20px;
    border-radius: ${(props) => (props.type === "circle" ? "100%" : "10px")};
    font-size: ${settings.fontSizes.s};
    background-color: ${(props) =>
      props.type === "circle"
        ? settings.colors.textPrimary
        : settings.colors.neutral};
    color: ${(props) =>
      props.type === "circle"
        ? settings.colors.secondary
        : settings.colors.secondaryDark};
    padding: 0
      ${(props) =>
        props.type === "circle" ? "0" : `calc(${settings.gutters.s} / 2)`};
    margin: 0
      ${(props) => (props.type === "circle" ? settings.gutters.xs : "0 0 auto")};
  }
`;

export default BadgeStyled;
