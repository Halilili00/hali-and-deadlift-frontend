import { useNavigate } from 'react-router-dom';
import logo_black from '../../../assets/logo_black.png';
import NavbarItem from './NavbarItem';
import { Dumbbell, SquarePlus, LineChart, BookOpen, FileText, Settings, Menu } from 'lucide-react';
import { useRef } from 'react';

const SideNavbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const handleNavbarDisplay = () => {
    if (navbarRef.current) {
      if (navbarRef.current.style.position === 'absolute') {
        navbarRef.current.removeAttribute('style');
      } else {
        navbarRef.current.style.display = 'flex';
        navbarRef.current.style.position = 'absolute';
      }
    }
  };

  return (
    <>
      <button
        className='lg:hidden absolute top-19 pl-3 pr-1 pt-0.5 bg-white z-15'
        onClick={handleNavbarDisplay}
      >
        <Menu />
      </button>
      <nav
        ref={navbarRef}
        className='w-52 bg-white border-r border-gray-200 h-full hidden lg:flex flex-col z-10'
      >
        <button
          className='flex flex-col p-6 pt-4 pl-4 cursor-pointer'
          onClick={() => navigate('/')}
        >
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
    </>
  );
};

export default SideNavbar;
