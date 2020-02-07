import React from "react";

import setDefaultColors from "../../utilities/setDefaultColors";

class Landing extends React.Component {
  componentDidMount() {
    document.title = `Geckrello, a Trello Clone`;
    setDefaultColors();
  }

  render() {
    return <h1>Landing</h1>;
  }
}

export default Landing;
