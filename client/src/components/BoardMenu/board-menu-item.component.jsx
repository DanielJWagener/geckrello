import React from "react";

const BoardMenuItem = ({ togglePanel, toggleTarget, children }) => (
  <button className="boardmenu__item" onClick={() => togglePanel(toggleTarget)}>
    {children}
  </button>
);

export default BoardMenuItem;
