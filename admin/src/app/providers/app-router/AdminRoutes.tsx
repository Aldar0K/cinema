import { Route } from "react-router-dom";

import { AdminRouteConfig } from "@/shared/constants/routes";

export const AdminRoutes = Object.values(AdminRouteConfig).map(
  ({ path, Component, element }) => (
    <Route key={path} path={path} Component={Component} element={element} />
  ),
);
