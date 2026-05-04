import { configureStore } from '@reduxjs/toolkit';
import { haliDeadliftApi } from './api/hali-deadlift-api';

export const store = configureStore({
  reducer: { [haliDeadliftApi.reducerPath]: haliDeadliftApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(haliDeadliftApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;