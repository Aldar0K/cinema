import { Route } from "react-router-dom";

import { UnauthorizedRouteConfig } from "@/shared/constants";

export const UnauthorizedRoutes = Object.values(UnauthorizedRouteConfig).map(
  ({ path, Component, element }) => (
    <Route key={path} path={path} Component={Component} element={element} />
  ),
);
