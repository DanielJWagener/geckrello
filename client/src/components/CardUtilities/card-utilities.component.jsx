import React from "react";
import { connect } from "react-redux";
import { archiveCard, moveCard, copyCard } from "../../actions";
import { withRouter } from "react-router-dom";

import "./card-utilities.styles.scss";

export class CardUtilities extends React.Component {
  state = { panel: "", value: this.props.listHome };

  openMoveCardPanel = () => {
    this.setState({ panel: "move" });
  };

  openCopyCardPanel = () => {
    this.setState({ panel: "copy" });
  };

  closePanel = () => {
    this.setState({ panel: "" });
  };

  archiveCard = () => {
    this.props.archiveCard(this.props.cardId);
    this.setState({ panel: "" });
    this.props.history.goBack();
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  onMoveSubmit = e => {
    e.preventDefault();
    this.props.moveCard(this.props.cardId, this.state.value);
    this.setState({ panel: "", value: this.props.listHome });
    this.props.history.goBack();
  };

  onCopySubmit = e => {
    e.preventDefault();

    this.props.copyCard(this.props.cardId, this.state.value);

    this.setState({ panel: "", value: this.props.listHome });
    this.props.history.goBack();
  };

  listOptionsArray = () =>
    this.props.lists
      .filter(list => !list.archived)
      .map(list => (
        <option key={list._id} value={list._id}>
          {list.title}
        </option>
      ));

  render() {
    if (!this.state.panel) {
      return (
        <div className="card-utilities">
          <button
            className="card-utilities__button"
            onClick={this.openMoveCardPanel}
          >
            Move
            <br />
            Card
          </button>
          <button
            className="card-utilities__button"
            onClick={this.openCopyCardPanel}
          >
            Copy
            <br />
            Card
          </button>
          <button className="card-utilities__button" onClick={this.archiveCard}>
            Archive
            <br />
            Card
          </button>
        </div>
      );
    } else if (this.state.panel === "move") {
      return (
        <div className="card-utilities">
          <button
            className="card-utilities__button"
            onClick={this.openMoveCardPanel}
          >
            Move
            <br />
            Card
          </button>
          <button
            className="card-utilities__button"
            onClick={this.openCopyCardPanel}
          >
            Copy
            <br />
            Card
          </button>
          <button className="card-utilities__button" onClick={this.archiveCard}>
            Archive
            <br />
            Card
          </button>

          <div className="card-utilities__panel">
            <h4 className="card-utilities__panel--heading">Move Card</h4>
            <div
              className="card-utilities__panel--close"
              onClick={this.closePanel}
            >
              &times;
            </div>
            <form onSubmit={this.onMoveSubmit}>
              <label
                className="card-utilities__panel--label"
                htmlFor="moveSelect"
              >
                Choose destination list:{" "}
              </label>
              <select
                value={this.state.value}
                onChange={this.handleChange}
                className="card-utilities__panel--select"
                id="moveSelect"
              >
                {this.listOptionsArray()}
              </select>

              <input
                type="submit"
                value="Move"
                className="card-utilities__panel--submit"
              />
            </form>
          </div>
        </div>
      );
    } else if (this.state.panel === "copy") {
      return (
        <div className="card-utilities">
          <button
            className="card-utilities__button"
            onClick={this.openMoveCardPanel}
          >
            Move
            <br />
            Card
          </button>
          <button
            className="card-utilities__button"
            onClick={this.openCopyCardPanel}
          >
            Copy
            <br />
            Card
          </button>
          <button className="card-utilities__button" onClick={this.archiveCard}>
            Archive
            <br />
            Card
          </button>

          <div className="card-utilities__panel">
            <h4 className="card-utilities__panel--heading">Copy Card</h4>
            <div
              className="card-utilities__panel--close"
              onClick={this.closePanel}
            >
              &times;
            </div>
            <form onSubmit={this.onCopySubmit}>
              <label
                className="card-utilities__panel--label"
                htmlFor="copySelect"
              >
                Choose destination list:{" "}
              </label>
              <select
                value={this.state.value}
                onChange={this.handleChange}
                className="card-utilities__panel--select"
                id="copySelect"
              >
                {this.listOptionsArray()}
              </select>

              <input
                type="submit"
                value="Copy"
                className="card-utilities__panel--submit"
              />
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { lists, cards } = state;
  const listHome = cards.filter(card => card._id === ownProps.cardId)[0]
    .listHome;
  return { lists, cards, listHome };
};

export default withRouter(
  connect(mapStateToProps, { archiveCard, moveCard, copyCard })(CardUtilities)
);
