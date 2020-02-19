import React, { Component } from "react";

import BoardTitle from "../BoardTitle/board-title.component";
import MenuToggler from "../MenuToggler/menu-toggler.component";
import Sidebar from "../BoardMenu/board-menu.component";
import BoardMenuPortal from "../BoardMenuPortal/board-menu-portal.component";

import "../../index.css";

class BoardHeader extends Component {
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
        <BoardTitle board={this.props.board} />
        <MenuToggler
          toggleSidebar={this.toggleSidebar}
          sidebarHidden={this.state.sidebarHidden}
        />
        <BoardMenuPortal>
          <Sidebar
            hidden={this.state.sidebarHidden}
            toggleSidebar={this.toggleSidebar}
          />
        </BoardMenuPortal>
      </div>
    );
  }
}

export default BoardHeader;
