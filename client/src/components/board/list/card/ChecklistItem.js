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

  if (!props.checked) {
    return (
      <div className="item">
        <div
          className="item__checkbox item__checkbox--unchecked"
          onClick={checkOrUncheck}
        ></div>
        <div className="item__title">{props.itemLabel}</div>
        <div className="item__delete" onClick={deleteItem}>
          &times;
        </div>
      </div>
    );
  } else {
    return (
      <div className="item">
        <div
          className="item__checkbox item__checkbox--checked"
          onClick={checkOrUncheck}
        >
          <div className="checkmark">&#10004;</div>
        </div>
        <div className="item__title">{props.itemLabel}</div>
        <div className="item__delete" onClick={deleteItem}>
          &times;
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { checklistItemId, cardId } = ownProps;
  let card = state.cards.filter(card => card._id === cardId)[0];
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
