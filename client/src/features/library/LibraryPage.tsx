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
    <>
      <Header
        headerText='Exercise Library'
        subHeaderText='Browse and search for exercises to add to your workouts.'
      />
      <ExercisesFilter filter={filter} setFilter={setFilter} />
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2'>
        {exercises?.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </>
  );
};

export default LibraryPage;
