import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const AnimateButton = ({
  path,
  target = '',
  classNames,
  children,
}: {
  path: string
  target?: string
  classNames: string
  children: React.ReactNode
}) => {
  const [, setHover] = useState(false)

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  }
  return (
    <a href={path} target={target}>
      <motion.div
        className="inline-flex items-center cursor-pointer"
        variants={buttonVariants}
        whileHover="hover"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <Button classNames={classNames}>
          {children}
        </Button>
      </motion.div>
    </a>
  )
}

export default AnimateButton
