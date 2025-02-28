import { Movie } from "@/entities/movie";
import { Seat } from "@/entities/seat";

export type Seance = {
  id: number;
  movieId: number;
  time: string;
  movie?: Movie;
  seats?: Seat[];
};

export type CreateSeanceDto = {
  body: {
    movieId: number;
    time: Date;
  };
};

export type CreateSeanceResponse = Seance;
