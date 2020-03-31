import React from "react";
import ReactDOM from "react-dom";
import CardDescription from "../CardDescription/card-description.component";
import Checklist from "../Checklist/checklist.component";
import CardUtilities from "../CardUtilities/card-utilities.component";
import { withRouter } from "react-router-dom";

import "./card-modal.styles.scss";
import "./modal-form.styles.scss";

function CardModal(props) {
  return ReactDOM.createPortal(
    <div
      onClick={() => props.history.goBack()}
      className="modal__overlay"
      id={props.cardId}
    >
      <div onClick={e => e.stopPropagation()} className="modal">
        <div className="modal__heading">
          <h2 className="modal__heading--main">{props.cardTitle}</h2>
          <h4 className="modal__heading--sub">
            In list: <span className="list-title">{props.inList}</span>
          </h4>
        </div>

        <div
          onClick={() => props.history.goBack()}
          href="#board"
          className="modal__close"
          draggable="false"
        >
          &times;
        </div>
        <div className="modal__body">
          <div className="modal__body--main">
            <CardDescription cardId={props.cardId} />

            <Checklist cardId={props.cardId} />
          </div>
          <div className="modal__body--utilities">
            <CardUtilities cardId={props.cardId} />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default withRouter(CardModal);
