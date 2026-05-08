import React from 'react';
import MuscleGroupsFilter from './MuscleGroupsFilter';
import SelectEquipments from '../../../common/components/select/SelectEquipments';
import type { GetExercisesApiArg } from '../../../store/api/hali-deadlift-api';
import SelectDifficulity from '../../../common/components/select/SelectDifficulity';
import SearchInput from '../../../common/components/search/SearchInput';

type Props = {
  filter: GetExercisesApiArg;
  setFilter: React.Dispatch<React.SetStateAction<GetExercisesApiArg>>;
};

const ExercisesFilter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <>
      <MuscleGroupsFilter filter={filter} setFilter={setFilter} />
      <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
        <div className='flex flex-col sm:flex-row gap-2'>
          <SelectEquipments
            onChange={(values) => {
              if (values.length === 0) {
                setFilter((prev) => ({ ...prev, equipmentIds: undefined }));
                return;
              }

              setFilter((prev) => ({
                ...prev,
                equipmentIds: values.map((value) => value.id ?? ''),
              }));
            }}
          />
          <SelectDifficulity
            onChange={(value) => {
              if (!value) {
                setFilter((prev) => ({ ...prev, difficulty: undefined }));
                return;
              }

              setFilter((prev) => ({ ...prev, difficulty: value.value }));
            }}
          />
        </div>
        <SearchInput onChange={(value) => setFilter((prev) => ({ ...prev, name: value }))} />
      </div>
    </>
  );
};

export default ExercisesFilter;
