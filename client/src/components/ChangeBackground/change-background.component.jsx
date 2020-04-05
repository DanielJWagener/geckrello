import React from "react";

import colorThemes from "../../utilities/colorThemes";
import ChangeBackgroundOption from "../ChangeBackground/change-background-option.component";

import "./change-background.styles.scss";

const colors = Object.keys(colorThemes);

const colorPalette = () =>
  colors.map(color => <ChangeBackgroundOption key={color} color={color} />);

const ChangeBackground = () => {
  return <div className="colors">{colorPalette()}</div>;
};

export default ChangeBackground;
