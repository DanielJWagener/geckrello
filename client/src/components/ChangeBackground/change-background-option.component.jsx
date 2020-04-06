import React from "react";
import { connect } from "react-redux";

import { updateBoard } from "../../redux/boards/boards.actions";
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
      className="colors__option"
      style={{
        backgroundColor: theme.base
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
