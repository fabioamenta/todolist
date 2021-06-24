import React from "react";
import IconLinkStyled from "./IconLinkStyled";
import Icon from "../Icon/Icon";

const IconLink = ({ url, icon, label, children, active = false }) => (
  <IconLinkStyled href={url} active={active}>
    <Icon name={icon} />
    <span>{label}</span>
    {children}
  </IconLinkStyled>
);

export default IconLink;
