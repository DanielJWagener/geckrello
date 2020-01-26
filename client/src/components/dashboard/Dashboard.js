import React from "react";
import { connect } from "react-redux";

import AddBoard from "./AddBoard";
import BoardLink from "./BoardLink";
import { fetchUser } from "../../actions";
import "./dashboard.scss";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUser();

    let root = document.documentElement;

    root.style.setProperty("--body-background", "#eeeeee");
    //root.style.setProperty("--body-background-light", props.colorLight);
  }

  renderContent(auth) {
    switch (auth) {
      case null:
        return <h1>Loading...</h1>;
      case false:
        return <h1>You are not logged in!</h1>;
      default:
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
  }

  renderBoards = () => {
    return this.props.auth.boards.map(board => {
      return (
        <BoardLink key={board._id} title={board.title} boardId={board._id} />
      );
    });
  };

  render() {
    return (
      <div className="dashboard">{this.renderContent(this.props.auth)}</div>
    );
  }
}

function mapStateToProps({ auth, boards }) {
  return { auth, boards };
}

export default connect(mapStateToProps, { fetchUser })(Dashboard);
