import React from "react";

import Archive from "../Archive/archive.component";
import ChangeBackground from "../ChangeBackground/change-background.component";
import SidebarPanel from "../BoardMenuPanel/board-menu-panel.component";
import SidebarItem from "../BoardMenuItem/board-menu-item";

class SidebarMenu extends React.Component {
  state = { panel: "none" };

  togglePanel = panel => {
    this.setState({ panel });
  };

  render() {
    return (
      <div className="sidebar-menu">
        <h2 className="sidebar-menu__heading">Menu</h2>
        <div className="sidebar-menu__close" onClick={this.props.toggleSidebar}>
          &times;
        </div>
        <hr />
        <SidebarItem toggleTarget="Archive" togglePanel={this.togglePanel}>
          Show Archive
        </SidebarItem>
        <SidebarItem
          toggleTarget="ChangeBackground"
          togglePanel={this.togglePanel}
        >
          Change Background
        </SidebarItem>
        <SidebarItem
          toggleTarget="BoardDescription"
          togglePanel={this.togglePanel}
        >
          Edit Board Description
        </SidebarItem>
        <SidebarItem toggleTarget="Friends" togglePanel={this.togglePanel}>
          Manage Friends
        </SidebarItem>

        <SidebarPanel
          visible={this.state.panel === "Archive"}
          togglePanel={this.togglePanel}
          heading="Archive"
        >
          <Archive />
        </SidebarPanel>
        <SidebarPanel
          visible={this.state.panel === "ChangeBackground"}
          togglePanel={this.togglePanel}
          heading="Change Background"
        >
          <ChangeBackground />
        </SidebarPanel>
        <SidebarPanel
          visible={this.state.panel === "BoardDescription"}
          togglePanel={this.togglePanel}
          heading="Board Description"
        ></SidebarPanel>
        <SidebarPanel
          visible={this.state.panel === "Friends"}
          togglePanel={this.togglePanel}
          heading="Friends"
        ></SidebarPanel>
      </div>
    );
  }
}

export default SidebarMenu;
