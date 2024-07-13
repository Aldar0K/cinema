import { baseApi } from "@/shared/api";
import { handleError } from "@/shared/utils";

import {
  LoginDto,
  LoginResponse,
  RegistrationDto,
  RegistrationResponse,
} from "./types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<RegistrationResponse, RegistrationDto>({
      query: (dto) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: dto,
      }),
      onQueryStarted: (_, api) => {
        api.queryFulfilled.catch((error) => {
          handleError(error);
        });
      },
    }),
    login: builder.mutation<LoginResponse, LoginDto>({
      query: (dto) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: dto,
      }),
      onQueryStarted: (_, api) => {
        api.queryFulfilled.catch((error) => {
          handleError(error);
        });
      },
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation } = authApi;
