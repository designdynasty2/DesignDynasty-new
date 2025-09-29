import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({
  element,
}) => {
  const token = Cookies.get("DDToken");
  if (!token) return <Navigate to="/login" replace />;
  return element;
};

export const PublicOnlyRoute: React.FC<{ element: React.ReactElement }> = ({
  element,
}) => {
  const token = Cookies.get("DDToken");
  if (token) return <Navigate to="/dashboard" replace />;
  return element;
};
