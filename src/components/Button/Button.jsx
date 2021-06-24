import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "./ButtonStyled";
import Icon from "../Icon/Icon";

const Button = ({ handleClick, iconName }) => {
  return (
    <IconButton onClick={handleClick}>
      <Icon name={iconName} />
    </IconButton>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
