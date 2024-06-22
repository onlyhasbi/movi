import React from "react";
import useSession from "../hooks/useSession";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Protected = ({ children }: Props) => {
  const { isAuthenticated } = useSession();
  return isAuthenticated ? children : <Navigate to="/movies" replace />;
};

export default Protected;
