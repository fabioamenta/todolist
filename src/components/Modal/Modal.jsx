import React from "react";
import ModalWrapper from "./ModalStyled";

const Modal = ({ isShown, children }) => (
  <ModalWrapper isShown={isShown}>{children}</ModalWrapper>
);

export default Modal;
