import React from "react";
import PropTypes from "prop-types";

import MainStyled from "./MainStyled";

const Main = ({ children }) => {
  return (
    <MainStyled>
      <h1>MyTrack</h1>
      {children}
    </MainStyled>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Main;
