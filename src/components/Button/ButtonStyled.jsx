import styled from "styled-components";

const ButtonStyled = styled.button`
	background: #62c7ff;
	border: none;
	border-radius: 4px;
	width: 28px;
	height: 28px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;

	&:not(:disabled) {
		cursor: pointer;
	}
`;

export default ButtonStyled;
