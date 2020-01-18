import React from "react";
import { connect } from "react-redux";

const Dashboard = props => {
  if (!props.auth) {
    return <h1>You are not logged in!</h1>;
  }

  if (props.auth.givenName) {
    return <h1>{`Welcome, ${props.auth.givenName}!`}</h1>;
  } else {
    return <h1>Welcome!</h1>;
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
