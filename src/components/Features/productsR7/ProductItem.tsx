import { ReactNode } from 'react'

interface ProductItemProps {
  icon: ReactNode
  title: string
}

const ProductItem = ({ icon, title }: ProductItemProps) => {
  return (
    <div className="flex justify-start items-center">
      <div className="flex m-0 w-11">{icon}</div>
      <h3 className="ml-4">{title}</h3>
    </div>
  )
}

export default ProductItem
