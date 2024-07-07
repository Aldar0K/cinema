import { baseApi } from "@/shared/api";

import { GetMoviesResponse } from "./types";

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
    }),
  });

export const { useGetMoviesQuery } = userApi;
