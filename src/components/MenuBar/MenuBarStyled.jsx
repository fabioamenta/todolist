import styled from "styled-components";
import { settings } from "../../styles/global/settings";

const MenuBarStyled = styled.aside`
  background-color: ${settings.colors.primary};

  @media screen and (max-width: ${settings.breakpoints.mobile}) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    ul {
      justify-content: space-evenly;
      display: flex;
    }

    h1 {
      display: none;
    }
  }

  @media screen and (min-width: ${settings.breakpoints.desktop}) {
    padding: calc(${settings.gutters.base} * 2);
    flex-basis: 100%;
    max-width: 330px;

    &,
    nav,
    ul {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    nav,
    ul {
      flex: 1;
    }

    ul li:last-child {
      margin-top: auto;
    }

    h1 {
      margin-bottom: 99px;
    }
  }
`;

export default MenuBarStyled;
