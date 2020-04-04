import React, { Component } from "react";

import BoardTitle from "../BoardTitle/board-title.component";
import MenuToggler from "../MenuToggler/menu-toggler.component";
import BoardMenu from "../BoardMenu/board-menu.component";
import BoardMenuPortal from "./board-menu-portal.component";

import "./board-header.styles.scss";

export class BoardHeader extends Component {
  state = {
    menuHidden: true,
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
        <BoardTitle board={this.props.board} />
        <MenuToggler
          toggleMenu={this.toggleMenu}
          menuHidden={this.state.menuHidden}
        />
        <BoardMenuPortal>
          <BoardMenu
            menuHidden={this.state.menuHidden}
            toggleMenu={this.toggleMenu}
          />
        </BoardMenuPortal>
      </div>
    );
  }
}

export default BoardHeader;
