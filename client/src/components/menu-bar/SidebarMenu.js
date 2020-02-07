import React from "react";

import Archive from "./Archive";
import ChangeBackground from "./ChangeBackground";

class SidebarMenu extends React.Component {
  state = { archiveHidden: true, changeBackgroundHidden: true };

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
        <button className="sidebar-menu__item" onClick={this.toggleArchive}>
          Show Archive
        </button>
        <button
          className="sidebar-menu__item"
          onClick={this.toggleChangeBackground}
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
        <Archive
          hidden={this.state.archiveHidden}
          toggleArchive={this.toggleArchive}
        />
        <ChangeBackground
          hidden={this.state.changeBackgroundHidden}
          toggleChangeBackground={this.toggleChangeBackground}
        />
      </div>
    );
  }
}

export default SidebarMenu;
