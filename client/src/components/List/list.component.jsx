import AddCard from "../AddCard/add-card.component";
import Card from "../Card/card.component";
import CardModal from "../CardModal/card-modal.component";
import React from "react";
import { connect } from "react-redux";
import { archiveList } from "../../actions";
import ListDropTarget from "./list-drop-target";

import "./list.styles.scss";

export const List = props => {
  // Event handler for when user clicks the remove button
  const archiveList = () => {
    props.archiveList(props.listId);
  };

  // Make array of Card components from props
  const cardsArray = () =>
    props.cards.map(card => (
      <Card
        key={card._id}
        cardId={card._id}
        cardTitle={card.title}
        inList={props.listTitle}
        description={card.description}
      />
    ));

  //Make array of CardPopup components from props
  const cardModalsArray = () =>
    props.cards.map(card => (
      <CardModal
        key={card._id}
        cardId={card._id}
        cardTitle={card.title}
        inList={props.listTitle}
      />
    ));

  return (
    <ListDropTarget listId={props.listId}>
      <div className="list">
        <div className="list__remove" onClick={archiveList}>
          &times;
        </div>
        <h2 className="list__heading">{props.listTitle}</h2>
        <div className="list__cards">{cardsArray()}</div>
        <AddCard listHome={props.listId} />
      </div>
      <div className="card-modals">{cardModalsArray()}</div>
    </ListDropTarget>
  );
};

const mapStateToProps = (state, ownProps) => {
  //Iterate over every card in state, return only the non-archived ones with a listHome corresponding to this list
  const { listId } = ownProps;
  const cards = state.cards.filter(
    card => card.listHome === listId && !card.archived
  );

  return { cards };
};
export default connect(mapStateToProps, { archiveList })(List);
