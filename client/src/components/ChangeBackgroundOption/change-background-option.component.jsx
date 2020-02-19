import React from "react";
import { connect } from "react-redux";

import { updateBoard } from "../../actions";
import colorThemes from "../../utilities/colorThemes";

const ColorPalette = props => {
  const theme = colorThemes[props.color];

  const updateBackgroundColor = () => {
    let root = document.documentElement;

    root.style.setProperty("--color-primary", theme.base);
    root.style.setProperty("--color-primary-lightest", theme.lightest);
    root.style.setProperty("--color-primary-lighter", theme.lighter);
    root.style.setProperty("--color-primary-light", theme.light);
    root.style.setProperty("--color-primary-dark", theme.dark);
    root.style.setProperty("--color-primary-darker", theme.darker);
    root.style.setProperty("--color-primary-darkest", theme.darkest);
    props.updateBoard(props.board._id, { background: props.color });
  };
  return (
    <div
      className="color-palette"
      style={{
        borderRadius: "10px",
        height: "7.5rem",
        width: "14rem",
        backgroundColor: theme.base,
        margin: "1.5rem",
        cursor: "pointer"
      }}
      onClick={updateBackgroundColor}
    ></div>
  );
};

const mapStateToProps = ({ board }) => {
  return { board };
};

export default connect(mapStateToProps, { updateBoard })(ColorPalette);
