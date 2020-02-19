import React from "react";

const SidebarPanel = ({ visible, togglePanel, children, heading }) => (
  <div
    className={`sidebar-menu__interface sidebar-menu__interface--${
      visible ? "visible" : "hidden"
    }`}
  >
    <h2 className="sidebar-menu__heading">{heading}</h2>
    <div
      className="sidebar-menu__interface--close"
      onClick={() => togglePanel("none")}
    >
      &times;
    </div>
    {children}
  </div>
);

export default SidebarPanel;
