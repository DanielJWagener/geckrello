import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./navbar.styles.scss";

class NavBar extends Component {
  renderAuth() {
    switch (this.props.auth) {
      case null:
        return <> </>;
      case false:
        return (
          <a href="/auth/google" class="navbar__cta">
            Sign In
          </a>
        );
      default:
        return (
          <a href="/api/v1/users/logout" className="navbar__button">
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
      <Link to="/dashboard" className="navbar__button">
        Dashboard
      </Link>
    );
  }

  render() {
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
