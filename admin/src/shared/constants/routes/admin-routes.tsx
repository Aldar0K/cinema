import { ReactNode, Suspense } from "react";
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
  MOVIE = "movie",
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
  [AdminRoutes.MOVIE]: "/movies/:id",
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

const withLayout = (component: ReactNode) => (
  <AuthorizedLayout>
    <Suspense fallback={<PageSkeleton />}>
      <PageTransition>{component}</PageTransition>
    </Suspense>
  </AuthorizedLayout>
);

export const AdminRouteConfig: Record<AdminRoutes, RouteProps> = {
  [AdminRoutes.MAIN]: {
    path: AdminPaths[AdminRoutes.MAIN],
    element: withLayout(<HomePage />),
  },
  [AdminRoutes.MOVIES]: {
    path: AdminPaths[AdminRoutes.MOVIES],
    element: withLayout(<MoviesPage />),
  },
  [AdminRoutes.MOVIE]: {
    path: AdminPaths[AdminRoutes.MOVIE],
    element: withLayout(<h1>MoviePage</h1>),
  },
  [AdminRoutes.SEANCES]: {
    path: AdminPaths[AdminRoutes.SEANCES],
    element: withLayout(<h1>SeancesPage</h1>),
  },
  [AdminRoutes.USERS]: {
    path: AdminPaths[AdminRoutes.USERS],
    element: withLayout(<h1>UsersPage</h1>),
  },
  [AdminRoutes.FINANCE]: {
    path: AdminPaths[AdminRoutes.FINANCE],
    element: withLayout(<h1>FinancePage</h1>),
  },
  [AdminRoutes.SETTINGS]: {
    path: AdminPaths[AdminRoutes.SETTINGS],
    element: withLayout(<h1>SettingsPage</h1>),
  },
  [AdminRoutes.PROFILE]: {
    path: AdminPaths[AdminRoutes.PROFILE],
    element: withLayout(<h1>ProfilePage</h1>),
  },
  [AdminRoutes.NOT_FOUND]: {
    path: AdminPaths[AdminRoutes.NOT_FOUND],
    element: <Navigate to={AdminPaths[AdminRoutes.MAIN]} replace />,
  },
};
