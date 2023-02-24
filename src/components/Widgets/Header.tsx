import Nav from "./Nav";
import { FC } from "react";
import Typography from "../Shared/Typography";

const Header: FC = () => {
  return (
    <header className="px-6">
      <div className="flex h-24 items-center justify-between gap-6 md:gap-3">
        <span className="text-pumpkin-orange flex items-center text-5xl md:text-4xl font-bold ">
          e989
        </span>
        <Nav />
      </div>

      <section className="mt-12 mb-6 max-w-[500px]">
        <div className="flex flex-col">
          <div className="text-white text-base font-bold uppercase lg:text-xs">
            ремонт оргтехники
          </div>
          <div className="text-golden text-5xl font-bold uppercase lg:text-3xl">быстро</div>
          <div className="text-white text-5xl font-bold uppercase lg:text-3xl">
            качественно
          </div>
          <div className="text-white text-5xl font-bold uppercase lg:text-3xl">
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
    </header>
  );
};

export default Header;
