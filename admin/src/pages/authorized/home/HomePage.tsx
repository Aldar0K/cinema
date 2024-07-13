import { FC, useEffect, useState } from "react";

import { Movie } from "@/entities/movie";
import { classNames } from "@/shared/utils";
import axios from "axios";

const HomePage: FC = () => {
  // const { data: movies } = useGetMoviesQuery();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/movies`,
        {
          withCredentials: true,
        },
      );
      const movies = response.data as Movie[];
      setMovies(movies);
    };

    fetchMovies();
  }, []);

  return (
    <main className={classNames(`main`, {}, [])} data-testid="HomePage">
      <div className="">
        <div className="">
          <h1>HomePage</h1>

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

export default HomePage;
