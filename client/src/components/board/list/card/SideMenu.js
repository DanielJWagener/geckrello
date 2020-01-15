import React from "react";
import { connect } from "react-redux";
import { archiveCard, moveCard, copyCard } from "../../../../actions";

class SideMenu extends React.Component {
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
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  onMoveSubmit = e => {
    e.preventDefault();
    this.props.moveCard(this.props.cardId, this.state.value);
    this.setState({ panel: "", value: this.props.listHome });
  };

  onCopySubmit = e => {
    e.preventDefault();

    // Generate a unique key and cardId in the event of duplicate card titles
    const generateCardId = inputId => {
      if (!this.props.cards.find(card => card.cardId === inputId)) {
        return inputId;
      } else {
        inputId = `${inputId}-duplicate`;
        return generateCardId(inputId);
      }
    };
    let cardId = generateCardId(this.props.cardId);

    this.props.copyCard(this.props.cardId, cardId, this.state.value);

    this.setState({ panel: "", value: this.props.listHome });
  };

  listOptionsArray = () =>
    this.props.lists
      .filter(list => !list.archived)
      .map(list => (
        <option key={list.listId} value={list.listId}>
          {list.title}
        </option>
      ));

  render() {
    if (!this.state.panel) {
      return (
        <div className="sidemenu">
          <button className="sidemenu__button" onClick={this.openMoveCardPanel}>
            Move
            <br />
            Card
          </button>
          <button className="sidemenu__button" onClick={this.openCopyCardPanel}>
            Copy
            <br />
            Card
          </button>
          <button className="sidemenu__button" onClick={this.archiveCard}>
            Archive
            <br />
            Card
          </button>
        </div>
      );
    } else if (this.state.panel === "move") {
      return (
        <div className="sidemenu">
          <button className="sidemenu__button" onClick={this.openMoveCardPanel}>
            Move
            <br />
            Card
          </button>
          <button className="sidemenu__button" onClick={this.openCopyCardPanel}>
            Copy
            <br />
            Card
          </button>
          <button className="sidemenu__button" onClick={this.archiveCard}>
            Archive
            <br />
            Card
          </button>

          <div className="sidemenu__panel">
            <h4 className="sidemenu__panel--heading">Move Card</h4>
            <div className="sidemenu__panel--close" onClick={this.closePanel}>
              &times;
            </div>
            <form onSubmit={this.onMoveSubmit}>
              <label className="sidemenu__panel--label" htmlFor="moveSelect">
                Choose destination list:{" "}
              </label>
              <select
                value={this.state.value}
                onChange={this.handleChange}
                className="sidemenu__panel--select"
                id="moveSelect"
              >
                {this.listOptionsArray()}
              </select>

              <input
                type="submit"
                value="Move"
                className="sidemenu__panel--submit"
              />
            </form>
          </div>
        </div>
      );
    } else if (this.state.panel === "copy") {
      return (
        <div className="sidemenu">
          <button className="sidemenu__button" onClick={this.openMoveCardPanel}>
            Move
            <br />
            Card
          </button>
          <button className="sidemenu__button" onClick={this.openCopyCardPanel}>
            Copy
            <br />
            Card
          </button>
          <button className="sidemenu__button" onClick={this.archiveCard}>
            Archive
            <br />
            Card
          </button>

          <div className="sidemenu__panel">
            <h4 className="sidemenu__panel--heading">Copy Card</h4>
            <div className="sidemenu__panel--close" onClick={this.closePanel}>
              &times;
            </div>
            <form onSubmit={this.onCopySubmit}>
              <label className="sidemenu__panel--label" htmlFor="copySelect">
                Choose destination list:{" "}
              </label>
              <select
                value={this.state.value}
                onChange={this.handleChange}
                className="sidemenu__panel--select"
                id="copySelect"
              >
                {this.listOptionsArray()}
              </select>

              <input
                type="submit"
                value="Copy"
                className="sidemenu__panel--submit"
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
  const listHome = cards.filter(card => card.cardId === ownProps.cardId)[0]
    .listHome;
  return { lists, cards, listHome };
};

export default connect(
  mapStateToProps,
  { archiveCard, moveCard, copyCard }
)(SideMenu);
