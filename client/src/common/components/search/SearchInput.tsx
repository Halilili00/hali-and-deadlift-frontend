import { Search } from 'lucide-react';
import React from 'react';

type Props = {
  onChange: (value: string) => void;
};

const SearchInput: React.FC<Props> = ({ onChange }) => {
  return (
    <div className='relative h-9'>
      <Search className='absolute top-3 left-2 w-4 h-4 text-gray-600' />
      <input
        type='search'
        onChange={(event) => onChange(event.currentTarget.value)}
        className='bg-white border border-gray-400 rounded-xl pl-8 pr-2 py-1 h-full'
        placeholder='Search exercise...'
      />
    </div>
  );
};

export default SearchInput;
