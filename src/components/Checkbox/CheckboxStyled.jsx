import styled from "styled-components";

const CheckboxStyled = styled.button`
	font-family: "Lato", sans-serif;
	margin-right: 25px;
	padding: 8px;
	border-radius: 4px;
	border: none;
	font-size: 1em;
	flex: 0 0 auto;
	width: 20px;
	height: 20px;
	outline: none;
	color: rgb(20, 190, 55);
	transition: all 200ms ease-in-out;
	box-shadow: 0px 0px 2px rgba(100, 100, 100, 0.15);
	&:hover {
		box-shadow: 0px 0px 2px rgba(50, 50, 50, 0.35);
	}
	&:focus {
		box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.75);
	}
	&::placeholder {
		color: rgb(100, 100, 100);
	}
	&:not(:disabled) {
		cursor: pointer;
	}
`;

export default CheckboxStyled;
