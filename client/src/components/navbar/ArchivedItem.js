import React from "react";
import { connect } from "react-redux";
import { restoreList, restoreCard } from "../../actions";

const ArchivedItem = props => {
  const restore = () => {
    if (props.itemType === "list") {
      props.restoreList(props.itemId);
    } else if (props.itemType === "card") {
      props.restoreCard(props.itemId);
    }
  };

  return (
    <div className="archive__item">
      <div className="archive__item--title">{props.itemTitle}</div>
      <button className="archive__item--restore" onClick={restore}>
        Restore
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { lists: state.lists, cards: state.cards };
};

export default connect(
  mapStateToProps,
  { restoreList, restoreCard }
)(ArchivedItem);
