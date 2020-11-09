import React from "react";
import PropTypes from "prop-types";

import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import ItemName from "./ItemName";

import ListItemStyled from "./ListItemStyled";

const ListItem = ({
	isEditing,
	item,
	toggleIsEditingAt,
	taskCompleted,
	setName,
	handleRemove,
}) => {
	return (
		<ListItemStyled>
			<Checkbox taskCompleted={taskCompleted}>dfgzdfg</Checkbox>
			<ItemName
				isEditing={isEditing}
				item={item}
				toggleIsEditingAt={toggleIsEditingAt}
				handleNameEdits={(e) => setName(e.target.value)}>
				{item}
			</ItemName>
			<Button
				isEditing={isEditing}
				toggleIsEditingAt={toggleIsEditingAt}
				handleRemove={handleRemove}
			/>
		</ListItemStyled>
	);
};

ListItem.propTypes = {
	item: PropTypes.string.isRequired,
	handleRemove: PropTypes.func.isRequired,
	toggleIsEditingAt: PropTypes.func.isRequired,
	isEditing: PropTypes.bool.isRequired,
	setName: PropTypes.func.isRequired,
};

export default ListItem;
