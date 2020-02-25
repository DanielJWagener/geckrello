import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import setDefaultColors from "../../utilities/setDefaultColors";

import "./landing.styles.scss";

class Landing extends React.Component {
  componentDidMount() {
    document.title = `Geckrello, a Trello Clone`;
    setDefaultColors();
  }

  renderCTA() {
    switch (this.props.auth) {
      case null:
        return <> </>;
      case false:
        return (
          <a href="/auth/google" className="hero__cta">
            Sign In
          </a>
        );
      default:
        return (
          <Link to="/dashboard" className="hero__cta">
            Go to Dashboard
          </Link>
        );
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="hero">
          <h1 className="hero__text">Your Life. Organized.</h1>
          {this.renderCTA()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Landing);
