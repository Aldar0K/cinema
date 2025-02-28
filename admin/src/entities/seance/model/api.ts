import { baseApi } from "@/shared/api";

import { CreateSeanceDto, CreateSeanceResponse } from "./types";

export const seanceApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["movies", "movie", "seances", "seance"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      createSeance: builder.mutation<CreateSeanceResponse, CreateSeanceDto>({
        query: ({ body }) => ({
          url: "seances",
          method: "POST",
          body,
        }),
        invalidatesTags: ["movie"],
      }),
    }),
  });

export const { useCreateSeanceMutation } = seanceApi;
