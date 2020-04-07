import React from "react";
import { connect } from "react-redux";
import {
  checkOrUncheckChecklistItem as checkOrUncheck,
  deleteChecklistItem as deleteItem
} from "../../redux/cards/cards.actions";

// Conditionally render a checked or unchecked checklist item
export const ChecklistItem = ({
  checkOrUncheck,
  deleteItem,
  cardId,
  checklistItemId,
  checked,
  itemLabel
}) => (
  <div className="item">
    <div
      className={`item__checkbox ${
        checked ? "item__checkbox--checked" : "item__checkbox--unchecked"
      }`}
      onClick={() => checkOrUncheck(cardId, checklistItemId, checked)}
    >
      {checked ? <div className="checkmark">&#10004;</div> : <></>}
    </div>
    <div className="item__title">{itemLabel}</div>
    <div
      className="item__delete"
      onClick={() => deleteItem(cardId, checklistItemId)}
    >
      &times;
    </div>
  </div>
);

export default connect(null, {
  checkOrUncheck,
  deleteItem
})(ChecklistItem);
