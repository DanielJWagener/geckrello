import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Board from "../board/Board";
import Navbar from "../navbar/NavBar";
const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/board" component={Board} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
