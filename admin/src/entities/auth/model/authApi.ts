import { baseApi } from "@/shared/api";
import { handleError } from "@/shared/utils";

import { authActions } from "..";
import {
  LoginDto,
  LoginResponse,
  RegistrationDto,
  RegistrationResponse,
} from "./types";

export const authApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["viewer"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation<LoginResponse, LoginDto>({
        query: (dto) => ({
          url: "/auth/sign-in",
          method: "POST",
          body: dto,
        }),
        invalidatesTags: ["viewer"],
        onQueryStarted: (_, api) => {
          api.queryFulfilled
            .then((response) => {
              api.dispatch(authActions.setUser(response.data.user));
            })
            .catch((error) => {
              handleError(error);
            });
        },
      }),

      // the code below is not used
      registration: builder.mutation<RegistrationResponse, RegistrationDto>({
        query: (dto) => ({
          url: "/auth/sign-up",
          method: "POST",
          body: dto,
        }),
        invalidatesTags: ["viewer"],
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
      }),
    }),
  });

export const { useLoginMutation, useRegistrationMutation } = authApi;
