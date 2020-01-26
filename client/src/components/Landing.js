import React from "react";

import setDefaultColors from "../utilities/setDefaultColors";

class Landing extends React.Component {
  componentDidMount() {
    setDefaultColors();
  }

  render() {
    return <h1>Landing</h1>;
  }
}
