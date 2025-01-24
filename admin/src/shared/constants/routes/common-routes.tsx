import { ReactNode, Suspense } from "react";
import { RouteProps } from "react-router-dom";

import { CommonLayout } from "@/layouts/common";
import { PageSkeleton, PageTransition } from "@/shared/ui";

export enum CommonRoutes {
  COOKIES_POLICY = "cookies-policy",
  NOT_FOUND = "not-found",
}

export const CommonPaths: Record<CommonRoutes, string> = {
  [CommonRoutes.COOKIES_POLICY]: "/cookies-policy",
  [CommonRoutes.NOT_FOUND]: "*",
};

const withLayout = (component: ReactNode) => (
  <CommonLayout>
    <Suspense fallback={<PageSkeleton />}>
      <PageTransition>{component}</PageTransition>
    </Suspense>
  </CommonLayout>
);

export const CommonRouteConfig: Record<CommonRoutes, RouteProps> = {
  [CommonRoutes.COOKIES_POLICY]: {
    path: CommonPaths[CommonRoutes.COOKIES_POLICY],
    element: withLayout(<h1>CookiesPolicyPage</h1>),
  },
  [CommonRoutes.NOT_FOUND]: {
    path: CommonPaths[CommonRoutes.NOT_FOUND],
    element: withLayout(<h1>NotFoundPage</h1>),
  },
};
