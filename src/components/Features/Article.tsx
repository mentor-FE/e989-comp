  
import Button from '../Shared/Button';
import Typography from '../Shared/Typography';
import systemBlock from "../../assets/block.jpg";

  const Article: React.FC = () => {
    return (
      <>
      <main className="flex sm:flex-col">
        <div className="w-1/2 sm:w-full flex flex-col justify-between">
          <img
            src={systemBlock}
            alt="systemBlock"
            className="object-cover w-full h-full lg:object-contain lg:object-center lg:bg-nice-blue"
          />
          <Typography className="bg-black text-white py-12 px-20 lg:p-6">
            Ремонт мониторов и проекторов, который может включать замену ламп и
            других деталей, исправление дефектов экрана и настройку
            цветопередачи.
          </Typography>
        </div>

        <div className="w-1/2 sm:w-full flex">
          <div className="bg-nice-blue pt-10 pl-16 lg:p-6 pr-6">
            <Typography
              variant="subheading"
              className="text-4xl lg:text-2xl sm:text-lg text-white font-bold mb-2"
            >
              Ремонт компьютеров, ноутбуков, планшетов и смартфонов
            </Typography>
            <Typography className="text-xl lg:text-sm text-white">
              Включает в себя восстановление операционной системы, замену
              компонентов (например, жестких дисков, оперативной памяти, блоков
              питания), а также настройку соединения с сетью Интернет.
            </Typography>
            <Button classNames="bg-black border-golden text-turmeric text-base font-bold uppercase w-full my-8 lg:text-xs">
              Удаление вирусов
            </Button>
            <Typography
              variant="subheading"
              className="text-4xl lg:text-2xl sm:text-lg text-white font-bold mb-2"
            >
              Диагностика и ремонт принтеров, сканеров, МФУ
            </Typography>
            <Typography className="text-xl lg:text-sm text-white">
              замена картриджей, ремонт принтерных головок, настройку соединения
              с компьютером и прочие работы, связанные с обеспечением
              правильного функционирования печатающих устройств.
            </Typography>
            <Button classNames="bg-black border-golden text-turmeric text-base font-bold uppercase w-full my-8 lg:text-xs">
              Срочная заправка картриджей
            </Button>
          </div>
        </div>
      </main>
      </>
    );
  };
  
  export default Article;