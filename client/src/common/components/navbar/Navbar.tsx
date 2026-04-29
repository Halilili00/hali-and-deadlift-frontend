import { Bell, CircleUser } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname.split('/')[1];
  return (
    <div className='h-[88px] w-full flex items-center justify-between px-8 border-b border-slate-200'>
      <h2 className='text-[22px] font-black text-slate-900 tracking-tight uppercase'>{path}</h2>
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
