import React from "react";

import Archive from "./Archive";
import ChangeBackground from "./ChangeBackground";
import SidebarPanel from "./SidebarPanel";
import SidebarItem from "./SidebarItem";

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

        <a
          href="https://github.com/chingu-voyages/v11-geckos-team-03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SidebarItem toggleTarget="none" togglePanel={this.togglePanel}>
            View Repo
          </SidebarItem>
        </a>
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
      </div>
    );
  }
}

export default SidebarMenu;
