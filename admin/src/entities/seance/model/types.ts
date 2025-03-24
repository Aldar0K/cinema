import { Movie } from "@/entities/movie";
import { Seat } from "@/entities/seat";

export type Seance = {
  id: number;
  movieId: number;
  time: string;
  movie?: Movie;
  seats?: Seat[];
};

export type GroupedSeance = {
  date: Date;
  seances: Seance[];
};

export type GetSeancesResponse = Seance[];

export type GetSeanceDto = {
  seanceId: string;
};

export type GetSeanceResponse = Seance;

export type CreateSeanceDto = {
  body: {
    movieId: number;
    time: Date;
  };
};

export type CreateSeanceResponse = Seance;

export type UpdateSeanceDto = {
  seanceId: number;
  body: {
    time: Date;
  };
};

export type UpdateSeanceResponse = Seance;

export type DeleteSeanceDto = {
  seanceId: number;
};

export type DeleteSeanceResponse = unknown;
