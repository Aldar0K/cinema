import { Movie } from "@/entities/movie";

export type Seance = {
  id: number;
  movieId: number;
  time: string;
  movie?: Movie;
  // seats?: Seat[];
};
