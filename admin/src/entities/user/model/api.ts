import { baseApi } from "@/shared/api";

import { handleError } from "@/shared/utils";
import {
  CreateUserDto,
  CreateUserResponse,
  DeleteUserDto,
  DeleteUserResponse,
  GetUserDto,
  GetUserResponse,
  GetUsersResponse,
  UpdateUserDto,
  UpdateUserResponse,
} from "./types";

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
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        providesTags: ["users"],
      }),

      getUser: builder.query<GetUserResponse, GetUserDto>({
        query: ({ userId }) => ({
          url: `users/${userId}`,
          method: "GET",
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        providesTags: ["user"],
      }),

      createUser: builder.mutation<CreateUserResponse, CreateUserDto>({
        query: ({ body }) => ({
          url: "users",
          method: "POST",
          body,
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        invalidatesTags: ["users"],
      }),

      updateUser: builder.mutation<UpdateUserResponse, UpdateUserDto>({
        query: ({ userId, body }) => ({
          url: `users/${userId}`,
          method: "PATCH",
          body,
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        invalidatesTags: ["users", "user"],
      }),

      deleteUser: builder.mutation<DeleteUserResponse, DeleteUserDto>({
        query: ({ userId }) => ({
          url: `users/${userId}`,
          method: "DELETE",
        }),
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
        invalidatesTags: ["users"],
      }),
    }),
  });

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
