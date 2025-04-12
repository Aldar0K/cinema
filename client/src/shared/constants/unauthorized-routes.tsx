import { NavigationLink } from "@/shared/types";

export enum UnauthorizedRoutes {
  MAIN = "main",
  SEANCES = "seances",
  SIGNIN = "sign-in",
  SIGNUP = "sign-up",
  RESET_PASSWORD = "reset-password",
  NOT_FOUND = "not-found",
}

export const UnauthorizedPaths: Record<UnauthorizedRoutes, string> = {
  [UnauthorizedRoutes.MAIN]: "/",
  [UnauthorizedRoutes.SEANCES]: "/seances",
  [UnauthorizedRoutes.SIGNIN]: "/sign-in",
  [UnauthorizedRoutes.SIGNUP]: "/sign-up",
  [UnauthorizedRoutes.RESET_PASSWORD]: "/reset-password",
  [UnauthorizedRoutes.NOT_FOUND]: "*",
};

export const unauthorizedNavigationLinks: NavigationLink[] = [
  {
    title: "Афиша",
    link: UnauthorizedPaths[UnauthorizedRoutes.MAIN],
  },
  {
    title: "Сеансы",
    link: UnauthorizedPaths[UnauthorizedRoutes.SEANCES],
  },
];
