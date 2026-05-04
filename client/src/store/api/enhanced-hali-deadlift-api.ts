import { haliDeadliftApi as api } from './hali-deadlift-api';

export const enhancedHaliDeadliftApi = api.enhanceEndpoints({
  addTagTypes: ['WeatherForecast'],
  endpoints: {},
});