import React from "react";

const Logout = () => {
  return (
    <div>
      <a href="/api/v1/users/logout" className="auth-link">
        Log Out
      </a>
    </div>
  );
};

export default Logout;
