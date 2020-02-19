import React from "react";

import Archive from "./Archive";
import ChangeBackground from "./ChangeBackground";
import SidebarPanel from "./SidebarPanel";

class SidebarMenu extends React.Component {
  // state = { archiveHidden: true, changeBackgroundHidden: true };
  state = { panel: "none" };

  togglePanel = panel => {
    this.setState({ panel });
  };

  toggleArchive = () => {
    this.setState({ archiveHidden: !this.state.archiveHidden });
  };

  toggleChangeBackground = () => {
    this.setState({
      changeBackgroundHidden: !this.state.changeBackgroundHidden
    });
  };

  render() {
    return (
      <div className="sidebar-menu">
        <h2 className="sidebar-menu__heading">Menu</h2>
        <div className="sidebar-menu__close" onClick={this.props.toggleSidebar}>
          &times;
        </div>
        <hr />
        <button
          className="sidebar-menu__item"
          onClick={() => this.togglePanel("Archive")}
        >
          Show Archive
        </button>
        <button
          className="sidebar-menu__item"
          onClick={() => this.togglePanel("ChangeBackground")}
        >
          Change Background
        </button>
        <a
          href="https://github.com/chingu-voyages/v11-geckos-team-03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="sidebar-menu__item">View Repo</button>
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
