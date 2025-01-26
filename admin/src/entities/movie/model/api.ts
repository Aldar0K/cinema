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
        query: (data) => ({
          url: "movies",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["movies"],
      }),

      updateMovie: builder.mutation<UpdateMovieResponse, UpdateMovieDto>({
        query: (data) => ({
          url: "movies",
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["movies", "movie"],
      }),

      deleteMovie: builder.mutation<DeleteMovieResponse, DeleteMovieDto>({
        query: (data) => ({
          url: "movies",
          method: "DELETE",
          body: data,
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
