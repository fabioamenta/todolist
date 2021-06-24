import React from "react";
import icons from "../../images/icons/icons.svg";
import IconStyled from "./IconStyled";

const Icon = (props) => (
  <IconStyled
    viewBox={props.name === "trash" ? "0 0 20 23" : "0 0 20 20"}
    x="0"
    y="0"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <use xlinkHref={`${icons}#${props.name}`}></use>
  </IconStyled>
);
export default Icon;
