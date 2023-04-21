import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileMenu from './../Shared/MobileMenu'
import Links from '../Shared/Links'
import { Routes } from '../../constants/index'

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 576 })

  return (
    <>
      {isMobile && (
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} routes={Routes} />
      )}
      {!isMobile && <Links routes={Routes} />}
    </>
  )
}

export default Nav
