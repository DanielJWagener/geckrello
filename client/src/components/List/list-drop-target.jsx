import React from "react";
import { ItemTypes } from "../Constants";
import { useDrop } from "react-dnd";

function ListDropTarget({ style, listId, children }) {
  // Drop source hook
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({ listId: listId })
    /*
    collect: monitor => ({
      canDrop: monitor.canDrop()
    })
    */
  });

  return (
    <div ref={drop} className="drop-target" style={{ ...style }}>
      {children}
    </div>
  );
}

export default ListDropTarget;
