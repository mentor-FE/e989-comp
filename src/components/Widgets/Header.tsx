import Nav from "./Nav";
import { FC } from "react";
import Typography from "../Shared/Typography";
import RepairSection from './RepairSection';

const Header: FC = () => {
  return (
    <>
        <header className="px-6">
      <div className="flex h-24 items-center justify-between gap-6 md:gap-3">
        <span className="text-pumpkin-orange flex items-center text-5xl md:text-4xl font-bold ">
          e989
        </span>
        <Nav />
      </div>

      <section className="mt-12 xs:mt-0 mb-6 max-w-[500px]">
        <RepairSection />
        <div>
          <Typography className="text-grey-chateau sm:text-white text-base font-bold mt-9 mb-5">
            Восстановление оргтехники в кратчайшие сроки.
          </Typography>
          <Typography className="text-grey-chateau sm:text-white text-sm">
            Мы предлагаем качественный ремонт оргтехники по доступным ценам,
            выполненный опытными специалистами с многолетним опытом работы.
            Гарантируем вам высокое качество наших услуг и удовольствие от
            сотрудничества.
          </Typography>
        </div>
      </section>
    </header>
    </>

  );
};

export default Header;
