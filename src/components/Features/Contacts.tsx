import map from "../../assets/map.png";
import WorkTime from "../Widgets/WorkTime";
import Typography from "./../Shared/Typography";

const Contacts: React.FC = () => {
  return (
    <>
      <section id="contacts" className="bg-black">
        <div className="px-6">
          <Typography
            variant="subheading"
            className="text-5xl sm:text-2xl text-white text-center pt-10 mb-12"
          >
            Контактная информация
          </Typography>

          <div className="flex lg:flex-col justify-center gap-16 pb-32 px-6">
            <img
              className="object-cover w-1/2 h-full lg:object-contain lg:object-center lg:w-full"
              src={map}
              alt="map"
            />
            <div className="text-white">
              <Typography className="text-5xl sm:hidden text-white mb-14">
                Контакты
              </Typography>
              <div className="flex gap-16 sm:gap-8 xs:flex-col">
                <div className="text-base max-w-xs">
                  <Typography className="text-pumpkin-orange text-2xl sm:text-lg mb-6 font-bold">
                    Адрес:
                  </Typography>
                  <Typography>
                    353680, Краснодарский край,
                    <br /> г. Ейск, ул. Мира 133
                  </Typography>
                </div>
                <div className="text-base max-w-xs">
                  <Typography className="text-pumpkin-orange text-2xl sm:text-lg mb-6 font-bold">
                    Контакты:
                  </Typography>
                  <Typography>
                    <p className="mb-4">
                      <a href="mailto:sots.ru@mail.ru">ots.ru@mail.ru</a>
                    </p>

                    <a href="tel:+79898293242">+7 (989) 829-32-42</a>
                  </Typography>
                </div>
              </div>
              <div className="text-base max-w-xs mt-14 ">
                <Typography className="text-pumpkin-orange text-2xl sm:text-lg mb-6 font-bold">
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

export default Contacts;
