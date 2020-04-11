import React, { Component } from "react";

import BoardTitle from "../BoardTitle/board-title.component";
import MenuToggler from "../MenuToggler/menu-toggler.component";
import BoardMenu from "../BoardMenu/board-menu.component";
import AutoSave from "../AutoSave/auto-save.component";

import "./board-header.styles.scss";

export class BoardHeader extends Component {
  state = {
    menuHidden: true
  };

  toggleMenu = () => {
    if (this.state.menuHidden) {
      this.setState({ menuHidden: false });
    } else {
      this.setState({ menuHidden: true });
    }
  };

  render() {
    return (
      <div className="board-header">
        <div className="board-header--left">
          <BoardTitle board={this.props.board} />
          <AutoSave />
        </div>

        <MenuToggler
          toggleMenu={this.toggleMenu}
          menuHidden={this.state.menuHidden}
        />

        <BoardMenu
          menuHidden={this.state.menuHidden}
          toggleMenu={this.toggleMenu}
        />
      </div>
    );
  }
}

export default BoardHeader;
