import styled from "styled-components";
import {
  borderRadius,
  inlineContainer,
  settings,
  transition,
} from "../../styles/global/settings";

const ButtonStyled = styled.button`
  background: ${settings.colors.secondaryDark};
  color: ${settings.colors.placeholder};
  border: none;
  border-radius: calc(${borderRadius} * 2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  @media screen and (max-width: ${settings.breakpoints.mobile}) {
    padding: ${settings.gutters.base} ${settings.gutters.m};
    width: 80px;
  }
  @media screen and (min-width: ${settings.breakpoints.desktop}) {
    padding: ${settings.gutters.base} ${settings.gutters.l};
    width: 90px;
  }
  transition: ${transition};
  font-size: ${settings.fontSizes.base};
  font-weight: ${settings.fontWeights.medium};

  &:not(:disabled) {
    background: ${settings.colors.ctaActive};
    color: ${settings.colors.textPrimary};
    cursor: pointer;
    &:hover {
      background: ${settings.colors.ctaHover};
    }
  }
`;

const IconButton = styled.button`
  border: none;
  border-radius: ${borderRadius};
  color: currentColor;
  display: flex;
  background: transparent;
  transition: ${transition};
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;

const AddNewTask = styled.button`
  ${inlineContainer};
  border: none;
  color: ${settings.colors.neutral};
  width: 100%;
  margin-bottom: ${settings.gutters.l};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${transition};
  cursor: pointer;
  font-size: ${settings.fontSizes.base};
  font-weight: ${settings.fontWeights.medium};
  > span {
    margin-left: ${settings.gutters.xs};
    font-size: 1.8em;
    font-weight: ${settings.fontWeights.regular};
  }
  &:hover,
  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;

export { ButtonStyled, IconButton, AddNewTask };
