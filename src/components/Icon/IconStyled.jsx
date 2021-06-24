import styled from "styled-components";

const IconStyled = styled.svg`
  width: 20px;
  height: ${(props) => (props.name === "trash" ? "23px" : "20px")};
  fill: currentColor;
`;

export default IconStyled;
