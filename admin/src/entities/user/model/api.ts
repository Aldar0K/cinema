import { baseApi } from "@/shared/api";

import { GetUsersResponse } from "./types";

export const userApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["users", "user"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUsers: builder.query<GetUsersResponse, void>({
        query: () => ({
          url: "/users",
          method: "GET",
        }),
        providesTags: ["users"],
      }),
    }),
  });

export const { useGetUsersQuery } = userApi;
