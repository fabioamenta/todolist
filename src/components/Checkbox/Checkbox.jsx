import React from "react";
import PropTypes from "prop-types";
import CheckboxStyled from "./CheckboxStyled";

const Checkbox = ({ taskCompleted }) => {
	return <CheckboxStyled onClick={taskCompleted}></CheckboxStyled>;
};

Checkbox.propTypes = {
	taskCompleted: PropTypes.func.isRequired,
};

export default Checkbox;
