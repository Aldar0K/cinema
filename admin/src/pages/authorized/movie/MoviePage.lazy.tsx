import { lazy } from "react";

export const MoviePageLazy = lazy(() => import("./MoviePage"));

export const preloadMoviePage = () => {
  import("./MoviePage");
};
