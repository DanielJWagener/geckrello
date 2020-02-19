import React from "react";
import ReactDOM from "react-dom";

const sidebarRoot = document.getElementById("sidebar-root");

class SidebarPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.className = "portal-inner";
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
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default SidebarPortal;
