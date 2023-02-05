import Nav from "./Nav";
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="flex h-24 items-center justify-between">
    <span className="text-logo flex items-center text-5xl font-bold ">e989</span>
    <Nav />
    </header>
  );
};

export default Header;
