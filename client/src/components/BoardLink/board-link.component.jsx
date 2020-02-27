import React from "react";
import { Link } from "react-router-dom";

import colorThemes from "../../utilities/colorThemes";

import "./board-link.styles.scss";

const BoardLink = props => {
  const backgroundColor = colorThemes[props.background].dark;
  console.log(backgroundColor);

  return (
    <div className="board-link" style={{ backgroundColor }}>
      <Link className="board-link__link" to={`/board/${props.boardId}`}>
        <h1>{props.title}</h1>
      </Link>
    </div>
  );
};

export default BoardLink;
