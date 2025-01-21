import { Suspense } from "react";
import { Route } from "react-router-dom";

import { CommonRouteConfig } from "@/shared/constants/routes";
import { PageSkeleton } from "@/shared/ui";

export const CommonRoutes = Object.values(CommonRouteConfig).map(
  ({ path, Component, element }) => (
    <Route
      key={path}
      path={path}
      Component={Component}
      element={<Suspense fallback={<PageSkeleton />}>{element}</Suspense>}
    />
  ),
);
