import { Navigate, RouteProps } from "react-router-dom";

import { UnauthorizedLayout } from "@/layouts/unauthorized";
import { SigninPage } from "@/pages/unauthorized";

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

export const UnauthorizedRouteConfig: Record<UnauthorizedRoutes, RouteProps> = {
  [UnauthorizedRoutes.SIGNIN]: {
    path: UnauthorizedPaths[UnauthorizedRoutes.SIGNIN],
    element: (
      <UnauthorizedLayout>
        <SigninPage />
      </UnauthorizedLayout>
    ),
  },
  [UnauthorizedRoutes.RESET_PASSWORD]: {
    path: UnauthorizedPaths[UnauthorizedRoutes.RESET_PASSWORD],
    element: (
      <UnauthorizedLayout>
        <h1>ResetPasswordPage</h1>
      </UnauthorizedLayout>
    ),
  },
  [UnauthorizedRoutes.NOT_FOUND]: {
    path: UnauthorizedPaths[UnauthorizedRoutes.NOT_FOUND],
    element: (
      <Navigate to={UnauthorizedPaths[UnauthorizedRoutes.SIGNIN]} replace />
    ),
  },
};
