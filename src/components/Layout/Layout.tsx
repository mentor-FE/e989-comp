import { Outlet } from "react-router-dom";
import Header from "../Widgets/Header";
import Nav from "./../Widgets/Nav";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-[1440px] my-0 mx-auto">
      <Header />
      <Nav />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="bg-gray-800 py-4 px-6 text-white">Footer</footer>
    </div>
  );
};

export default Layout;
