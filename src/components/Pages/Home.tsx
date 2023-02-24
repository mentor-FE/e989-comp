// import CardList from "../Widgets/CardList";
import grayLine from "../../assets/grey.jpg";
import systemBlock from "../../assets/block.jpg";
import laptop from "../../assets/laptop.jpg";
import map from "../../assets/map.png";

import Button from "../Shared/Button";
import Typography from "../Shared/Typography";
import WorkTime from "../Widgets/WorkTime";
import Card from "../Widgets/Card";
import { Partners } from "../../constants";

const Home = () => {
  return (
    <>
      <section className="mt-12 max-w-[500px]">
        <div className="flex flex-col">
          <div className="text-white text-base font-bold uppercase">
            ремонт оргтехники
          </div>
          <div className="text-golden text-5xl font-bold uppercase">быстро</div>
          <div className="text-white text-5xl font-bold uppercase">
            качественно
          </div>
          <div className="text-white text-5xl font-bold uppercase">
            <span className="text-nice-blue">доступная</span> цена
          </div>
        </div>
        <div>
          <Typography className="text-grey-chateau text-base font-bold mt-9 mb-5">
            Восстановление оргтехники в кратчайшие сроки.
          </Typography>
          <Typography className="text-grey-chateau text-sm">
            Мы предлагаем качественный ремонт оргтехники по доступным ценам,
            выполненный опытными специалистами с многолетним опытом работы.
            Гарантируем вам высокое качество наших услуг и удовольствие от
            сотрудничества.
          </Typography>
        </div>
      </section>

      <section>
        <div
          style={{ backgroundImage: `url(${grayLine})` }}
          className="h-48 flex justify-around items-center bg-right"
        >
          <Button classNames="bg-black text-white text-base font-bold border-golden uppercase">
            Нажмите, чтобы проверить статус ремонта
          </Button>
          <Button classNames="bg-golden text-black text-base font-bold border-black uppercase">
            <a href="tel:+79898293242">
              Нажмите, чтобы позвонить в сервис e989
            </a>
          </Button>
        </div>
      </section>

      <section className="flex">
        <div className="w-1/2 flex flex-col justify-between">
          <div className="">
            <img
              src={systemBlock}
              alt="systemBlock"
              className="object-cover w-full h-full"
            />
          </div>
          <Typography className="bg-black text-white py-12 px-20">
            Ремонт мониторов и проекторов, который может включать замену ламп и
            других деталей, исправление дефектов экрана и настройку
            цветопередачи.
          </Typography>
        </div>
        <div className="w-1/2 flex">
          <div className="bg-nice-blue pt-10 px-16">
            <Typography
              variant="subheading"
              className="text-4xl text-white font-bold mb-2"
            >
              Ремонт компьютеров, ноутбуков, планшетов и смартфонов
            </Typography>
            <Typography className="text-xl text-white">
              Включает в себя восстановление операционной системы, замену
              компонентов (например, жестких дисков, оперативной памяти, блоков
              питания), а также настройку соединения с сетью Интернет.
            </Typography>
            <Button classNames="bg-black border-golden text-turmeric text-base font-bold uppercase w-full my-8">
              Удаление вирусов
            </Button>
            <Typography
              variant="subheading"
              className="text-4xl text-white font-bold mb-2"
            >
              Диагностика и ремонт принтеров, сканеров, МФУ
            </Typography>
            <Typography className="text-xl text-white">
              замена картриджей, ремонт принтерных головок, настройку соединения
              с компьютером и прочие работы, связанные с обеспечением
              правильного функционирования печатающих устройств.
            </Typography>
            <Button classNames="bg-black border-golden text-turmeric text-base font-bold uppercase w-full my-8">
              Срочная заправка картриджей
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden">
        <img src={laptop} alt="laptop" className="object-cover	w-full" />
      </section>

      <section className="bg-dark-slate-grey">
        <div>
          <Typography
            variant="subheading"
            className="text-5xl text-white mb-2 text-center pt-10"
          >
            Гарантийный ремонт
          </Typography>
          <Typography className="text-xl text-white uppercase mb-12">
            Наши партнёры:
          </Typography>
          <div className="flex flex-wrap gap-5 justify-center pb-32">
            <Card partners={Partners} />
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div>
          <Typography
            variant="subheading"
            className="text-5xl text-white text-center pt-10 mb-12"
          >
            Контактная информация
          </Typography>

          <div className="flex justify-center gap-16 pb-32">
            <img src={map} alt="map" />
            <div className="text-white">
              <Typography className="text-5xl text-white mb-14">
                Контакты
              </Typography>
              <div className="flex gap-16">
                <div className="text-base max-w-xs">
                  <Typography className="text-pumpkin-orange text-2xl mb-6 font-bold">
                    Мы находимся:
                  </Typography>
                  <Typography>
                    353680, Краснодарский край,
                    <br /> г. Ейск, ул. Мира 133
                  </Typography>
                </div>
                <div className="text-base max-w-xs">
                  <Typography className="text-pumpkin-orange text-2xl mb-6 font-bold">
                    Контакты:
                  </Typography>
                  <Typography>
                    ots.ru@mail.ru
                    <br />
                    +7 (989) 829-32-42
                  </Typography>
                </div>
              </div>
              <div className="text-base max-w-xs mt-14 ">
                <Typography className="text-pumpkin-orange text-2xl mb-6 font-bold">
                  Мы работаем:
                </Typography>
                <WorkTime
                  mondayToFriday="09:00 - 18:00"
                  saturday="10:00 - 15:00"
                  sunday="Выходной"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
