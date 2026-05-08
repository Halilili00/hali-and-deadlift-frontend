import React from 'react';
import type { GetExercisesResponse } from '../../../store/api/hali-deadlift-api';
import { DumbbellIcon } from 'lucide-react';
import MuscleGroupBadge from './MuscleGroupBadge';
import { useNavigate } from 'react-router-dom';
import { Difficulty } from '../../../constants/difficulty';

type Props = {
  exercise: GetExercisesResponse;
};

const ExerciseCard: React.FC<Props> = ({ exercise }) => {
  const navigate = useNavigate();

  const getDifficlutyLevel = () => {
    switch (exercise.difficulty) {
      case Difficulty.Beginner:
        return 1;
      case Difficulty.Intermediate:
        return 2;
      case Difficulty.Advanced:
        return 3;
      default:
        return 0;
    }
  };

  return (
    <div
      className='relative flex flex-col bg-white rounded-md shadow-md cursor-pointer min-w-53'
      onClick={() => navigate(exercise.id ?? '')}
    >
      <div className='absolute left-3 top-3 bg-green-800 px-2 py-0.5 text-white text-sm rounded-sm'>
        {exercise.exerciseType}
      </div>
      <DumbbellIcon className='w-full h-42 bg-black text-white rounded-t-md' />
      <div className='p-3 pt-2 space-y-1.5'>
        <p className='text-lg font-medium'>{exercise.name}</p>
        <div className='space-x-1 space-y-1'>
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
          {[1, 2, 3].map((level) => (
            <span
              key={level}
              className={`rounded-full p-1.5 ${level <= getDifficlutyLevel() ? 'bg-green-500' : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
