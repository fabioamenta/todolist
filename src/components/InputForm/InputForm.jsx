import React from "react";
import PropTypes from "prop-types";
import InputStyled from "./InputStyled";
import ButtonStyled from "../Button/ButtonStyled";
import { AddButton } from "../Button/ActionButton";

const InputForm = ({ newItemSubmitHandler, handleItemInput, pendingItem }) => {
	const isTyping = !pendingItem;
	return (
		<form onSubmit={newItemSubmitHandler} className='todoInput'>
			<InputStyled
				className='input'
				type='text'
				onChange={handleItemInput}
				value={pendingItem}
				placeholder='Add an item'
			/>
			<ButtonStyled type='submit' disabled={isTyping}>
				<AddButton />
			</ButtonStyled>
		</form>
	);
};

InputForm.propTypes = {
	newItemSubmitHandler: PropTypes.func.isRequired,
	handleItemInput: PropTypes.func.isRequired,
	pendingItem: PropTypes.string.isRequired,
};

export default InputForm;
