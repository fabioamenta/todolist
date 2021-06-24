import styled from "styled-components";
import { settings } from "../../styles/global/settings";

const MainStyled = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .container {
    max-width: 800px;
  }

  @media screen and (max-width: ${settings.breakpoints.mobile}) {
    padding: calc(${settings.gutters.base} * 2) ${settings.gutters.xl};

    h1 {
      text-align: left;
      margin-bottom: calc(${settings.gutters.m} * 2);
    }
    h2 {
      margin-bottom: ${settings.gutters.base};
    }
  }

  @media screen and (min-width: ${settings.breakpoints.desktop}) {
    padding: calc(${settings.gutters.base} * 2);
    h1 {
      display: none;
    }
    h2 {
      margin-bottom: ${settings.gutters.s};
    }
  }
`;

export default MainStyled;
