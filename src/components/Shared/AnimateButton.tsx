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
  //tel:+79898293242
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
          {/* Нажмите, чтобы позвонить в сервис e989 */}
          {children}
        </Button>
      </motion.div>
    </a>
  )
}

export default AnimateButton
