import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import AppWrap from "../wrapper/AppWrap";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
      }
    } else {
      navigate("/login", { replace: true });
    }
  });

  return (
    <div>
      <h1>You are logged in!</h1>
    </div>
  );
};

export default AppWrap(Dashboard, "dashboard");
