import { FC } from "react";
import { Routes } from "./../../constants/index";

const Nav: FC = () => {
  return (
    <nav className={"p-4 flex gap-12 text-xl"}>
      {Routes.map((route) => (
        <a
          className="text-white font-bold hover:text-сadet-grey ease-in-out duration-500"
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
