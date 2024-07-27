import { FC } from "react";

import { useGetMoviesQuery } from "@/entities/movie";
import { classNames } from "@/shared/utils";

const MoviesPage: FC = () => {
  const { data: movies, isLoading } = useGetMoviesQuery();

  return (
    <main className={classNames(`main`, {}, [])} data-testid="MoviesPage">
      {/* <Header /> */}

      <div className="">
        <div className="">
          <h1>MoviesPage</h1>

          <ul className="flex flex-col gap-[8px]">
            {movies?.map((movie) => (
              <li key={movie.id} className="flex">
                {movie.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MoviesPage;
