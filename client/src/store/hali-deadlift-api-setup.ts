import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import queryString from 'query-string';

export const haliDeadliftApiSetup = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    paramsSerializer: (params) => queryString.stringify(params),
  }),
  endpoints: () => ({}),
});