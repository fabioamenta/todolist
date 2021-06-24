import styled from "styled-components";
import { inlineContainer, settings } from "../../styles/global/settings";

const IconLinkStyled = styled.a`
  ${inlineContainer}
  color: ${(props) =>
    props.active ? settings.colors.neutral : settings.colors.textMenu};
  &,
  &:hover,
  &:focus {
    text-decoration: none;
  }

  @media screen and (max-width: ${settings.breakpoints.mobile}) {
    margin-bottom: 0;
    padding: ${settings.gutters.xs} ${settings.gutters.s};
    display: flex;
    flex-direction: column;
    line-height: 1;
    font-size: ${settings.fontSizes.xs};

    svg {
      margin-bottom: ${settings.gutters.xxs};
    }
  }

  @media screen and (min-width: ${settings.breakpoints.desktop}) {
    background-color: ${(props) =>
      props.active ? settings.colors.secondaryDark : settings.colors.primary};

    padding: ${settings.gutters.s} ${settings.gutters.base};
    margin-bottom: ${settings.gutters.xs};
    font-size: ${settings.fontSizes.m};

    svg {
      margin-right: ${settings.gutters.s};
    }
  }
`;

export default IconLinkStyled;
