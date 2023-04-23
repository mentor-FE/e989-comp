import { ReactNode } from 'react'

interface ProductItemProps {
  icon: ReactNode
  title: string
}

const ProductItem = ({ icon, title }: ProductItemProps) => {
  return (
    <div className="flex gap-3 justify-start items-center md:flex-col md:justify-center md:items-center">
      <div className="w-11">{icon}</div>
      <h3 className="">{title}</h3>
    </div>
  )
}

export default ProductItem
