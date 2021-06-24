import React from "react";
import propTypes from "prop-types";
import RootStyled from "./RootStyled";

const Root = ({ children }) => <RootStyled>{children}</RootStyled>;

Root.propTypes = {
  children: propTypes.node.isRequired,
};

export default Root;
