import React from "react";
import { connect } from "react-redux";

const Dashboard = props => {
  if (!props.auth) {
    return <h1>You are not logged in!</h1>;
  }
  return <h1>DASHBOARD</h1>;
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
