import { useEffect } from "react";
import { Navigate, Route, RouteProps, useLocation } from "react-router";

export type ProtectedRouteProps = RouteProps;

export default function ProtectedRoute({ ...routeProps }: ProtectedRouteProps) {
  if (true) {
    return <Route {...routeProps} />;
  } else {
    return <Navigate to="/lands" />;
  }
}
