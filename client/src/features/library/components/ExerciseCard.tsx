import React from 'react';
import type { GetExercisesResponse } from '../../../store/api/hali-deadlift-api';
import { DumbbellIcon } from 'lucide-react';
import MuscleGroupBadge from './MuscleGroupBadge';
import { useNavigate } from 'react-router-dom';

type Props = {
  exercise: GetExercisesResponse;
};

const ExerciseCard: React.FC<Props> = ({ exercise }) => {
  const navigate = useNavigate();

  return (
    <div
      className='flex flex-col bg-white rounded-md shadow-md w-72 cursor-pointer'
      onClick={() => navigate(exercise.id ?? '')}
    >
      <DumbbellIcon className='w-full h-42 bg-black text-white rounded-t-md' />
      <div className='p-3 pt-2 space-y-1.5'>
        <p className='text-lg font-medium'>{exercise.name}</p>
        <div className='space-x-1'>
          {exercise.exerciseMuscleGroups?.map((muscleGroup) => (
            <MuscleGroupBadge
              key={muscleGroup.muscleGroupId}
              name={muscleGroup.muscleName || ''}
              muscleRole={muscleGroup.muscleRole}
              className='rounded-md text-sm'
            />
          ))}
        </div>
        <div className='flex mt-3 space-x-1'>
          <span className={`rounded-full p-1.5 bg-gray-200`} />
          <span className={`rounded-full p-1.5 bg-gray-200`} />
          <span className={`rounded-full p-1.5 bg-gray-200`} />
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
