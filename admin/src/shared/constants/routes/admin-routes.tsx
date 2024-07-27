import { Navigate, RouteProps } from "react-router-dom";

import { AuthorizedLayout } from "@/layouts/authorized";
import { HomePage, MoviesPage } from "@/pages/authorized";

export enum AdminRoutes {
  MAIN = "main",
  MOVIES = "movies",
  USERS = "users",
  FINANCE = "finance",
  SETTINGS = "settings",
  PROFILE = "profile",
  NOT_FOUND = "not-found",
}

export const AdminPaths: Record<AdminRoutes, string> = {
  [AdminRoutes.MAIN]: "/",
  [AdminRoutes.MOVIES]: "/movies",
  [AdminRoutes.USERS]: "/users",
  [AdminRoutes.FINANCE]: "/finance",
  [AdminRoutes.SETTINGS]: "/settings",
  [AdminRoutes.PROFILE]: "/profile",
  [AdminRoutes.NOT_FOUND]: "*",
};

export const AdminRouteConfig: Record<AdminRoutes, RouteProps> = {
  [AdminRoutes.MAIN]: {
    path: AdminPaths[AdminRoutes.MAIN],
    element: (
      <AuthorizedLayout>
        <HomePage />
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.MOVIES]: {
    path: AdminPaths[AdminRoutes.MOVIES],
    element: (
      <AuthorizedLayout>
        <MoviesPage />
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.USERS]: {
    path: AdminPaths[AdminRoutes.USERS],
    element: (
      <AuthorizedLayout>
        <h1>UsersPage</h1>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.FINANCE]: {
    path: AdminPaths[AdminRoutes.FINANCE],
    element: (
      <AuthorizedLayout>
        <h1>FinancePage</h1>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.SETTINGS]: {
    path: AdminPaths[AdminRoutes.SETTINGS],
    element: (
      <AuthorizedLayout>
        <h1>SettingsPage</h1>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.PROFILE]: {
    path: AdminPaths[AdminRoutes.PROFILE],
    element: (
      <AuthorizedLayout>
        <h1>ProfilePage</h1>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.NOT_FOUND]: {
    path: AdminPaths[AdminRoutes.NOT_FOUND],
    element: <Navigate to={AdminPaths[AdminRoutes.MAIN]} replace />,
  },
};
