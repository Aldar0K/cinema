import { Seance } from "@/entities/seance";

export type Movie = {
  id: number;
  name: string;
  seances?: Seance[];
};

export type GetMoviesResponse = Movie[];

export type GetMovieResponse = Movie;

export type CreateMovieDto = {
  body: {
    name: string;
  };
};

export type CreateMovieResponse = Movie;

export type UpdateMovieDto = {
  id: number;
  body: {
    name?: string;
  };
};

export type UpdateMovieResponse = Movie;

export type DeleteMovieDto = {
  id: number;
};

export type DeleteMovieResponse = Movie;
