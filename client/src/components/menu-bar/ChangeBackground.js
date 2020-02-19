import React from "react";
import ColorPalette from "./ColorPalette";

const colors = ["red", "orange", "green", "blue", "purple"];

const colorPalettes = () =>
  colors.map(color => <ColorPalette key={color} color={color} />);

const ChangeBackground = () => {
  return <div className="colors">{colorPalettes()}</div>;
};

export default ChangeBackground;
