import { Suspense } from "react";
import { Navigate, RouteProps } from "react-router-dom";

import { AuthorizedLayout } from "@/layouts/authorized";
import {
  HomePage,
  MoviesPage,
  preloadHomePage,
  preloadMoviesPage,
} from "@/pages/authorized";
import { NavigationLink } from "@/shared/types";
import { PageSkeleton, PageTransition } from "@/shared/ui";

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
    preloadFn: preloadHomePage,
  },
  {
    title: "Фильмы",
    link: AdminPaths[AdminRoutes.MOVIES],
    preloadFn: preloadMoviesPage,
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
          <PageTransition>
            <HomePage />
          </PageTransition>
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.MOVIES]: {
    path: AdminPaths[AdminRoutes.MOVIES],
    element: (
      <AuthorizedLayout>
        <PageTransition>
          <Suspense fallback={<PageSkeleton />}>
            <MoviesPage />
          </Suspense>
        </PageTransition>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.SEANCES]: {
    path: AdminPaths[AdminRoutes.SEANCES],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <PageTransition>
            <h1>SeancesPage</h1>
          </PageTransition>
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.USERS]: {
    path: AdminPaths[AdminRoutes.USERS],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <PageTransition>
            <h1>UsersPage</h1>
          </PageTransition>
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.FINANCE]: {
    path: AdminPaths[AdminRoutes.FINANCE],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <PageTransition>
            <h1>FinancePage</h1>
          </PageTransition>
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.SETTINGS]: {
    path: AdminPaths[AdminRoutes.SETTINGS],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <PageTransition>
            <h1>SettingsPage</h1>
          </PageTransition>
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.PROFILE]: {
    path: AdminPaths[AdminRoutes.PROFILE],
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<PageSkeleton />}>
          <PageTransition>
            <h1>ProfilePage</h1>
          </PageTransition>
        </Suspense>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.NOT_FOUND]: {
    path: AdminPaths[AdminRoutes.NOT_FOUND],
    element: <Navigate to={AdminPaths[AdminRoutes.MAIN]} replace />,
  },
};
