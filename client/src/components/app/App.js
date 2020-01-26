import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser } from "../../actions";
import Board from "../board/Board";
import Navbar from "../navbar/NavBar";
import Dashboard from "../dashboard/Dashboard";
import Landing from "../Landing";
import setDefaultColors from "../../utilities/setDefaultColors";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchUser();
    //setDefaultColors();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/board/:id" component={Board} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
