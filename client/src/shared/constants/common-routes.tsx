export enum CommonRoutes {
  COOKIES_POLICY = "cookies-policy",
  NOT_FOUND = "not-found",
}

export const CommonPaths: Record<CommonRoutes, string> = {
  [CommonRoutes.COOKIES_POLICY]: "/cookies-policy",
  [CommonRoutes.NOT_FOUND]: "*",
};
