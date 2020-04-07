import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { changeBackgroundForBoardPending } from "../../redux/boards/boards.actions";

import colorThemes from "../../utilities/colorThemes";

import "./board-link.styles.scss";

export const BoardLink = props => {
  const backgroundColor = colorThemes[props.background].dark;

  return (
    <Link
      className="board-link"
      to={`/board/${props.boardId}`}
      style={{ backgroundColor }}
      onClick={() => props.changeBackgroundForBoardPending(props.background)}
    >
      <div className="board-link__link">{props.title}</div>
    </Link>
  );
};

export default connect(null, { changeBackgroundForBoardPending })(BoardLink);
