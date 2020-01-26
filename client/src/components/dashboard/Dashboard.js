import React from "react";
import { connect } from "react-redux";

import AddBoard from "./AddBoard";
import BoardLink from "./BoardLink";
import { fetchUser } from "../../actions";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderBoards = () => {
    return this.props.auth.boards.map(board => {
      return (
        <BoardLink key={board._id} title={board.title} boardId={board._id} />
      );
    });
  };

  render() {
    if (this.props.auth) {
      if (this.props.auth.givenName) {
        return (
          <>
            <h1>{`Welcome, ${this.props.auth.givenName}!`}</h1>
            {this.renderBoards()}
            <AddBoard />
          </>
        );
      } else {
        return <h1>Welcome!</h1>;
      }
    }

    if (!this.props.auth) {
      return <h1>You are not logged in!</h1>;
    }
  }
}

function mapStateToProps({ auth, boards }) {
  return { auth, boards };
}

export default connect(mapStateToProps, { fetchUser })(Dashboard);
