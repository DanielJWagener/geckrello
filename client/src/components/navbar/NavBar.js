import React, { Component } from "react";

import Logo from "./Logo";
import Home from "./Home";
import SignIn from "./SignIn";

import "../../index.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Home />
        <Logo />
        <SignIn />
      </div>
    );
  }
}

export default NavBar;
