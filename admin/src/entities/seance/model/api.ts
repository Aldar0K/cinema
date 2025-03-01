import { baseApi } from "@/shared/api";

import {
  CreateSeanceDto,
  CreateSeanceResponse,
  DeleteSeanceDto,
  DeleteSeanceResponse,
  UpdateSeanceDto,
  UpdateSeanceResponse,
} from "./types";

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

      updateSeance: builder.mutation<UpdateSeanceResponse, UpdateSeanceDto>({
        query: ({ seanceId, body }) => ({
          url: `seances/${seanceId}`,
          method: "PATCH",
          body,
        }),
        invalidatesTags: ["movie"],
      }),

      deleteSeance: builder.mutation<DeleteSeanceResponse, DeleteSeanceDto>({
        query: ({ seanceId }) => ({
          url: `seances/${seanceId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["movie"],
      }),
    }),
  });

export const {
  useCreateSeanceMutation,
  useUpdateSeanceMutation,
  useDeleteSeanceMutation,
} = seanceApi;
