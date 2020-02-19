import React from "react";
import ChangeBackgroundInner from "./ChangeBackgroundInner.js";

const ChangeBackground = ({ hidden, toggleChangeBackground }) => (
  <div
    className={`sidebar-menu__interface sidebar-menu__interface--${
      hidden ? "hidden" : "visible"
    }`}
  >
    <ChangeBackgroundInner toggleChangeBackground={toggleChangeBackground} />
  </div>
);

export default ChangeBackground;
