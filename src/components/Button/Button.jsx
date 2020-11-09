import React from "react";
import PropTypes from "prop-types";
import ButtonStyled from "./ButtonStyled";
import { SaveButton, CloseButton } from "./ActionButton";

const Button = ({ isEditing, toggleIsEditingAt, handleRemove }) => {
	if (isEditing) {
		return (
			<ButtonStyled onClick={toggleIsEditingAt}>
				<SaveButton />
			</ButtonStyled>
		);
	}
	return (
		<ButtonStyled onClick={handleRemove}>
			<CloseButton />
		</ButtonStyled>
	);
};

Button.propTypes = {
	handleRemove: PropTypes.func.isRequired,
	toggleIsEditingAt: PropTypes.func.isRequired,
	isEditing: PropTypes.bool.isRequired,
};

export default Button;
