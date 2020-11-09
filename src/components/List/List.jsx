import React from "react";
import PropTypes from "prop-types";

import ListStyled from "./ListStyled";
import ListItem from "../ListItem/ListItem";

const List = ({
	list,
	removeItemAt,
	toggleIsEditingAt,
	taskCompleted,
	setNameAt,
}) => {
	return (
		<ListStyled>
			{list.map((item, index) => (
				<ListItem
					key={index}
					item={item.name}
					isEditing={item.isEditing}
					handleRemove={() => removeItemAt(item.id)}
					toggleIsEditingAt={() => toggleIsEditingAt(item.id)}
					taskCompleted={() => taskCompleted(item.id)}
					setName={(text) => setNameAt(text, item.id)}
				/>
			))}
		</ListStyled>
	);
};

List.propTypes = {
	list: PropTypes.array.isRequired,
	removeItemAt: PropTypes.func.isRequired,
	toggleIsEditingAt: PropTypes.func.isRequired,
	taskCompleted: PropTypes.func.isRequired,
	setNameAt: PropTypes.func.isRequired,
};

export default List;
