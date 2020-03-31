import React from "react";

import "./board-menu-panel.styles.scss";

const BoardMenuPanel = ({ visible, togglePanel, children, heading }) => (
  <div
    className={`boardmenu__panel boardmenu__panel--${
      visible ? "visible" : "hidden"
    }`}
  >
    <h2 className="boardmenu__heading">{heading}</h2>
    <div
      className="boardmenu__panel--close"
      onClick={() => togglePanel("none")}
    >
      &times;
    </div>
    {children}
  </div>
);

export default BoardMenuPanel;
