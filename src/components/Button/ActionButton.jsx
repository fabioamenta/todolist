import styled, { css } from "styled-components";
import { Save } from "@styled-icons/fa-solid/Save";
import { Times as Close } from "@styled-icons/fa-solid/Times";
import { Plus as Add } from "@styled-icons/fa-solid/Plus";

const defaultStyle = css`
	width: 100%;
	height: 100%;
	color: inherit;
`;

const SaveButton = styled(Save)`
	${defaultStyle}
`;

const CloseButton = styled(Close)`
	${defaultStyle}
`;

const AddButton = styled(Add)`
	${defaultStyle}
`;

export { SaveButton, CloseButton, AddButton };
