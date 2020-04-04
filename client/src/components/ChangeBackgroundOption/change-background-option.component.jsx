import React from "react";
import { connect } from "react-redux";

import { updateBoard } from "../../actions";
import colorThemes from "../../utilities/colorThemes";
import updateBackgroundColor from "../../utilities/updateBackgroundColor";

export const ChangeBackgroundOption = props => {
  const theme = colorThemes[props.color];

  const updateBoardBackgroundColor = () => {
    updateBackgroundColor(theme);

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
      onClick={updateBoardBackgroundColor}
    ></div>
  );
};

const mapStateToProps = ({ board }) => {
  return { board };
};

export default connect(mapStateToProps, { updateBoard })(
  ChangeBackgroundOption
);
