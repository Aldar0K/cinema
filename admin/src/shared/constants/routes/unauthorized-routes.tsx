import { ReactNode, Suspense } from "react";
import { Navigate, RouteProps } from "react-router-dom";

import { UnauthorizedLayout } from "@/layouts/unauthorized";
import { SigninPage } from "@/pages/unauthorized";
import { PageSkeleton, PageTransition } from "@/shared/ui";

export enum UnauthorizedRoutes {
  SIGNIN = "sign-in",
  RESET_PASSWORD = "reset-password",
  NOT_FOUND = "not-found",
}

export const UnauthorizedPaths: Record<UnauthorizedRoutes, string> = {
  [UnauthorizedRoutes.SIGNIN]: "/login",
  [UnauthorizedRoutes.RESET_PASSWORD]: "/reset-password",
  [UnauthorizedRoutes.NOT_FOUND]: "*",
};

const withLayout = (component: ReactNode) => (
  <UnauthorizedLayout>
    <Suspense fallback={<PageSkeleton />}>
      <PageTransition>{component}</PageTransition>
    </Suspense>
  </UnauthorizedLayout>
);

export const UnauthorizedRouteConfig: Record<UnauthorizedRoutes, RouteProps> = {
  [UnauthorizedRoutes.SIGNIN]: {
    path: UnauthorizedPaths[UnauthorizedRoutes.SIGNIN],
    element: withLayout(<SigninPage />),
  },
  [UnauthorizedRoutes.RESET_PASSWORD]: {
    path: UnauthorizedPaths[UnauthorizedRoutes.RESET_PASSWORD],
    element: withLayout(<h1>ResetPasswordPage</h1>),
  },
  [UnauthorizedRoutes.NOT_FOUND]: {
    path: UnauthorizedPaths[UnauthorizedRoutes.NOT_FOUND],
    element: (
      <Navigate to={UnauthorizedPaths[UnauthorizedRoutes.SIGNIN]} replace />
    ),
  },
};
