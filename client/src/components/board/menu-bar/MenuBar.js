import React, { Component } from "react";

import BoardTitle from "./BoardTitle";
import MenuToggler from "./MenuToggler";
import Sidebar from "./Sidebar";
import SidebarPortal from "./SidebarPortal";

import "../../../index.css";

class MenuBar extends Component {
  state = {
    sidebarHidden: true
  };

  toggleSidebar = () => {
    if (this.state.sidebarHidden) {
      this.setState({ sidebarHidden: false });
    } else {
      this.setState({ sidebarHidden: true });
    }
  };

  render() {
    return (
      <div className="menu-bar">
        <BoardTitle />
        <MenuToggler
          toggleSidebar={this.toggleSidebar}
          sidebarHidden={this.state.sidebarHidden}
        />
        <SidebarPortal>
          <Sidebar
            hidden={this.state.sidebarHidden}
            toggleSidebar={this.toggleSidebar}
          />
        </SidebarPortal>
      </div>
    );
  }
}

export default MenuBar;
