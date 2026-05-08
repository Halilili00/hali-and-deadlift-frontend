import { Outlet } from 'react-router-dom';
import Navbar from '../../common/components/navbar/Navbar';
import SideNavbar from '../../common/components/navbar/SideNavbar';

const Layout = () => {
  return (
    <div className='flex w-full bg-slate-300 p-2 h-screen overflow-hidden'>
      <div className='flex w-full bg-white rounded-xl shadow-2xl border border-slate-400'>
        <SideNavbar />
        <div className='w-full bg-slate-50 overflow-y-auto'>
          <Navbar />
          <div className='p-4 lg:py-1 max-w-[1500px] m-auto shadow-md rounded-md'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
