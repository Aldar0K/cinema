import { baseApi } from "@/shared/api";

import { handleError } from "@/shared/utils";
import {
  CreateSeanceDto,
  CreateSeanceResponse,
  DeleteSeanceDto,
  DeleteSeanceResponse,
  GetSeanceDto,
  GetSeanceResponse,
  GetSeancesResponse,
  UpdateSeanceDto,
  UpdateSeanceResponse,
} from "./types";

export const seanceApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["movies", "movie", "seances", "seance"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getSeances: builder.query<GetSeancesResponse, void>({
        query: () => ({
          url: "seances",
          method: "GET",
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        providesTags: ["seances"],
      }),

      getSeance: builder.query<GetSeanceResponse, GetSeanceDto>({
        query: ({ seanceId }) => ({
          url: `seances/${seanceId}`,
          method: "GET",
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        providesTags: ["seance"],
      }),

      createSeance: builder.mutation<CreateSeanceResponse, CreateSeanceDto>({
        query: ({ body }) => ({
          url: "seances",
          method: "POST",
          body,
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        invalidatesTags: ["movie", "seances"],
      }),

      updateSeance: builder.mutation<UpdateSeanceResponse, UpdateSeanceDto>({
        query: ({ seanceId, body }) => ({
          url: `seances/${seanceId}`,
          method: "PATCH",
          body,
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        invalidatesTags: ["movie", "seances", "seance"],
      }),

      deleteSeance: builder.mutation<DeleteSeanceResponse, DeleteSeanceDto>({
        query: ({ seanceId }) => ({
          url: `seances/${seanceId}`,
          method: "DELETE",
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        invalidatesTags: ["movie", "seances"],
      }),
    }),
  });

export const {
  useGetSeancesQuery,
  useGetSeanceQuery,
  useCreateSeanceMutation,
  useUpdateSeanceMutation,
  useDeleteSeanceMutation,
} = seanceApi;
