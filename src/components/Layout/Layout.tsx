import { Outlet } from "react-router-dom";
import Header from './../Widgets/Header';

const Layout = () => {
  return (
    <div className="overflow-x-hidden px-6 min-h-screen flex flex-col max-w-container my-0 mx-auto ">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-800 py-4 text-white">Footer</footer>
    </div>
  );
};

export default Layout;
