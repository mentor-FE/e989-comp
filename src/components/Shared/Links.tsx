import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

interface LinksProps {
  className?: string | undefined
  routes: {
    label: string
    path: string
    link?: boolean
    target?: string
  }[]
}
const Links = ({ className, routes }: LinksProps) => {
  return (
    <nav
      className={`flex gap-12 lg:gap-6 md:gap-3 text-xl sm:hidden ${className}`}
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
    </nav>
  )
}

export default Links
