import { Wrench } from 'lucide-react';

const UnderConstruction = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full space-y-4'>
      <Wrench className='w-24 h-24' />
      <p className='text-lg font-medium'>This page is under construction</p>
    </div>
  );
};

export default UnderConstruction;
