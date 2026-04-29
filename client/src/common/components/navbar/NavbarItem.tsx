import classNames from 'classnames';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  icon: React.ReactNode;
  label: string;
};

const NavbarItem: React.FC<Props> = ({ icon, label }) => {
  const navigete = useNavigate();
  const currentPath = useLocation().pathname.split('/')[1];
  const path = label.toLowerCase();

  return (
    <button
      className={classNames(
        'flex items-center px-6 py-3 text-sm font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors w-full text-left cursor-pointer',
        { 'bg-slate-100 text-slate-900 border-l-4 border-black-500': currentPath === path }
      )}
      onClick={() => navigete(path)}
    >
      {icon}
      <span className='ml-4'>{label}</span>
    </button>
  );
};

export default NavbarItem;
