import { Outlet } from "react-router-dom";
import Header from "../Widgets/Header";
import Nav from "./../Widgets/Nav";
import header from "../../assets/header.png"

const Layout = () => {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col max-w-[1440px] my-0 mx-auto">
      <Header headerClass={''} logoClass={'px-6 mr-6 ml-auto'} classNames={'bg-white bg-center bg-no-repeat bg-cover bg-size-auto h-80 md:bg-size-cover'} styles={{backgroundImage: `url(${header})`, display: 'block'}}/>
      <Nav />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="bg-gray-800 py-4 px-6 text-white">Footer</footer>
    </div>
  );
};

export default Layout;
