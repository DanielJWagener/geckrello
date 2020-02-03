import React from "react";
import { connect } from "react-redux";
import {
  checkOrUncheckChecklistItem,
  deleteChecklistItem
} from "../../../../actions";

function ChecklistItem(props) {
  function checkOrUncheck() {
    props.checkOrUncheckChecklistItem(
      props.cardId,
      props.checklistItemId,
      props.checked
    );
  }

  function deleteItem() {
    props.deleteChecklistItem(props.cardId, props.checklistItemId);
  }

  // Conditionally render a checked or unchecked checklist item
  return (
    <div className="item">
      <div
        className={`item__checkbox ${
          props.checked
            ? "item__checkbox--checked"
            : "item__checkbox--unchecked"
        }`}
        onClick={checkOrUncheck}
      >
        {props.checked ? <div className="checkmark">&#10004;</div> : <></>}
      </div>
      <div className="item__title">{props.itemLabel}</div>
      <div className="item__delete" onClick={deleteItem}>
        &times;
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { checklistItemId, cardId } = ownProps;

  // Fetch current card from the Redux store
  let card = state.cards.filter(card => card._id === cardId)[0];

  // Fetch this checklist item from that card, return its checked property (a boolean)
  if (card.checklist.length > 0) {
    let checked = card.checklist.filter(item => item._id === checklistItemId)[0]
      .checked;

    return { checked };
  }
};

export default connect(mapStateToProps, {
  checkOrUncheckChecklistItem,
  deleteChecklistItem
})(ChecklistItem);
