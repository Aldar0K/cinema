import type { FC } from "react";

import { MovieList } from "@/features/movie";
import { cn } from "@/shared/utils";

const MoviesPage: FC = () => {
  return (
    <main className={cn("", {}, [])} data-testid="MoviesPage">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Movies</h1>
            <p className="text-muted-foreground">
              Manage your movie catalog here
            </p>
          </div>
          {/* <MovieActions /> */}
        </div>
        <MovieList />
      </div>
    </main>
  );
};

export default MoviesPage;
