import React from "react";
import { Link } from "react-router-dom";

const BoardLink = props => {
  return (
    <Link to={`/board/${props.boardId}`}>
      <h1>{`I'm a link to ${props.title}`}</h1>;
    </Link>
  );
};

export default BoardLink;
