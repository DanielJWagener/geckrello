import React from "react";
import SidebarMenu from "./SidebarMenu";

const sidebarRoot = document.getElementById("sidebar-root");

class Sidebar extends React.Component {
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
            this.props.hidden ? "hidden" : "shown"
          }`}
        >
          <SidebarMenu toggleSidebar={this.props.toggleSidebar} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
