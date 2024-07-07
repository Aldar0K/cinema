import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookie from "js-cookie";

import { CookieNames } from "../constants";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL ?? "",
  // credentials: 'include',
  prepareHeaders: (headers) => {
    const accessToken = Cookie.get(CookieNames.ACCESS_TOKEN);

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

// const baseQueryWithReauth = async (
//   args: FetchArgs,
//   api: BaseQueryApi,
//   extraOptions: FetchBaseQueryMeta,
// ) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status === 401) {
//     Cookie.remove(CookieNames.ACCESS_TOKEN);
//   }

//   if (result?.error?.status === 403) {
//     window.location.href = "/";
//   }

//   return result;
// };

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
});
