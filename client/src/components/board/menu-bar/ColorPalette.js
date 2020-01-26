import React from "react";
import { connect } from "react-redux";

import { updateBoard } from "../../../actions";

const ColorPalette = props => {
  const updateBackgroundColor = () => {
    let root = document.documentElement;

    root.style.setProperty("--body-background", props.color);
    root.style.setProperty("--body-background-light", props.colorLight);
    props.updateBoard(props.board._id, { background: props.color });
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

const mapStateToProps = ({ board }) => {
  return { board };
};

export default connect(mapStateToProps, { updateBoard })(ColorPalette);
