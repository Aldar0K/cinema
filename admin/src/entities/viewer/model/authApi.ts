import { baseApi } from "@/shared/api";
import { handleError } from "@/shared/utils";

import { GetViewerResponse } from "./types";

export const viewerApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["viewer"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getViewer: builder.query<GetViewerResponse, void>({
        query: () => ({
          url: "/users",
          method: "GET",
        }),
        providesTags: ["viewer"],
        onQueryStarted: (_, api) => {
          api.queryFulfilled.catch((error) => {
            handleError(error);
          });
        },
      }),
    }),
  });

export const { useGetViewerQuery } = viewerApi;
