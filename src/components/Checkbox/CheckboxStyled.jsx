import styled, { css } from "styled-components";
import {
  transition,
  borderRadius,
  settings,
} from "../../styles/global/settings";

const CheckboxLabel = styled.label`
  position: relative;
  margin: 0;
  font-size: ${settings.fontSizes.s};
  font-weight: ${settings.fontWeights.regular};
`;

const Checkbox = styled.input`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  &:not(:disabled) {
    cursor: pointer;
  }
`;

const CheckboxWrapper = styled.div`
  @media screen and (max-width: ${settings.breakpoints.mobile}) {
    margin-right: ${(props) => (props.swipe ? "0" : settings.gutters.s)};
  }

  @media screen and (min-width: ${settings.breakpoints.desktop}) {
    margin-right: ${(props) => (props.swipe ? "60px" : settings.gutters.s)};
  }
  display: flex;
  justify-content: space-between;
  position: relative;
  ${CheckboxLabel} {
    ${(props) =>
      props.swipe
        ? css`
            display: flex;
            align-items: center;
            padding: 0 calc(60px + ${settings.gutters.base}) 0 0;
            height: 32px;

            &::before,
            &::after {
              content: "";
              display: block;
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }

            &::before {
              border-radius: 17px;
              width: 60px;
              background: ${settings.colors.secondaryDark};
              height: 32px;
            }

            &::after {
              content: "";
              display: block;
              border-radius: 13px;
              width: 26px;
              height: 26px;
              margin: 0 31px 0 3px;
              background: ${settings.colors.placeholder};
              transition: ${transition};
            }
          `
        : css`
            width: 20px;
            height: 20px;

            &::before,
            &::after {
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }

            &::before {
              content: "";
              width: 100%;
              height: 100%;
              border-radius: ${borderRadius};
              border: 1px solid ${settings.colors.neutral};
              background-color: transparent;
            }

            &::after {
              content: "";
              color: ${settings.colors.placeholder};
              height: 65%;
              width: 35%;
              opacity: 0;
              transform: scale(0.8) translate(-50%, -68%) rotate(45deg);
              border-right: 2px solid #fff;
              border-bottom: 2px solid #fff;
              transition: ${transition};
            }
          `};
  }

  ${Checkbox} {
    ${(props) =>
      props.swipe
        ? css`
            &:hover {
              + ${CheckboxLabel} {
                &::before {
                  background: ${settings.colors.checkHover};
                }
              }
            }

            &:checked {
              + ${CheckboxLabel} {
                &::after {
                  margin-right: 3px;
                  background-color: ${settings.colors.textPrimary};
                }
              }
            }
          `
        : css`
            &:hover {
              + ${CheckboxLabel} {
                &::before {
                  background-color: ${settings.colors.checkHover};
                }

                &::after {
                  color: ${settings.colors.checkHoverText};
                }
              }
            }

            &:checked {
              + ${CheckboxLabel} {
                &::before {
                  background-color: ${settings.colors.success};
                  border: none;
                }

                &::after {
                  color: ${settings.colors.successText};
                  opacity: 1;
                }
              }
            }
          `}
  }
`;

export { CheckboxWrapper, Checkbox, CheckboxLabel };
