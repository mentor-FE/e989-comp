import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "./../../constants/index";

const Nav: FC = () => {
  const setClassName = (isActive: boolean) =>
    `${
      isActive ? "text-nice-blue" : "text-white font-bold"
    } hover:text-сadet-grey ease-in-out duration-500`;

  return (
    <nav className={"p-4 flex gap-12 text-xl"}>
      {Routes.map((route) => (
        <NavLink
          className={({ isActive }) => setClassName(isActive)}
          key={route.path}
          to={route.path}
        >
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
