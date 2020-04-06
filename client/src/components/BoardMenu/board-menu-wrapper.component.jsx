import React from "react";
import ReactDOM from "react-dom";

import "./board-menu-wrapper.styles.scss";

class BoardMenuWrapper extends React.Component {
  setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  componentDidMount() {
    this.setVh();
    window.addEventListener("resize", this.setVh);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="sidebar__wrapper">
        <div
          className={`sidebar sidebar--${
            this.props.menuHidden ? "hidden" : "shown"
          }`}
        >
          {this.props.children}
        </div>
      </div>,
      document.getElementById("sidebar-root")
    );
  }
}

export default BoardMenuWrapper;
