import { haliDeadliftApiSetup as api } from '../hali-deadlift-api-setup';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getEquipments: build.query<GetEquipmentsApiResponse, GetEquipmentsApiArg>({
      query: () => ({ url: `/api/Equipment` }),
    }),
    getExercises: build.query<GetExercisesApiResponse, GetExercisesApiArg>({
      query: (queryArg) => ({
        url: `/api/Exercise`,
        params: {
          MuscleGroupIds: queryArg.muscleGroupIds,
          EquipmentIds: queryArg.equipmentIds,
          Difficulty: queryArg.difficulty,
          Name: queryArg.name,
        },
      }),
    }),
    getMuscleGroups: build.query<GetMuscleGroupsApiResponse, GetMuscleGroupsApiArg>({
      query: () => ({ url: `/api/MuscleGroup` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as haliDeadliftApi };
export type GetEquipmentsApiResponse = /** status 200 OK */ GetEquipmentsResponse[];
export type GetEquipmentsApiArg = void;
export type GetExercisesApiResponse = /** status 200 OK */ GetExercisesResponse[];
export type GetExercisesApiArg = {
  muscleGroupIds?: string[];
  equipmentIds?: string[];
  difficulty?: Difficulty;
  name?: string;
};
export type GetMuscleGroupsApiResponse = /** status 200 OK */ GetMuscleGroupsResponse[];
export type GetMuscleGroupsApiArg = void;
export type GetEquipmentsResponse = {
  id?: string;
  name?: string;
};
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type ExerciseType = 'Strength' | 'Cardio' | 'Mobility';
export type MuscleRole = 'Primary' | 'Secondary' | 'Tertiary' | 'Stabilizer';
export type ExerciseMuscleGroupDto = {
  muscleGroupId?: string;
  muscleName?: null | string;
  muscleRole?: MuscleRole;
};
export type GetExercisesResponse = {
  id?: string;
  name?: string;
  description?: null | string;
  difficulty?: Difficulty;
  exerciseType?: ExerciseType;
  exerciseMuscleGroups?: ExerciseMuscleGroupDto[];
};
export type GetMuscleGroupsResponse = {
  id?: string;
  name?: string;
};
export const { useGetEquipmentsQuery, useGetExercisesQuery, useGetMuscleGroupsQuery } =
  injectedRtkApi;
