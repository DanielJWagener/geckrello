import React from "react";

import "./board-menu-item.styles.scss";

const BoardMenuItem = ({ togglePanel, toggleTarget, children }) => (
  <button className="boardmenu__item" onClick={() => togglePanel(toggleTarget)}>
    {children}
  </button>
);

export default BoardMenuItem;
