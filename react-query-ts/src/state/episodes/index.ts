import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetAllEpisodesResponse } from "types";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/",
  }),
  endpoints: (builder) => {
    return {
      getAll: builder.query<IGetAllEpisodesResponse, void>({
        query: () => "episode",
      }),
    };
  },
});

export const { useGetAllQuery } = rickAndMortyApi;
