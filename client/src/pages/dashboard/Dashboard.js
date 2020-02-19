import React from "react";
import { connect } from "react-redux";

import AddBoard from "../../components/AddBoard/add-board.component";
import BoardLink from "../../components/BoardLink/board-link.component";
import { fetchUser } from "../../actions";
import "./dashboard.scss";
import setDefaultColors from "../../utilities/setDefaultColors";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUser();

    document.title = `Dashboard - Geckrello, a Trello Clone`;
    setDefaultColors();
    let root = document.documentElement;

    root.style.setProperty("--color-primary", "#eeeeee");
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
