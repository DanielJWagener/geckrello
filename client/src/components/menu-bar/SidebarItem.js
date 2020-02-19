import React from "react";

const SidebarItem = ({ togglePanel, toggleTarget, children }) => (
  <button
    className="sidebar-menu__item"
    onClick={() => togglePanel(toggleTarget)}
  >
    {children}
  </button>
);

export default SidebarItem;
