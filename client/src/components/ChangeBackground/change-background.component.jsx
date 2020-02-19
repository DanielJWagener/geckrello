import React from "react";
import ChangeBackgroundOption from "../ChangeBackgroundOption/change-background-option.component";

const colors = ["red", "orange", "green", "blue", "purple"];

const colorPalette = () =>
  colors.map(color => <ChangeBackgroundOption key={color} color={color} />);

const ChangeBackground = () => {
  return <div className="colors">{colorPalette()}</div>;
};

export default ChangeBackground;
