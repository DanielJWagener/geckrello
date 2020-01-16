import React from "react";
import Board from "../board/Board";
import Navbar from "../navbar/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Board />
      </div>
    );
  }
}

export default App;
