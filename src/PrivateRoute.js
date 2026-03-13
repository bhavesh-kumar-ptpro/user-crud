import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = localStorage.getItem("auth");

  return isAuth ? children : <Navigate to="/login" />;
};