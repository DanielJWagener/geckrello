import React from "react";
import { connect } from "react-redux";
import { checklistCheck, checklistDelete } from "../../../../actions";

function ChecklistItem(props) {
  function checkItem() {
    props.checklistCheck(props.cardId, props.checklistItemId, props.checked);
  }

  function deleteItem() {
    props.checklistDelete(props.cardId, props.checklistItemId);
    //props.signalDelete();
  }

  if (!props.checked) {
    return (
      <div className="item">
        <div
          className="item__checkbox item__checkbox--unchecked"
          onClick={checkItem}
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
          onClick={checkItem}
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

export default connect(mapStateToProps, { checklistCheck, checklistDelete })(
  ChecklistItem
);
