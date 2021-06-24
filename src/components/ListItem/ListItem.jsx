import React from "react";
import PropTypes from "prop-types";

import CheckboxStyled from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import { ListItemStyled, ItemName, Priority } from "./ListItemStyled";

const ListItem = ({
  item,
  handleRemove,
  handleComplete,
  highPriority,
  isCompleted,
}) => {
  return (
    <ListItemStyled isCompleted={!isCompleted}>
      <CheckboxStyled
        onHandleChange={handleComplete}
        type="checkbox"
        isCompleted={!isCompleted}
      />
      <Priority highPriority={highPriority} />
      <ItemName>{item}</ItemName>
      {!isCompleted && <Button handleClick={handleRemove} iconName="trash" />}
    </ListItemStyled>
  );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  handleRemove: PropTypes.func,
  handleComplete: PropTypes.func,
};

export default ListItem;
