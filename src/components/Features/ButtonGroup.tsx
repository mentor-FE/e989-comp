import grayLine from '../../assets/grey.webp'
import AnimateButton from '../Shared/AnimateButton'
import { Routes } from './../../constants/index'

const ButtonGroup: React.FC = () => {
  return (
    <>
      <section>
        <div
          style={{ backgroundImage: `url(${grayLine})` }}
          className="h-48 flex items-center justify-center bg-cover bg-no-repeat bg-center"
        >
          <div className="flex w-full  justify-around  bg-right px-6 gap-6 lg:gap-3 sm:hidden">
            {Routes.map((item) => {
              if (item.target) {
                return (
                  <AnimateButton
                    path={item.path}
                    target={item.target}
                    classNames="bg-black text-white font-bold border-golden uppercase lg:lowercase lg:text-sm sm:text-xs"
                  >
                    Нажмите, чтобы проверить статус ремонта
                  </AnimateButton>
                )
              }
              return ''
            })}

            <AnimateButton
              path="tel:+79898293242"
              classNames="bg-golden text-black font-bold border-black uppercase lg:lowercase lg:text-sm sm:text-xs"
            >
              Нажмите, чтобы позвонить в сервис e989
            </AnimateButton>
          </div>
          <div className="hidden justify-around items-center bg-right px-6 gap-6 lg:gap-3 sm:flex">
            <AnimateButton
              path="#livesklad-widget"
              classNames="bg-black text-white font-bold border-golden uppercase lg:lowercase lg:text-sm sm:text-xs"
            >
              Проверить статус ремонта
            </AnimateButton>
            <AnimateButton
              path="tel:+79898293242"
              classNames="bg-golden text-black font-bold border-black uppercase lg:lowercase lg:text-sm sm:text-xs"
            >
              Позвонить в сервис e989
            </AnimateButton>
          </div>
        </div>
      </section>
    </>
  )
}

export default ButtonGroup
