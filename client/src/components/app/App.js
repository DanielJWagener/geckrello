import React from "react";
import Board from "../board/Board";
import NavBar from "../navbar/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Render two elements: a navbar and a board
  render() {
    return (
      <div className="App">
        <NavBar />
        <Board />
      </div>
    );
  }
}

export default App;
