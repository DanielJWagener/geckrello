import React from "react";

const MenuToggler = props => {
  // Changes input styling on mouse over
  const onMouseOverHandler = event => {
    event.target.className = "menu-bar__toggler menu-bar__toggler--hover";
  };

  // Changes input styling on mouse out
  const onMouseOutHandler = event => {
    event.target.className = "menu-bar__toggler";
  };

  return (
    <div>
      <h1
        onClick={props.toggleSidebar}
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
        className="menu-bar__toggler"
      >
        {props.sidebarHidden ? "Show Menu" : "Hide Menu"}
      </h1>
    </div>
  );
  /*
  if (props.sidebarHidden) {
    return (
      <div className="menu menu-bar__toggler">
        <h1 onClick={props.toggleSidebar} onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>{props.sidebarHidden ? "Show Menu" : "Hide Menu"}</h1>
      </div>
    );
  } else {
    return (
      <div className="menu menu-bar__toggler">
        <h1 onClick={props.toggleSidebar}>Hide Menu</h1>
      </div>
    );
  }
  */
};

export default MenuToggler;
