import { useState } from 'react';
import { useGetExercisesQuery, type GetExercisesApiArg } from '../../store/api/hali-deadlift-api';
import Loading from '../../common/components/loading/Loading';
import Header from '../../common/components/header/Header';
import ExercisesFilter from './components/ExercisesFilter';
import ExerciseCard from './components/ExerciseCard';

const LibraryPage = () => {
  const [filter, setFilter] = useState<GetExercisesApiArg>({});
  const { data: exercises, isLoading } = useGetExercisesQuery(filter);

  if (isLoading) return <Loading />;
  return (
    <div className='px-5 py-2'>
      <Header
        headerText='Exercise Library'
        subHeaderText='Browse and search for exercises to add to your workouts.'
      />
      <ExercisesFilter filter={filter} setFilter={setFilter} />
      <div className='flex mt-4 space-x-4 overflow-x-auto py-2'>
        {exercises?.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      <ul></ul>
    </div>
  );
};

export default LibraryPage;
