import React from "react";
import { connect } from "react-redux";

import AddBoard from "./AddBoard";
import BoardLink from "./BoardLink";

const Dashboard = props => {
  if (!props.auth) {
    return <h1>You are not logged in!</h1>;
  }

  const renderBoards = () => {
    return props.boards.map(board => {
      return <BoardLink key={board.id} title={board.title} />;
    });
  };

  if (props.auth.givenName) {
    return (
      <>
        <h1>{`Welcome, ${props.auth.givenName}!`}</h1>
        {renderBoards()}
        <AddBoard />
      </>
    );
  } else {
    return <h1>Welcome!</h1>;
  }
};

function mapStateToProps({ auth, boards }) {
  return { auth, boards };
}

export default connect(mapStateToProps)(Dashboard);
