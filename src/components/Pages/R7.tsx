import { useState } from 'react'
import R7logo from '../../assets/r7/r7-office_logo_black.png'
import ProductsList from '../Features/productsR7/ProductsList'
import StartInfoR7 from '../Shared/StartInfoR7'
import Typography from '../Shared/Typography'
import { BodyProductsConst } from '../../constants/r7'
import BodyProducts from '../Features/productsR7/BodyProducts'

const R7 = () => {
  const [showMore, setShowMore] = useState(false)

  const showMoreInfo = () => {
    setShowMore((prev: any) => !prev)
  }
  return (
    <div className="bg-R7-main-grey px-6 r7">
      <div className="title pt-10">
        <Typography
          variant="subheading"
          className="text-5xl sm:text-2xl text-black mb-2 text-center pt-10"
        >
          О компании Р7-Офис
        </Typography>
      </div>
      <div className="flex justify-start px-6">
        <img src={R7logo} alt="R7-logo" className="w-full max-w-xs h-auto" />
      </div>
      <div className="flex justify-start pt-4 px-6">
        <a
          href="https://r7-office.ru/"
          target="_blank"
          rel="noreferrer"
          className="text-R7-main-blue text-xl"
        >
          r7-office.ru
        </a>
      </div>
      <StartInfoR7 />
      {!showMore ? (
        <div className="flex justify-center py-6">
          <button
            onClick={showMoreInfo}
            type="button"
            className="bg-R7-accent-red hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
          >
            Узнать подробнее
          </button>
        </div>
      ) : (
        <div className="container mx-auto px-6">
          <Typography
            variant="subheading"
            className="text-4xl sm:text-2xl text-black mb-2 text-center pt-10"
          >
            Продукты Р7
          </Typography>
          <ProductsList />
          {BodyProductsConst.map((item) => (
            <BodyProducts key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default R7
