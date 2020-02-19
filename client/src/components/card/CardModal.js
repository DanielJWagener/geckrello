import React from "react";
import Description from "./Description";
import Checklist from "./Checklist";
import SideMenu from "./SideMenu";

import "./modal.scss";

function CardModal(props) {
  return (
    <div className="modal__overlay" id={props.cardId}>
      <div className="modal">
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
            <Description cardId={props.cardId}></Description>

            <Checklist cardId={props.cardId}></Checklist>
          </div>
          <div className="modal__main--right">
            <SideMenu cardId={props.cardId}></SideMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
