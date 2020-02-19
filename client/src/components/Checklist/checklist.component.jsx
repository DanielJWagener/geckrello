import React from "react";
import { connect } from "react-redux";
import { addChecklistItem } from "../../actions";

import ChecklistItem from "../ChecklistItem/checklist-item.component";

class Checklist extends React.Component {
  state = {
    mode: "prompt",
    newItemInput: "",
    deleteCount: 0
  };

  toggleMode = () => {
    if (this.state.mode === "prompt") {
      this.setState({ mode: "input" });
    } else if (this.state.mode === "input") {
      this.setState({ mode: "prompt" });
    }
  };

  onFormSubmit = e => {
    e.preventDefault();

    if (!this.state.newItemInput) {
      return false;
    }

    //Redux call to add new item to checklist array of card (unchecked by default)
    this.props.addChecklistItem(
      this.props.cardId,
      this.state.newItemInput,
      false
    );

    //Clear input from state
    this.setState({ newItemInput: "" });
  };

  handleChange = e => {
    this.setState({ newItemInput: e.target.value });
  };

  checklistItemsArray = () =>
    this.props.card.checklist.map(item => (
      <ChecklistItem
        key={item._id}
        itemLabel={item.label}
        checklistItemId={item._id}
        cardId={this.props.cardId}
      />
    ));

  render() {
    if (this.state.mode === "prompt") {
      return (
        <div className="checklist">
          <h3 className="modal__widget-heading">Checklist</h3>
          <button onClick={this.toggleMode} className="modal__button--inline">
            Add Item
          </button>
          <div className="checklist__items">{this.checklistItemsArray()}</div>
        </div>
      );
    } else {
      return (
        <div className="checklist">
          <h3 className="modal__widget-heading">Checklist</h3>
          <div className="checklist__items">{this.checklistItemsArray()}</div>
          <form onSubmit={this.onFormSubmit} className="form">
            <div className="form__group">
              <input
                type="text"
                className="form form__input form__input--validation"
                value={this.state.newItemInput}
                onChange={this.handleChange}
                style={{ borderBottomColor: this.state.borderColor }}
                placeholder="Add checklist item"
                autoFocus
              />
            </div>
            <div className="form__group">
              <input type="submit" className="form__submit" value="Add Item" />
              <button className="form__cancel" onClick={this.toggleMode}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { cardId } = ownProps;
  const card = state.cards.filter(card => card._id === cardId)[0];
  return { card, cards: state.cards };
};

export default connect(mapStateToProps, { addChecklistItem })(Checklist);
