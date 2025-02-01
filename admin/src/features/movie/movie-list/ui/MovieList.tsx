import type { FC } from "react";

import { useGetMoviesQuery } from "@/entities/movie/model/api";
import { MovieCard } from "@/features/movie/movie-card";
import { cn } from "@/shared/utils";
import { MovieListSkeleton } from "./MovieListSkeleton";

type MovieListProps = {
  className?: string;
};

const MovieList: FC<MovieListProps> = (props) => {
  const { className } = props;
  const { data: movies, isLoading } = useGetMoviesQuery();

  if (isLoading) {
    return <MovieListSkeleton />;
  }

  if (!movies?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No movies found</p>
      </div>
    );
  }

  return (
    <div
      className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}
      data-testid="MovieList"
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
