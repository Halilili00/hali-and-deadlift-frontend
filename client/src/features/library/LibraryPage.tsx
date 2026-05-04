import { useGetExercisesQuery } from '../../store/api/hali-deadlift-api';
import Loading from '../../common/components/loading/Loading';

const LibraryPage = () => {
  const { data: exercises, isLoading } = useGetExercisesQuery();

  if (isLoading) return <Loading />;
  return (
    <div>
      {exercises?.map((exercise) => (
        <div key={exercise.id}>{exercise.name}</div>
      ))}
    </div>
  );
};

export default LibraryPage;
