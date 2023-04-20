import { useState } from "react";
import { Transition } from "@headlessui/react";
import { useMediaQuery } from "react-responsive";

import { Routes } from "./../../constants/index";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 576 });

  return (
    <>
      {isMobile && (
        <div className="relative">
          <button
            type="button"
            className="inline-flex text-сadet-grey items-center justify-center "
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute z-50 px-4 py-6  right-0 p-2 w-56 rounded-md shadow-lg bg-heavy-metal ring-1 ring-black ring-opacity-5">
              <div
                className="flex flex-col gap-10"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {Routes.map((route) => (
                  <a
                    className="text-white text-xl font-bold hover:text-сadet-grey ease-in-out duration-500"
                    key={route.path}
                    href={route.path}
                  >
                    {route.label}
                  </a>
                ))}
              </div>
            </div>
          </Transition>
        </div>
      )}
      {!isMobile && (
        <nav className={"flex gap-12 lg:gap-6 md:gap-3 text-xl sm:hidden"}>
          {Routes.map((route) => (
            <a
              className="lg:text-sm md:text-xs text-white font-bold hover:text-сadet-grey ease-in-out duration-500"
              key={route.path}
              href={route.path}
              target={route.target}
            >
              {route.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
};

export default Nav;
