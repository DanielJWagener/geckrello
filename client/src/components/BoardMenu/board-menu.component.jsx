import React from "react";

import Archive from "../Archive/archive.component";
import ChangeBackground from "../ChangeBackground/change-background.component";
import BoardMenuPanel from "./board-menu-panel.component";
import BoardMenuItem from "./board-menu-item.component";

import "./board-menu.styles.scss";

class BoardMenu extends React.Component {
  state = { panel: "none" };

  togglePanel = panel => {
    this.setState({ panel });
  };

  render() {
    return (
      <div className="sidebar-menu">
        <h2 className="sidebar-menu__heading">Menu</h2>
        <div className="sidebar-menu__close" onClick={this.props.toggleMenu}>
          &times;
        </div>
        <hr />
        <BoardMenuItem toggleTarget="Archive" togglePanel={this.togglePanel}>
          Show Archive
        </BoardMenuItem>
        <BoardMenuItem
          toggleTarget="ChangeBackground"
          togglePanel={this.togglePanel}
        >
          Change Background
        </BoardMenuItem>
        {/* <BoardMenuItem
          toggleTarget="BoardDescription"
          togglePanel={this.togglePanel}
        >
          Board Description
        </BoardMenuItem>
        <BoardMenuItem toggleTarget="Friends" togglePanel={this.togglePanel}>
          Manage Friends
        </BoardMenuItem> */}

        <BoardMenuPanel
          visible={this.state.panel === "Archive"}
          togglePanel={this.togglePanel}
          heading="Archive"
        >
          <Archive />
        </BoardMenuPanel>
        <BoardMenuPanel
          visible={this.state.panel === "ChangeBackground"}
          togglePanel={this.togglePanel}
          heading="Change Background"
        >
          <ChangeBackground />
        </BoardMenuPanel>
        <BoardMenuPanel
          visible={this.state.panel === "BoardDescription"}
          togglePanel={this.togglePanel}
          heading="Board Description"
        ></BoardMenuPanel>
        <BoardMenuPanel
          visible={this.state.panel === "Friends"}
          togglePanel={this.togglePanel}
          heading="Friends"
        ></BoardMenuPanel>
      </div>
    );
  }
}

export default BoardMenu;
