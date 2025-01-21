import { lazy } from "react";

export const HomePageLazy = lazy(() => import("./HomePage"));

export const preloadHomePage = () => {
  import("./HomePage");
};
