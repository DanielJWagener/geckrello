import React, { Component } from "react";
import { connect } from "react-redux";

import Logo from "./Logo";
import Home from "./Home";
import SignIn from "./SignIn";
import Logout from "./Logout";

import "../../index.css";

class NavBar extends Component {
  renderAuth() {
    switch (this.props.auth) {
      case null:
        return <div> </div>;
      case false:
        return <SignIn />;
      default:
        return <Logout />;
    }
  }

  renderHome() {
    if (!this.props.auth) {
      return <div> </div>;
    }
    return <Home />;
  }

  render() {
    console.log(this.props);
    return (
      <div className="navbar">
        {this.renderHome()}
        <Logo />
        {this.renderAuth()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
