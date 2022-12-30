import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavProps {
  routes?: Array<{ path: string; label: string }>;
}

const routes = [
  { path: '/', label: 'Главная' },
  { path: '/check-application', label: 'Проверить заявку' },
  { path: '/warranty-repair', label: 'Гарантийный ремонт' },
  { path: '/contacts', label: 'Контакты' },
];


const Nav: FC<NavProps> = () => (
  <nav className={'bg-gray-700 py-4 px-6 text-white flex gap-3'}>
    {routes.map(route => (
      <NavLink className={({isActive})=> isActive ? 'text-bright-red hover:text-bright-blue' : 'text-dark hover:text-bright-blue'} key={route.path} to={route.path}>
        {route.label}
      </NavLink>
    ))}
  </nav>
);

export default Nav;