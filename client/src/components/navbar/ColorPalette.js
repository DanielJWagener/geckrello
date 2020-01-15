import React from "react";

const ColorPalette = props => {
  const updateBackgroundColor = () => {
    let root = document.documentElement;

    root.style.setProperty("--body-background", props.color);
    root.style.setProperty("--body-background-light", props.colorLight);
  };
  return (
    <div
      className="color-palette"
      style={{
        borderRadius: "10px",
        height: "7.5rem",
        width: "14rem",
        backgroundColor: props.color,
        margin: "1.5rem",
        cursor: "pointer"
      }}
      onClick={updateBackgroundColor}
    ></div>
  );
};

export default ColorPalette;
