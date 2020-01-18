import React from "react";
import { Link } from "react-router-dom";

const DashboardLink = () => {
  return (
    <div>
      <Link to="/dashboard" className="auth-link">
        Dashboard
      </Link>
    </div>
  );
};

export default DashboardLink;
