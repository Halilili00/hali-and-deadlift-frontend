import { useNavigate } from 'react-router-dom';
import logo_black from '../../../assets/logo_black.png';
import NavbarItem from './NavbarItem';
import { Dumbbell, SquarePlus, LineChart, BookOpen, FileText, Settings } from 'lucide-react';

const SideNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className='w-64 flex flex-col bg-white border-r border-gray-200 h-full ml-2'>
      <button className='flex flex-col p-6 pt-4 pl-4 cursor-pointer' onClick={() => navigate('/')}>
        <img src={logo_black} alt='Hali & Deadlift' className='h-13 w-auto' />
      </button>
      <div className='flex-1 flex flex-col gap-1 mt-4'>
        <NavbarItem icon={<Dumbbell className='w-5 h-5' />} label='Workout' />
        <NavbarItem icon={<SquarePlus className='w-5 h-5' />} label='Builder' />
        <NavbarItem icon={<LineChart className='w-5 h-5' />} label='Progress' />
        <NavbarItem icon={<BookOpen className='w-5 h-5' />} label='Library' />
        <NavbarItem icon={<FileText className='w-5 h-5' />} label='Articles' />
      </div>
      <div className='pb-8'>
        <NavbarItem icon={<Settings className='w-5 h-5' />} label='Settings' />
      </div>
    </nav>
  );
};

export default SideNavbar;
