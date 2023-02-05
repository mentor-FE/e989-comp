import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from './../../constants/index';

const Nav: FC = () => {
  
  const setClassName = (isActive: boolean) => {
    const className = 'hover:text-base-1 ease-in-out duration-400'
    return isActive ? ('text-base-7 ' +  className) : ('text-base-2 ' + className)
  }

  return (
  <nav className={'py-4 flex gap-5 text-xl'}>
    {Routes.map(route => (
      <NavLink className={({isActive})=> setClassName(isActive)} key={route.path} to={route.path}>
        {route.label}
      </NavLink>
    ))}
  </nav>
)};

export default Nav;