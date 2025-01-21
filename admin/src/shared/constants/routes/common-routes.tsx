import { Suspense } from "react";
import { RouteProps } from "react-router-dom";

import { CommonLayout } from "@/layouts/common";
import { PageSkeleton } from "@/shared/ui";

export enum CommonRoutes {
  COOKIES_POLICY = "cookies-policy",
  NOT_FOUND = "not-found",
}

export const CommonPaths: Record<CommonRoutes, string> = {
  [CommonRoutes.COOKIES_POLICY]: "/cookies-policy",
  [CommonRoutes.NOT_FOUND]: "*",
};

export const CommonRouteConfig: Record<CommonRoutes, RouteProps> = {
  [CommonRoutes.COOKIES_POLICY]: {
    path: CommonPaths[CommonRoutes.COOKIES_POLICY],
    element: (
      <CommonLayout>
        <Suspense fallback={<PageSkeleton />}>
          <h1>CookiesPolicyPage</h1>
        </Suspense>
      </CommonLayout>
    ),
  },
  [CommonRoutes.NOT_FOUND]: {
    path: CommonPaths[CommonRoutes.NOT_FOUND],
    element: (
      <CommonLayout>
        <Suspense fallback={<PageSkeleton />}>
          <h1>SomeNotFoundPage</h1>
        </Suspense>
      </CommonLayout>
    ),
  },
};
