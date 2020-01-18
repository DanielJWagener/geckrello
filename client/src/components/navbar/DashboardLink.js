import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/dashboard" className="auth-link">
        Home
      </Link>
    </div>
  );
};

export default Home;
