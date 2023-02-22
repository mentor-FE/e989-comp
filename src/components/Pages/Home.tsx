// import CardList from "../Widgets/CardList";
import grayLine from "../../assets/grey.jpg";

const Home = () => {
  return (
    <>
      <div className="mt-12 max-w-[500px]">
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
      </div>
      <div>
        <div
          style={{ backgroundImage: `url(${grayLine})` }}
          className="h-48 flex justify-around items-center -mr-6 bg-right"
        >
          <button className="bg-black border-2 border-solid border-golden text-white text-base font-bold uppercase py-4 px-4 ">
            Нажмите, чтобы проверить статус ремонта
          </button>
          <button className="bg-golden border-2 border-solid border-black text-black text-base font-bold uppercase py-4 px-4">
            Нажмите, чтобы позвонить в сервис e989
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
