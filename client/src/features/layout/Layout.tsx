import { Outlet } from 'react-router-dom';
import Navbar from '../../common/components/navbar/Navbar';
import SideNavbar from '../../common/components/navbar/SideNavbar';

const Layout = () => {
  return (
    <div className='flex w-full h-screen bg-slate-300 p-4'>
      <div className='flex w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-400'>
        <SideNavbar />
        <div className='flex flex-col w-full h-full'>
          <Navbar />
          <div className='bg-slate-50 w-full h-full'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
