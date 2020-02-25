import React from "react";
import ReactDOM from "react-dom";
import CardDescription from "../CardDescription/card-description.component";
import Checklist from "../Checklist/checklist.component";
import CardUtilities from "../CardUtilities/card-utilities.component";
import history from "../../utilities/history";

import "./card-modal.styles.scss";

function CardModal(props) {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.goBack()}
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

        <a href="#board" className="modal__close" draggable="false">
          &times;
        </a>
        <div className="modal__main">
          <div className="modal__main--left">
            <CardDescription cardId={props.cardId} />
            <Checklist cardId={props.cardId} />
          </div>
          <div className="modal__main--right">
            <CardUtilities cardId={props.cardId} />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default CardModal;
