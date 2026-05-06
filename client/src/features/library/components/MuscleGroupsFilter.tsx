import React from 'react';
import {
  useGetMuscleGroupsQuery,
  type GetExercisesApiArg,
} from '../../../store/api/hali-deadlift-api';
import MuscleGroupBadge from './MuscleGroupBadge';

type Props = {
  filter: GetExercisesApiArg;
  setFilter: React.Dispatch<React.SetStateAction<GetExercisesApiArg>>;
};

const MuscleGroupsFilter: React.FC<Props> = ({ filter, setFilter }) => {
  const { data: muscleGroups } = useGetMuscleGroupsQuery();

  const handleSelectMuscleGroup = (id: string | undefined) => {
    if (id) {
      if (filter.muscleGroupIds?.includes(id)) {
        const newMuscleGroupIds = filter.muscleGroupIds.filter((groupId) => groupId !== id);
        setFilter((prev) => ({
          ...prev,
          muscleGroupIds: newMuscleGroupIds.length > 0 ? newMuscleGroupIds : undefined,
        }));
        return;
      }
      setFilter((prev) => ({
        ...prev,
        muscleGroupIds: [...(prev.muscleGroupIds ?? []), id],
      }));
      return;
    }

    setFilter((prev) => ({ ...prev, muscleGroupIds: undefined }));
  };

  return (
    <div className='flex py-2 space-x-1.5'>
      <MuscleGroupBadge
        key='all'
        name='All'
        onClick={() => handleSelectMuscleGroup(undefined)}
        isSelected={filter.muscleGroupIds === undefined}
      />
      {muscleGroups?.map((group) => (
        <MuscleGroupBadge
          key={group.id}
          name={group.name}
          onClick={() => handleSelectMuscleGroup(group.id ?? '')}
          isSelected={filter.muscleGroupIds?.includes(group.id ?? '')}
        />
      ))}
    </div>
  );
};

export default MuscleGroupsFilter;
