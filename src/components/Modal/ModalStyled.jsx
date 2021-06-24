import styled from "styled-components";
import { settings, transition } from "../../styles/global/settings";

const ModalWrapper = styled.div`
  @media screen and (max-width: ${settings.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 53px;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 53px);
    background-color: ${settings.colors.overlay};
    padding: 100px ${settings.gutters.xl} 0;
    transition: ${transition};
    opacity: ${(props) => (props.isShown ? "1" : "0")};
    visibility: ${(props) => (props.isShown ? "visible" : "hidden")};
    z-index: 100;
  }

  @media screen and (min-width: ${settings.breakpoints.desktop}) {
    display: none;
  }
`;

export default ModalWrapper;
