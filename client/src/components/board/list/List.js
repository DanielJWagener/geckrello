import AddCard from "./AddCard";
import Card from "./card/Card";
import CardModal from "./card/CardModal";
import React from "react";
import { connect } from "react-redux";
import { archiveList } from "../../../actions";
import ListDropTarget from "./ListDropTarget";
import memoize from "memoize-one";

class List extends React.Component {
  state = {
    spans: 13,
    height: 130,
    addCardHeight: 67
  };

  // Element height handlers. The Lists' height is based on CSS grid spans, so when the Lists' height changes, we have to set a new value for the spans.
  headingRef = React.createRef();
  cardsRef = React.createRef();

  setSpansListToggle = addCardHeight => {
    // The height of the List is the sum of the heights of its heading, its cards div and the AddCard component. Since we have to create a ref for AddCard directly on that component, we make this function a prop of AddCard, retrieve the height from inside that AddCard, and pass that height as an argument to this function.
    const height =
      this.headingRef.current.clientHeight +
      this.cardsRef.current.clientHeight +
      addCardHeight;

    const spans = Math.ceil(height / 10) + 1; // +1 to ensure a minimum bottom margin of one span height for the List

    this.setState({ spans: spans, height: height });
    if (addCardHeight !== this.state.addCardHeight) {
      this.setState({ addCardHeight: addCardHeight });
    }
  };

  setSpansAddCard = addCardHeight => {
    // When adding a card, the cards div's ref gives us its height before the card has been added. Therefore, before the card is added, we need to predict what that div's height will be and set the List's height accordingly.
    let cardsHeight;
    const cardsDivHeightWhenEmpty = 10;
    const heightOfOneCard = 46;

    if (this.cardsRef.current.clientHeight === cardsDivHeightWhenEmpty) {
      cardsHeight = heightOfOneCard;
    } else {
      cardsHeight = this.cardsRef.current.clientHeight + heightOfOneCard;
    }

    const height =
      this.headingRef.current.clientHeight + cardsHeight + addCardHeight;

    const spans = Math.ceil(height / 10) + 1;
    this.setState({ spans: spans, height: height });
    if (addCardHeight !== this.state.addCardHeight) {
      this.setState({ addCardHeight: addCardHeight });
    }
  };

  // Function to handle list height change, memoized to respond to drag-and-drop events (i.e. to cards prop changes)
  setSpansDnd = memoize((cardsArray, addCardHeight) => {
    const heightOfOneCard = 46;
    const headingHeight = 48;
    const height =
      headingHeight + cardsArray.length * heightOfOneCard + 5 + addCardHeight;
    const spans = Math.ceil(height / 10) + 1;

    this.setState({ spans: spans, height: height });
  });

  // Event handler for when user clicks the remove button
  archiveList = () => {
    this.props.archiveList(this.props.listId);
  };

  // Make array of Card components from props
  cardsArray = () =>
    this.props.cards.map(card => (
      <Card
        key={card._id}
        cardId={card._id}
        cardTitle={card.title}
        inList={this.props.listTitle}
        description={card.description}
      />
    ));

  //Make array of CardPopup components from props
  cardModalsArray = () =>
    this.props.cards.map(card => (
      <CardModal
        key={card.cardId}
        cardId={card.cardId}
        cardTitle={card.title}
        inList={this.props.listTitle}
      />
    ));

  render() {
    // Memoized function: only gets called when value of one of the arguments changes (essentially, when a card gets added to or removed from props)
    this.setSpansDnd(this.props.cards, this.state.addCardHeight);

    return (
      <ListDropTarget
        // Style ensures drop target is the same size as the list
        style={{
          height: `${this.state.height}px`,
          width: "100%",
          gridRowEnd: `span ${this.state.spans}`
        }}
        listId={this.props.listId}
      >
        <div
          className="list"
          ref={this.listRef}
          style={{ gridRowEnd: `span ${this.state.spans}` }}
        >
          <div className="list__remove" onClick={this.archiveList}>
            &times;
          </div>
          <h2 className="list__heading" ref={this.headingRef}>
            {this.props.listTitle}
          </h2>
          <div className="list__cards" ref={this.cardsRef}>
            {this.cardsArray()}
          </div>
          <AddCard
            listHome={this.props.listId}
            setSpansUpdate={this.setSpansListToggle}
            setSpansUpdateForCard={this.setSpansAddCard}
          />
        </div>
        <div className="card-modals">{this.cardModalsArray()}</div>
      </ListDropTarget>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //Iterate over every card in state, return only the non-archived ones with a listHome corresponding to this list
  const { listId } = ownProps;
  const cards = state.cards.filter(
    card => card.listHome === listId && !card.archived
  );

  return { cards };
};
export default connect(mapStateToProps, { archiveList })(List);
