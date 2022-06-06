import React, { useEffect, useState } from "react";
import { Navigate, Route } from "react-router-dom";
import {
  getEmployeeById,
  testAuthenticated,
} from "../../employee/EmployeeService";

const ProtectedRoute = ({ children }: any) => {
  const [authorized, setAuthorized] = useState<boolean>(true);
  const isAuthorized = () => {
    testAuthenticated()
      .then(() => {})
      .catch(() => setAuthorized(false));
  };
  useEffect(() => {
    isAuthorized();
  }, []); 

  return authorized ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
