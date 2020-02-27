import React from "react";
import { Link } from "react-router-dom";

import colorThemes from "../../utilities/colorThemes";

import "./board-link.styles.scss";

const BoardLink = props => {
  const backgroundColor = colorThemes[props.background].dark;
  console.log(backgroundColor);

  return (
    <Link
      className="board-link"
      to={`/board/${props.boardId}`}
      style={{ backgroundColor }}
    >
      <div className="board-link__link">{props.title}</div>
    </Link>
  );
};

export default BoardLink;
