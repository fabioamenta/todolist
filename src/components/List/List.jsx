import React from "react";
import PropTypes from "prop-types";

import ListStyled from "./ListStyled";
import ListItem from "../ListItem/ListItem";

const List = ({ list, removeTask, taskCompleted }) => {
  return (
    <ListStyled>
      {list.map((item, index) => (
        <ListItem
          key={index}
          item={item.name}
          handleRemove={() => removeTask(item.id)}
          handleComplete={() => taskCompleted(item.id)}
          isCompleted={item.isCompleted}
          highPriority={item.highPriority}
        />
      ))}
    </ListStyled>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  removeTask: PropTypes.func,
  taskCompleted: PropTypes.func,
};

export default List;
