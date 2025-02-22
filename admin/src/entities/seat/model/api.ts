import { baseApi } from "@/shared/api";

import { handleError } from "@/shared/utils";
import {
  ReserveSeatDto,
  ReserveSeatResponse,
  UnreserveSeatDto,
  UnreserveSeatResponse,
} from "./types";

export const seatApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["movie", "seats", "seat"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      reserveSeat: builder.mutation<ReserveSeatResponse, ReserveSeatDto>({
        query: ({ seatId }) => ({
          url: `/seats/${seatId}/reserve`,
          method: "POST",
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        invalidatesTags: ["movie", "seats", "seat"],
      }),

      unreserveSeat: builder.mutation<UnreserveSeatResponse, UnreserveSeatDto>({
        query: ({ seatId }) => ({
          url: `/seats/${seatId}/unreserve`,
          method: "POST",
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        invalidatesTags: ["movie", "seats", "seat"],
      }),
    }),
  });

export const { useReserveSeatMutation, useUnreserveSeatMutation } = seatApi;
