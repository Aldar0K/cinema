import { RouteProps } from "react-router-dom";

import { CommonLayout } from "@/layouts/common";

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
        <h1>CookiesPolicyPage</h1>
      </CommonLayout>
    ),
  },
  [CommonRoutes.NOT_FOUND]: {
    path: CommonPaths[CommonRoutes.NOT_FOUND],
    element: (
      <CommonLayout>
        <h1>SomeNotFoundPage</h1>
      </CommonLayout>
    ),
  },
};
