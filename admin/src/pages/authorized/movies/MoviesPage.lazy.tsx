import { lazy } from "react";

export const MoviesPageLazy = lazy(() => import("./MoviesPage"));

export const preloadMoviesPage = () => {
  import("./MoviesPage");
};
