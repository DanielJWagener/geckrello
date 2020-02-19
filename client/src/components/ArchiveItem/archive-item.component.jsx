import React from "react";
import { connect } from "react-redux";
import { restoreList, restoreCard } from "../../actions";

const ArchiveItem = props => {
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

export default connect(null, { restoreList, restoreCard })(ArchiveItem);
