import { Route } from "react-router-dom";

import { CommonRouteConfig } from "@/shared/constants/routes";

export const CommonRoutes = Object.values(CommonRouteConfig).map(
  ({ path, Component, element }) => (
    <Route key={path} path={path} Component={Component} element={element} />
  ),
);
