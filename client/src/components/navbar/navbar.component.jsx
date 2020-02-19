import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../index.css";

class NavBar extends Component {
  renderAuth() {
    switch (this.props.auth) {
      case null:
        return <> </>;
      case false:
        return (
          <a href="/auth/google" class="auth-link">
            Sign In With Google
          </a>
        );
      default:
        return (
          <a href="/api/v1/users/logout" className="auth-link">
            Log Out
          </a>
        );
    }
  }

  renderDashLink() {
    if (!this.props.auth) {
      return <> </>;
    }
    return (
      <Link to="/dashboard" className="auth-link">
        Dashboard
      </Link>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div className="navbar">
        {this.renderDashLink()}
        <Link to="/" className="navbar__link">
          <h1 className="navbar__logo">Geckrello</h1>
        </Link>
        {this.renderAuth()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
