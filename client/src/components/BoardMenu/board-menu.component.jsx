import React from "react";
import BoardMenuContent from "../BoardMenuContent/board-menu-content.component";

import "./board-menu.styles.scss";

const sidebarRoot = document.getElementById("sidebar-root");

class BoardMenu extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  componentDidMount() {
    this.setVh();
    window.addEventListener("resize", this.setVh);
    sidebarRoot.appendChild(this.el);
  }

  componentWillUnmout() {
    sidebarRoot.removeChild(this.el);
  }

  render() {
    return (
      <div className="sidebar__wrapper">
        <div
          className={`sidebar sidebar--${
            this.props.menuHidden ? "hidden" : "shown"
          }`}
        >
          <BoardMenuContent toggleMenu={this.props.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default BoardMenu;
