import { FC } from "react";
import { Routes } from "./../../constants/index";

const Nav: FC = () => {
  return (
    <nav className={"flex gap-12 lg:gap-6 md:gap-3 text-xl sm:hidden"}>
      {Routes.map((route) => (
        <a
          className="lg:text-sm md:text-xs text-white font-bold hover:text-сadet-grey ease-in-out duration-500"
          key={route.path}
          href={route.path}
        >
          {route.label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
