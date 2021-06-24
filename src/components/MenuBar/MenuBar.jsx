import React from "react";
import PropTypes from "prop-types";

import MenuBarStyled from "./MenuBarStyled";

const MenuBar = ({ children }) => {
  return (
    <MenuBarStyled>
      <h1>MyTrack</h1>
      <nav>
        <ul>{children}</ul>
      </nav>
    </MenuBarStyled>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MenuBar;
