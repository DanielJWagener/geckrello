import React from "react";
import { ItemTypes } from "../Constants";
import { useDrag } from "react-dnd";
import { connect } from "react-redux";
import { moveCard } from "../../redux/cards/cards.actions";

import "./card.styles.scss";

export function Card({ moveCard, cardId, cardTitle }) {
  // Drag source hook
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        moveCard(cardId, dropResult.listId);
      }
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const popupHref = `#${cardId}`;

  return (
    <div className="card">
      <a
        href={popupHref}
        ref={drag}
        className="card__preview"
        style={{
          opacity: isDragging ? 0.5 : 1,
          zIndex: isDragging ? 3 : 3,
          cursor: "move"
        }}
      >
        {cardTitle}
      </a>
    </div>
  );
}

export default connect(null, { moveCard })(Card);
