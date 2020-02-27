import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser } from "./actions";
import Board from "./pages/board/board.component";
import Navbar from "./components/Navbar/navbar.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import Landing from "./pages/landing/landing.component";
import setDefaultColors from "./utilities/setDefaultColors";

import "./App.scss";

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
          <>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/board/:id" component={Board} />
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
