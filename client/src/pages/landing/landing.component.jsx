import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import setDefaultColors from "../../utilities/setDefaultColors";

import "./landing.styles.scss";

export class Landing extends React.Component {
  componentDidMount() {
    document.title = `Geckrello, a Trello Clone`;
    setDefaultColors();
  }

  renderCTA() {
    switch (this.props.auth) {
      case null:
        return <div className="hero__cta-invisible">placeholder</div>;
      case false:
        return (
          <a href="/auth/google" className="hero__cta">
            Sign In with Google
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
          <h1 className="hero__text">
            <span className="hero__text--first">Your Life.</span>{" "}
            <span className="hero__text--second">Organized.</span>
          </h1>
          {this.renderCTA()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Landing);
