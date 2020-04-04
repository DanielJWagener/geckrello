import React from "react";
import { connect } from "react-redux";

import AddBoard from "../../components/AddBoard/add-board.component";
import BoardLink from "../../components/BoardLink/board-link.component";
import { fetchUser } from "../../actions";
import setDefaultColors from "../../utilities/setDefaultColors";

import "./dashboard.styles.scss";

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUser();

    document.title = `Dashboard - Geckrello, a Trello Clone`;
    setDefaultColors();
  }

  renderContent(auth) {
    switch (auth) {
      case null:
        return <h1>Loading...</h1>;
      case false:
        return <h1>You are not logged in!</h1>;
      default:
        const welcomeMessage = this.props.auth.givenName
          ? `Welcome, ${this.props.auth.givenName}!`
          : "Welcome!";

        return (
          <>
            <h1>{welcomeMessage}</h1>
            <div className="dashboard__boards-container">
              <AddBoard />
              {this.renderBoards()}
            </div>
          </>
        );
    }
  }

  renderBoards = () => {
    return this.props.auth.boards.map(({ _id, ...otherProps }) => (
      <BoardLink key={_id} boardId={_id} {...otherProps} />
    ));
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
