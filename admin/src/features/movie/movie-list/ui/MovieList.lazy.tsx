import { FC, lazy, Suspense } from "react";

import { MovieListSkeleton } from "./MovieListSkeleton";

const MovieListLazy = lazy(() => import("./MovieList"));

export const MovieList: FC = (props) => {
  return (
    <Suspense fallback={<MovieListSkeleton />}>
      <MovieListLazy {...props} />
    </Suspense>
  );
};
