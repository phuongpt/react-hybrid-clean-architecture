

import { userSelector } from "core";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hook";

const ProtectedRoute = (props: any) => {
  const auth = !!useAppSelector(s => userSelector(s.user)).data;

  return auth ? (
    props.children
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;