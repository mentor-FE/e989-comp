import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavProps {
  routes: Array<{ path: string; label: string }>;
}

const routes = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];


const Nav: FC<NavProps> = () => (
  <nav>
    {routes.map(route => (
      <NavLink key={route.path} to={route.path}>
        {route.label}
      </NavLink>
    ))}
  </nav>
);

export default Nav;