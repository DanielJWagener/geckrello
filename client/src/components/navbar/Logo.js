import React from "react";
import { Link } from "react-router-dom";

const logo = () => {
  return (
    <div>
      <Link to="/" className="navbar__link">
        <h1 className="navbar__logo">Geckrello</h1>
      </Link>
    </div>
  );
};

export default logo;
