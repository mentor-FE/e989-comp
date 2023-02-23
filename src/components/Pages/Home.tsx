// import CardList from "../Widgets/CardList";
import grayLine from "../../assets/grey.jpg";
import systemBlock from "../../assets/block.jpg";
import laptop from "../../assets/laptop.jpg";
import map from "../../assets/map.png";
import { partners } from "../../assets";

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
          <div className="text-grey-chateau text-base font-bold mt-9 mb-5">
            Восстановление оргтехники в кратчайшие сроки.
          </div>
          <div className="text-grey-chateau text-sm">
            Мы предлагаем качественный ремонт оргтехники по доступным ценам,
            выполненный опытными специалистами с многолетним опытом работы.
            Гарантируем вам высокое качество наших услуг и удовольствие от
            сотрудничества.
          </div>
        </div>
      </section>

      <section>
        <div
          style={{ backgroundImage: `url(${grayLine})` }}
          className="h-48 flex justify-around items-center bg-right"
        >
          <button className="bg-black border-2 border-solid border-golden text-white text-base font-bold uppercase py-4 px-4 ">
            Нажмите, чтобы проверить статус ремонта
          </button>
          <button className="bg-golden border-2 border-solid border-black text-black text-base font-bold uppercase py-4 px-4">
            <a href="tel:+79898293242">
              Нажмите, чтобы позвонить в сервис e989
            </a>
          </button>
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
          <div className="bg-black text-white py-12 px-20">
            Ремонт мониторов и проекторов, который может включать замену ламп и
            других деталей, исправление дефектов экрана и настройку
            цветопередачи.
          </div>
        </div>
        <div className="w-1/2 flex">
          <div className="bg-nice-blue pt-10 px-16">
            <h2 className="text-4xl text-white font-bold mb-2">
              Ремонт компьютеров, ноутбуков, планшетов и смартфонов
            </h2>
            <p className="text-xl text-white">
              Включает в себя восстановление операционной системы, замену
              компонентов (например, жестких дисков, оперативной памяти, блоков
              питания), а также настройку соединения с сетью Интернет.
            </p>
            <button className="bg-black border-2 border-solid border-golden text-white text-base font-bold uppercase py-4 px-4 w-full my-8">
              Удаление вирусов
            </button>

            <h2 className="text-4xl text-white font-bold mb-2">
              Диагностика и ремонт принтеров, сканеров, МФУ
            </h2>
            <p className="text-xl text-white">
              замена картриджей, ремонт принтерных головок, настройку соединения
              с компьютером и прочие работы, связанные с обеспечением
              правильного функционирования печатающих устройств.
            </p>
            <button className="bg-black border-2 border-solid border-golden text-white text-base font-bold uppercase py-4 px-4 w-full my-8">
              Срочная заправка картриджей
            </button>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden">
        <img src={laptop} alt="laptop" className="object-cover	w-full" />
      </section>
      <section className="bg-dark-slate-grey">
        <div>
          <h2 className="text-5xl text-white mb-2 text-center pt-10">
            Гарантийный ремонт
          </h2>
          <p className="text-xl text-white uppercase mb-12">Наши партнёры:</p>
          <div className="flex flex-wrap gap-5 justify-center pb-32">
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.aser}
              alt="aser"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.aquarius}
              alt="aquarius"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.brother}
              alt="brother"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.cyberpower}
              alt="cyberpower"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.defender}
              alt="defender"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.depo}
              alt="depo"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.electric}
              alt="electric"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.iek}
              alt="iek"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.kraftway}
              alt="kraftway"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.krauler}
              alt="krauler"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.lexmark}
              alt="lexmark"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.mikrolab}
              alt="mikrolab"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.packard_bell}
              alt="packard_bell"
            />
            <img
              className="bg-white w-52 p-2 object-contain h-20"
              src={partners.tenda}
              alt="tenda"
            />
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div>
          <h2 className="text-5xl text-white text-center pt-10 mb-12">
            Контактная информация
          </h2>
          <div className="flex justify-center gap-16 pb-32">
            <img src={map} alt="map" />
            <div className="text-white">
              <h2 className="text-5xl text-white mb-14">Контакты</h2>
              <div className="flex gap-16">
                <div className="text-base max-w-xs">
                  <h3 className="text-pumpkin-orange text-2xl mb-6 font-bold">Мы находимся:</h3>
                  <p>353680, Краснодарский край,<br/> г. Ейск, ул. М ира 133</p>
                </div>
                <div className="text-base max-w-xs">
                  <h3 className="text-pumpkin-orange text-2xl mb-6 font-bold">Контакты:</h3>
                  <p>ots.ru@mail.ru</p>
                  <p>+7 (989) 829-32-42</p>
                </div>
              </div>
              <div className="text-base max-w-xs mt-14 ">
                <h3 className="text-pumpkin-orange text-2xl mb-6 font-bold">Мы работаем:</h3>
                <p>Пн-Пт: 09:00 - 18:00</p>
                <p>Сб: 10:00 - 15:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
