import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import AppLayout from "../components/appLayout";

const PrivateRoutes = ({ children, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  const isLogin = auth.token && auth.user;
  return isLogin ? (
    <Route {...rest} element={<AppLayout>{children}</AppLayout>} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoutes;
