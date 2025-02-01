import { FC, lazy, Suspense } from "react";

import { Skeleton } from "@/shared/ui";
import { MovieCardProps } from "./MovieCard";
const MovieCardLazy = lazy(() => import("./MovieCard"));

export const MovieCard: FC<MovieCardProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[200px]" />}>
      <MovieCardLazy {...props} />
    </Suspense>
  );
};
