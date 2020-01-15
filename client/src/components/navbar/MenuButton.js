import React from "react";

const MenuButton = props => {
  // Changes input styling on mouse over
  const onMouseOverHandler = event => {
    event.target.className = "navbar__menu navbar__menu--hover";
  };

  // Changes input styling on mouse out
  const onMouseOutHandler = event => {
    event.target.className = "navbar__menu";
  };

  return (
    <div className="navbar__menu-wrapper">
      <h1
        onClick={props.toggleSidebar}
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
        className="navbar__menu"
      >
        {props.sidebarHidden ? "Show Menu" : "Hide Menu"}
      </h1>
    </div>
  );
  /*
  if (props.sidebarHidden) {
    return (
      <div className="menu navbar__menu">
        <h1 onClick={props.toggleSidebar} onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>{props.sidebarHidden ? "Show Menu" : "Hide Menu"}</h1>
      </div>
    );
  } else {
    return (
      <div className="menu navbar__menu">
        <h1 onClick={props.toggleSidebar}>Hide Menu</h1>
      </div>
    );
  }
  */
};

export default MenuButton;
