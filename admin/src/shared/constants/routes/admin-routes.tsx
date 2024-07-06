import { Navigate, RouteProps } from "react-router-dom";

import { AuthorizedLayout } from "@/layouts/authorized";
import { HomePage } from "@/pages/authorized";

export enum AdminRoutes {
  MAIN = "main",
  ANALYTICS = "analytics",
  USERS = "users",
  MATERIALS = "materials",
  COURSE = "course",
  COURSE_IN_FOLDER = "course-in-folder",
  HOMEWORK = "homework",
  FINANCE = "finance",
  SETTINGS = "settings",
  PROFILE = "profile",
  NOT_FOUND = "not-found",
}

export const AdminPaths: Record<AdminRoutes, string> = {
  [AdminRoutes.MAIN]: "/",
  [AdminRoutes.ANALYTICS]: "/analytics",
  [AdminRoutes.USERS]: "/users",
  [AdminRoutes.MATERIALS]: "/materials",
  [AdminRoutes.COURSE]: "/materials/courses/:courseId",
  [AdminRoutes.COURSE_IN_FOLDER]: "materials/:folderId/:courseId",
  [AdminRoutes.HOMEWORK]: "/homework",
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
  [AdminRoutes.ANALYTICS]: {
    path: AdminPaths[AdminRoutes.ANALYTICS],
    element: (
      <AuthorizedLayout>
        <h1>AnalyticsPage</h1>
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
  [AdminRoutes.MATERIALS]: {
    path: AdminPaths[AdminRoutes.MATERIALS],
    element: (
      <AuthorizedLayout>
        <h1>MaterialsPage</h1>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.HOMEWORK]: {
    path: AdminPaths[AdminRoutes.HOMEWORK],
    element: (
      <AuthorizedLayout>
        <h1>HomeworkPage</h1>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.COURSE]: {
    path: AdminPaths[AdminRoutes.COURSE],
    element: (
      <AuthorizedLayout>
        <h1>CoursePage</h1>
      </AuthorizedLayout>
    ),
  },
  [AdminRoutes.COURSE_IN_FOLDER]: {
    path: AdminPaths[AdminRoutes.COURSE_IN_FOLDER],
    element: (
      <AuthorizedLayout>
        <h1>CourseInFolderPage</h1>
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
