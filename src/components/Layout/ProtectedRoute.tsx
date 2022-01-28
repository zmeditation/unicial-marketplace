import React from "react";
import { useAppSelector } from "../../store/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { selectLoginAddress } from "../../store/auth/selectors";

const ProtectedRoute = () => {
  const signStage = useAppSelector(selectLoginAddress);

  return signStage === "" ? <Outlet /> : <Navigate to="/lands" />;
};
export default ProtectedRoute;
