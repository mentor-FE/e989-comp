import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from './../../constants/index';


const Nav: FC = () => (
  <nav className={'bg-gray-700 py-4 px-6 text-white flex gap-3'}>
    {Routes.map(route => (
      <NavLink className={({isActive})=> isActive ? 'text-bright-red hover:text-bright-blue' : 'text-dark hover:text-bright-blue'} key={route.path} to={route.path}>
        {route.label}
      </NavLink>
    ))}
  </nav>
);

export default Nav;