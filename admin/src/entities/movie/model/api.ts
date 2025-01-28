import { baseApi } from "@/shared/api";

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

export const userApi = baseApi
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
        providesTags: ["movies"],
      }),

      getMovie: builder.query<GetMovieResponse, string>({
        query: (id) => ({
          url: `/movies/${id}`,
          method: "GET",
        }),
        providesTags: ["movie"],
      }),

      createMovie: builder.mutation<CreateMovieResponse, CreateMovieDto>({
        query: ({ body }) => ({
          url: "movies",
          method: "POST",
          body,
        }),
        invalidatesTags: ["movies"],
      }),

      updateMovie: builder.mutation<UpdateMovieResponse, UpdateMovieDto>({
        query: ({ id, body }) => ({
          url: `movies/${id}`,
          method: "PATCH",
          body,
        }),
        invalidatesTags: ["movies", "movie"],
      }),

      deleteMovie: builder.mutation<DeleteMovieResponse, DeleteMovieDto>({
        query: ({ id }) => ({
          url: `movies/${id}`,
          method: "DELETE",
        }),
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
} = userApi;
