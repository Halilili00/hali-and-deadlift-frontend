import { Bell, CircleUser } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname.split('/')[1];

  return (
    <div className='h-[68px] bg-white sticky top-0 z-10 w-full flex items-center justify-between pl-4 pr-8 border-b border-slate-200'>
      <h1 className='uppercase'>{path}</h1>
      <div className='flex items-center space-x-6 text-slate-500'>
        <button className='hover:text-slate-800'>
          <Bell className='w-5 h-5' />
        </button>
        <button className='cursor-pointer' onClick={() => navigate('/profile')}>
          <CircleUser className='w-8 h-8 text-slate-800' />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
