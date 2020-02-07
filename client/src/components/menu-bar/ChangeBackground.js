import React from "react";
import ChangeBackgroundInner from "./ChangeBackgroundInner.js";

const ChangeBackground = props => {
  if (props.hidden) {
    return (
      <div className="sidebar-menu__interface sidebar-menu__interface--hidden">
        <ChangeBackgroundInner
          toggleChangeBackground={props.toggleChangeBackground}
        />
      </div>
    );
  } else {
    return (
      <div className="sidebar-menu__interface sidebar-menu__interface--visible">
        <ChangeBackgroundInner
          toggleChangeBackground={props.toggleChangeBackground}
        />
      </div>
    );
  }
};

export default ChangeBackground;
