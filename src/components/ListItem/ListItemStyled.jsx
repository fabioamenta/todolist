import styled from "styled-components";
import { IconButton } from "../Button/ButtonStyled";
import {
  inlineContainer,
  settings,
  transition,
} from "../../styles/global/settings";

const ItemName = styled.span``;

const ListItemStyled = styled.li`
  ${inlineContainer}
  @media screen and (max-width: ${settings.breakpoints.mobile}) {
    margin-bottom: ${settings.gutters.xs};
  }
  @media screen and (min-width: ${settings.breakpoints.desktop}) {
    margin-bottom: ${settings.gutters.s};
  }

  > ${ItemName} {
    flex: 1;
  }

  ${IconButton} {
    transition: ${transition};
    opacity: 0;
  }

  ${ItemName} {
    color: ${(props) =>
      props.isCompleted
        ? settings.colors.neutral
        : settings.colors.placeholder};
    text-decoration: ${(props) =>
      props.isCompleted ? "none" : "line-through"};
  }

  &:hover {
    ${IconButton} {
      opacity: 1;
      color: ${settings.colors.warning};
    }
  }
`;

const Priority = styled.span`
  content: "";
  margin: 0 ${settings.gutters.xs} 0 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.highPriority ? settings.colors.warning : settings.colors.secondary};
`;

export { ListItemStyled, ItemName, Priority };
