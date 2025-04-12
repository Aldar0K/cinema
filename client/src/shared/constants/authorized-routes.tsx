import { NavigationLink } from "@/shared/types";

export enum AuthorizedRoutes {
  MAIN = "main",
  SEANCES = "seances",
}

export const AuthorizedPaths: Record<AuthorizedRoutes, string> = {
  [AuthorizedRoutes.MAIN]: "/",
  [AuthorizedRoutes.SEANCES]: "/seances",
};

export const authorizedNavigationLinks: NavigationLink[] = [
  {
    title: "Афиша",
    link: AuthorizedPaths[AuthorizedRoutes.MAIN],
  },
  {
    title: "Сеансы",
    link: AuthorizedPaths[AuthorizedRoutes.SEANCES],
  },
];
