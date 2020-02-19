import React from "react";
import { connect } from "react-redux";

import ArchiveItem from "../ArchiveItem/archive-item.component";

class Archive extends React.Component {
  state = { mode: "lists" };

  toggleMode = () => {
    if (this.state.mode === "lists") {
      this.setState({ mode: "cards" });
    } else {
      this.setState({ mode: "lists" });
    }
  };

  archivedCardsArray = () =>
    this.props.cards
      .filter(card => card.archived)
      .map(card => (
        <ArchiveItem
          key={card._id}
          itemId={card._id}
          itemTitle={card.title}
          itemType="card"
        />
      ));

  archivedListsArray = () =>
    this.props.lists
      .filter(list => list.archived)
      .map(list => (
        <ArchiveItem
          key={list._id}
          itemId={list._id}
          itemTitle={list.title}
          itemType="list"
        />
      ));

  render() {
    return (
      <div>
        <div className="archive-toggle">
          <button
            className={`archive-toggle__button archive-toggle__button${
              this.state.mode === "lists" ? "--active" : "--inactive"
            }`}
            onClick={this.toggleMode}
          >
            Lists
          </button>
          <button
            className={`archive-toggle__button archive-toggle__button${
              this.state.mode === "cards" ? "--active" : "--inactive"
            }`}
            onClick={this.toggleMode}
          >
            Cards
          </button>
        </div>
        <div className="archive__list">
          {this.state.mode === "lists"
            ? this.archivedListsArray()
            : this.archivedCardsArray()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state.lists, cards: state.cards };
};

export default connect(mapStateToProps)(Archive);
