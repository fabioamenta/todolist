import styled from "styled-components";
import InputStyled from "../InputForm/InputStyled";
import ButtonStyled from "../Button/ButtonStyled";

const ListItemStyled = styled.li`
	padding: 8px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.2em;
	+ & {
		border-top: 1px solid lightgray;
	}
	> span {
		flex: 1;
	}
	${InputStyled} {
		+ ${ButtonStyled} {
			transition: opacity 300ms ease-in-out;
			opacity: 0;
		}
		&:focus {
			+ ${ButtonStyled} {
				opacity: 1;
			}
		}
	}
`;

export default ListItemStyled;
