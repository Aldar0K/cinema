import { Suspense } from "react";
import { Route } from "react-router-dom";

import { UnauthorizedRouteConfig } from "@/shared/constants/routes";
import { PageSkeleton } from "@/shared/ui";

export const UnauthorizedRoutes = Object.values(UnauthorizedRouteConfig).map(
  ({ path, Component, element }) => (
    <Route
      key={path}
      path={path}
      Component={Component}
      element={<Suspense fallback={<PageSkeleton />}>{element}</Suspense>}
    />
  ),
);
