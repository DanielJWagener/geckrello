import React from "react";
import { connect } from "react-redux";

import ArchiveItem from "./archive-item.component";

import { selectArchivedCards } from "../../redux/cards/cards.selectors";
import { selectArchivedLists } from "../../redux/lists/lists.selectors";

import "./archive.styles.scss";

export class Archive extends React.Component {
  state = { mode: "lists" };

  toggleMode = () => {
    if (this.state.mode === "lists") {
      this.setState({ mode: "cards" });
    } else {
      this.setState({ mode: "lists" });
    }
  };

  archivedItemsArray = items =>
    this.props[items].map(item => (
      <ArchiveItem
        key={item._id}
        itemId={item._id}
        itemTitle={item.title}
        itemType={items.substring(0, items.length - 1)}
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
          {this.archivedItemsArray(this.state.mode)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: selectArchivedLists(state),
    cards: selectArchivedCards(state)
  };
};

export default connect(mapStateToProps)(Archive);
