import React from "react";

import setDefaultColors from "../../utilities/setDefaultColors";

import "./landing.styles.scss";

class Landing extends React.Component {
  componentDidMount() {
    document.title = `Geckrello, a Trello Clone`;
    setDefaultColors();
  }

  render() {
    return (
      <div className="landing">
        <div className="hero">
          <h1 className="hero__text">Your Life. Organized.</h1>
          <button className="hero__cta">Sign In</button>
        </div>
      </div>
    );
  }
}

export default Landing;
