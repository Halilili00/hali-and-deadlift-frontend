import React from 'react';
import Select from 'react-select';
import { Difficulty } from '../../../constants/difficulty';
import type { SingleValue } from 'react-select';

type Props = {
  onChange?: (value: SingleValue<{ label: string; value: Difficulty }>) => void;
};

const SelectDifficulity: React.FC<Props> = ({ onChange }) => {
  const options = Object.entries(Difficulty).map(([key, value]) => ({
    label: key,
    value: value,
  }));

  return (
    <Select
      options={options}
      name='select-difficulty'
      onChange={onChange}
      placeholder='Select Difficulty'
      isClearable
      className='min-w-48'
    />
  );
};

export default SelectDifficulity;
