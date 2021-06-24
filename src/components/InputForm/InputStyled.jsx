import styled from "styled-components";
import { settings, inlineContainer } from "../../styles/global/settings";

const InputWrapper = styled.form`
  ${inlineContainer}
  margin-bottom: calc(${settings.gutters.base} * 2);
  justify-content: space-between;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    padding-left: ${settings.gutters.xxs};
    padding-bottom: ${settings.gutters.s};
    padding-right: ${settings.gutters.xxs};
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -1px;
      left: calc(-${settings.gutters.base} - ${settings.gutters.xxs});
      right: calc(-${settings.gutters.base} - ${settings.gutters.xxs});
      border-bottom: 1px solid ${settings.colors.borderColor};
    }
  }
`;

const InputStyled = styled.input`
  background-color: transparent;
  @media screen and (max-width: ${settings.breakpoints.mobile}) {
    flex: 0 0 100%;
    margin-bottom: calc(${settings.gutters.xl} * 2);
  }

  @media screen and (min-width: ${settings.breakpoints.desktop}) {
    margin-right: ${settings.gutters.s};
  }
  padding: 0;
  border: none;
  font-size: 1em;
  flex: 1 0 auto;
  outline: none;
  color: ${settings.colors.textPrimary};

  &:hover,
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &::placeholder {
    color: ${settings.colors.placeholder};
  }
`;

export { InputWrapper, InputStyled };
