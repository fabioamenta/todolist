import React from "react";
import PropTypes from "prop-types";

import InputStyled from "../InputForm/InputStyled";

const ItemName = ({
	isEditing,
	children,
	handleNameEdits,
	toggleIsEditingAt,
}) => {
	if (isEditing) {
		return (
			<InputStyled type='text' value={children} onChange={handleNameEdits} />
		);
	}
	return <span onClick={toggleIsEditingAt}>{children}</span>;
};

ItemName.propTypes = {
	item: PropTypes.string.isRequired,
	handleNameEdits: PropTypes.func.isRequired,
	toggleIsEditingAt: PropTypes.func.isRequired,
};

export default ItemName;
