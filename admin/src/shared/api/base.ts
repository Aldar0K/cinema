import { authActions } from "@/entities/auth";
import {
  BaseQueryApi,
  FetchArgs,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL ?? "",
  credentials: "include",
});

const baseQueryWithReauth = async (
  args: FetchArgs,
  api: BaseQueryApi,
  extraOptions: FetchBaseQueryMeta,
) => {
  const result = await baseQuery(args, api, extraOptions);

  // TODO add refresh token handler

  if (result?.error?.status === 401 || result?.error?.status === 403) {
    api.dispatch(authActions.signOut());
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
