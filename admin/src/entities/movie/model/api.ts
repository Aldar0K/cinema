import { baseApi } from "@/shared/api";

import { handleError } from "@/shared/utils";
import {
  CreateMovieDto,
  CreateMovieResponse,
  DeleteMovieDto,
  DeleteMovieResponse,
  GetMovieResponse,
  GetMoviesResponse,
  UpdateMovieDto,
  UpdateMovieResponse,
} from "./types";

export const movieApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["movies", "movie"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getMovies: builder.query<GetMoviesResponse, void>({
        query: () => ({
          url: "/movies",
          method: "GET",
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        providesTags: ["movies"],
      }),

      getMovie: builder.query<GetMovieResponse, string>({
        query: (id) => ({
          url: `/movies/${id}`,
          method: "GET",
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        providesTags: ["movie"],
      }),

      createMovie: builder.mutation<CreateMovieResponse, CreateMovieDto>({
        query: ({ body }) => ({
          url: "/movies",
          method: "POST",
          body,
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        invalidatesTags: ["movies"],
      }),

      updateMovie: builder.mutation<UpdateMovieResponse, UpdateMovieDto>({
        query: ({ id, body }) => ({
          url: `/movies/${id}`,
          method: "PATCH",
          body,
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        invalidatesTags: ["movies", "movie"],
      }),

      deleteMovie: builder.mutation<DeleteMovieResponse, DeleteMovieDto>({
        query: ({ id }) => ({
          url: `/movies/${id}`,
          method: "DELETE",
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        invalidatesTags: ["movies", "movie"],
      }),
    }),
  });

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useCreateMovieMutation,
  useUpdateMovieMutation,
  useDeleteMovieMutation,
} = movieApi;
