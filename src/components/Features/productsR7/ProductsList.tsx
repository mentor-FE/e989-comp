import ProductItem from './ProductItem'
import { productsR7 } from '../../../constants/r7'

const ProductsList = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {productsR7.map((product) => (
        <div key={product.title} className="my-6 w-1/3">
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  )
}

export default ProductsList
