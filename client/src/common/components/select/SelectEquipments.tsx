import React from 'react';
import Select, { type MultiValue } from 'react-select';
import {
  useGetEquipmentsQuery,
  type GetEquipmentsResponse,
} from '../../../store/api/hali-deadlift-api';

type Props = {
  onChange?: (values: MultiValue<GetEquipmentsResponse>) => void;
};

const SelectEquipments: React.FC<Props> = ({ onChange }) => {
  const { data: equipments, isLoading: loadingEqipments } = useGetEquipmentsQuery();

  return (
    <Select
      isMulti
      options={equipments ?? []}
      isLoading={loadingEqipments}
      name='select-equipment'
      onChange={onChange}
      getOptionLabel={(option) => option.name ?? ''}
      getOptionValue={(option) => option.id ?? ''}
      placeholder='All Equipments'
    />
  );
};

export default SelectEquipments;
