import { haliDeadliftApiSetup as api } from '../hali-deadlift-api-setup';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getExercises: build.query<GetExercisesApiResponse, GetExercisesApiArg>({
      query: () => ({ url: `/api/Exercise` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as haliDeadliftApi };
export type GetExercisesApiResponse = /** status 200 OK */ GetExercisesResponse[];
export type GetExercisesApiArg = void;
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type ExerciseType = 'Strength' | 'Cardio' | 'Mobility';
export type GetExercisesResponse = {
  id?: string;
  name?: string;
  description?: null | string;
  difficulty?: Difficulty;
  exerciseType?: ExerciseType;
};
export const { useGetExercisesQuery } = injectedRtkApi;
