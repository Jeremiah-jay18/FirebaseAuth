import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { UseUserAuth } from "./UserAuth";
function HomeProtection({  }) {
  const { user } = UseUserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Navigate to='/home'/>;
}

export default HomeProtection;
