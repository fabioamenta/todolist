import React from "react";
import PropTypes from "prop-types";
import { CheckboxWrapper, Checkbox, CheckboxLabel } from "./CheckboxStyled";

const CheckboxStyled = ({
  onHandleChange,
  disabled,
  swipe = false,
  isCompleted,
  label,
  checked,
}) => {
  return (
    <CheckboxWrapper swipe={swipe}>
      <Checkbox
        type="checkbox"
        onChange={(e) => onHandleChange(e.target.checked)}
        disabled={swipe ? disabled : !isCompleted}
        checked={swipe ? checked : !isCompleted}
      />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

CheckboxStyled.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  swipe: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

export default CheckboxStyled;
