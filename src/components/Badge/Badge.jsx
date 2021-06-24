import React from "react";
import BadgeStyled from "./BadgeStyled";

const Badge = ({ type, children }) => (
  <BadgeStyled type={type}>{children}</BadgeStyled>
);

export default Badge;
