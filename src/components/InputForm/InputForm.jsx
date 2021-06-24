import React from "react";
import PropTypes from "prop-types";
import { InputWrapper, InputStyled } from "./InputStyled";
import { ButtonStyled } from "../Button/ButtonStyled";
import CheckboxStyled from "../Checkbox/Checkbox";
import Button from "../Button/Button";

const InputForm = ({
  newItemSubmitHandler,
  handleChange,
  handlePriority,
  handleClose,
  pendingItem,
  priorityState,
  title,
}) => {
  const isTyping = !pendingItem;

  return (
    <InputWrapper onSubmit={newItemSubmitHandler} title={title}>
      {title && (
        <h2>
          {title}
          <Button handleClick={handleClose} iconName="close" />
        </h2>
      )}

      <InputStyled
        type="text"
        onChange={handleChange}
        value={pendingItem}
        placeholder="Insert task title..."
      />

      <CheckboxStyled
        onHandleChange={handlePriority}
        swipe
        type="checkbox"
        disabled={isTyping}
        label="High priority"
        checked={priorityState}
      />

      <ButtonStyled type="submit" disabled={isTyping}>
        ADD
      </ButtonStyled>
    </InputWrapper>
  );
};

InputForm.propTypes = {
  newItemSubmitHandler: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handlePriority: PropTypes.func.isRequired,
  handleClose: PropTypes.func,
  pendingItem: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default InputForm;
