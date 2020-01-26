import React from "react";
import ColorPalette from "./ColorPalette";

// const colors = [
//   {
//     main: "#0000ff",
//     light: "#00a2ff"
//   },
//   {
//     main: "#008000",
//     light: "#00db00"
//   },
//   {
//     main: "#ff0000",
//     light: "#ff0088"
//   },
//   {
//     main: "#ff8c00",
//     light: "#ffc824"
//   },
//   {
//     main: "#800080",
//     light: "#cc00cc"
//   }
// ];

const colors = ["red", "orange", "green", "blue", "purple"];

const colorPalettes = () =>
  colors.map(color => <ColorPalette key={color} color={color} />);

const ChangeBackgroundInner = props => {
  return (
    <div>
      <h2 className="sidebar-menu__heading">Change Background</h2>
      <div
        className="sidebar-menu__interface--close"
        onClick={props.toggleChangeBackground}
      >
        &times;
      </div>
      <div className="colors">{colorPalettes()}</div>
    </div>
  );
};

export default ChangeBackgroundInner;
