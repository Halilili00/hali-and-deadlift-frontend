import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const haliDeadliftApiSetup = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: () => ({}),
});