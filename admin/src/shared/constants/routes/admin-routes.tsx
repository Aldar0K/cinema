import { Suspense } from "react";
import { Navigate, RouteProps } from "react-router-dom";

import { AuthorizedLayout } from "@/layouts/authorized";
import { HomePage, MoviesPage } from "@/pages/authorized";
import { NavigationLink } from "@/shared/types";
import { PageSkeleton } from "@/shared/ui";

export enum AdminRoutes {
  MAIN = "main",
  MOVIES = "movies",
  SEANCES = "seances",
  USERS = "users",
  FINANCE = "finance",
  SETTINGS = "settings",
  PROFILE = "profile",
  NOT_FOUND = "not-found",
}

export const AdminPaths: Record<AdminRoutes, string> = {
  [AdminRoutes.MAIN]: "/",
  [AdminRoutes.MOVIES]: "/movies",
  [AdminRoutes.SEANCES]: "/seances",
  [AdminRoutes.USERS]: "/users",
  [AdminRoutes.FINANCE]: "/finance",
  [AdminRoutes.SETTINGS]: "/settings",
  [AdminRoutes.PROFILE]: "/profile",
  [AdminRoutes.NOT_FOUND]: "*",
};

export const adminNavigationLinks: NavigationLink[] = [
  {
    title: "Главная",
    link: AdminPaths[AdminRoutes.MAIN],
  },
  {
    title: "Фильмы",
    link: AdminPaths[AdminRoutes.MOVIES],
  },
  {
    title: "Сеансы",
    link: AdminPaths[AdminRoutes.SEANCES],
  },
  {
    title: "Пользователи",
    link: AdminPaths[AdminRoutes.USERS],
  },
  {
    title: "Настройки",
    link: AdminPaths[AdminRoutes.SETTINGS],
  },
];

export const AdminRouteConfig: Record<AdminRoutes, RouteProps> = {
  [AdminRoutes.MAIN]: {
    path: AdminPaths[AdminRoutes.MAIN],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <HomePage />
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.MOVIES]: {
    path: AdminPaths[AdminRoutes.MOVIES],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <MoviesPage />
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.SEANCES]: {
    path: AdminPaths[AdminRoutes.SEANCES],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <h1>SeancesPage</h1>
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.USERS]: {
    path: AdminPaths[AdminRoutes.USERS],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <h1>UsersPage</h1>
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.FINANCE]: {
    path: AdminPaths[AdminRoutes.FINANCE],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <h1>FinancePage</h1>
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.SETTINGS]: {
    path: AdminPaths[AdminRoutes.SETTINGS],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <h1>SettingsPage</h1>
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.PROFILE]: {
    path: AdminPaths[AdminRoutes.PROFILE],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <h1>ProfilePage</h1>
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.NOT_FOUND]: {
    path: AdminPaths[AdminRoutes.NOT_FOUND],
    element: <Navigate to={AdminPaths[AdminRoutes.MAIN]} replace />,
  },
};
