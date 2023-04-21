import { Transition } from '@headlessui/react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'



interface MobileMenuProps {
  className?: string | undefined;
  isOpen: boolean;
  routes: {
    label: string
    path: string
    link?: boolean
    target?: string
  }[]
  setIsOpen: (isOpen: boolean) => void;
}
const MobileMenu = ({className, isOpen, setIsOpen, routes}: MobileMenuProps) => {
  return (
    <div className="relative">
    <button
      type="button"
      className={`inline-flex text-сadet-grey items-center justify-center ${className}}`}
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
          {routes.map((route) => {
            if (route.link) {
              return (
                <Link
                  className="lg:text-sm md:text-xs text-white font-bold hover:text-сadet-grey ease-in-out duration-500"
                  key={route.path}
                  to={route.path}
                >
                  {route.label}
                </Link>
              )
            }

            return (
              <HashLink
                className="lg:text-sm md:text-xs text-white font-bold hover:text-сadet-grey ease-in-out duration-500"
                key={route.path}
                to={route.path}
                target={route.target}
              >
                {route.label}
              </HashLink>
            )
          })}
        </div>
      </div>
    </Transition>
  </div>
  );
}

export default MobileMenu;