import React from "react";

import "./menu-toggler.styles.scss";

const MenuToggler = props => {
  // Changes input styling on mouse over
  const onMouseOverHandler = event => {
    event.target.className = "toggler toggler--hover";
  };

  // Changes input styling on mouse out
  const onMouseOutHandler = event => {
    event.target.className = "toggler";
  };

  return (
    <div>
      <h1
        onClick={props.toggleSidebar}
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
        className="toggler"
      >
        {props.sidebarHidden ? "Show Menu" : "Hide Menu"}
      </h1>
    </div>
  );
};

export default MenuToggler;
