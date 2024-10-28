import React from "react";
import lodash from "lodash";

import { useCheckLogin } from "@src/helpers/auth";
import { ProjectName } from "@src/helpers/constants";
import { Navigate } from "react-router-dom";

export default function MyRoute({ name, authenticate, children }) {
  if (name) {
    let page_name = lodash.startCase(lodash.camelCase(name));
    document.title = page_name + " | " + ProjectName;
  } else document.title = ProjectName;

  const isAuthenticated = useCheckLogin();
  return isAuthenticated || !authenticate ? (
    children
  ) : (
    <Navigate to="/not-allowed" />
  );
}
