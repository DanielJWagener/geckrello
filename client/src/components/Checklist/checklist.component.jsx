import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { addChecklistItem } from "../../actions";

import ChecklistItem from "./checklist-item.component";

import "./checklist.styles.scss";
import "./widget.styles.scss";

export class Checklist extends React.Component {
  state = {
    mode: "prompt",
    newItemInput: "",
    deleteCount: 0,
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
    const addChecklistItemForm = (
      <form onSubmit={this.onFormSubmit} className="modal-form">
        <div className="modal-form__group">
          <input
            type="text"
            className="modal-form modal-form__input modal-form__input--validation"
            value={this.state.newItemInput}
            onChange={this.handleChange}
            style={{ borderBottomColor: this.state.borderColor }}
            placeholder="Add checklist item"
            autoFocus
          />
        </div>
        <div className="modal-form__group">
          <input
            type="submit"
            className="modal-form__submit"
            value="Add Item"
          />
          <button className="modal-form__cancel" onClick={this.toggleMode}>
            Cancel
          </button>
        </div>
      </form>
    );

    return (
      <div className="checklist">
        <div className="widget-heading">
          <FontAwesomeIcon className="widget-heading__icon" icon={faCheck} />
          <h3 className="widget-heading__text">Checklist</h3>
          <button onClick={this.toggleMode} className="widget-heading__button">
            Add Item
          </button>
        </div>

        <div className="checklist__items">{this.checklistItemsArray()}</div>
        {this.state.mode === "input" ? addChecklistItemForm : <></>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { cardId } = ownProps;
  const card = state.cards.filter(card => card._id === cardId)[0];
  return { card, cards: state.cards };
};

export default connect(mapStateToProps, { addChecklistItem })(Checklist);
