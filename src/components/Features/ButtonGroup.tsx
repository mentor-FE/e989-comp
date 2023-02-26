import { useState, useEffect } from "react";
import Button from "../Shared/Button";
import grayLine from "../../assets/grey.jpg";
import Popup from "../Shared/Popup";
import Livesklad from "../Widgets/Livesklad";
import LiveSkladWidget from "../Widgets/LiveSkladWidget";

const ButtonGroup: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // connect to Livesklad
  // useEffect(() => {
  //   const liveskladWidget = document.getElementById("livesklad-widget");

  //   if (liveskladWidget) {
  //     const observer = new MutationObserver((mutations) => {
  //       const widgetContainer = mutations[0].target as HTMLElement;
  //       console.log(widgetContainer);
  //       if (widgetContainer.classList.contains("widget-container")) {
  //         widgetContainer.style.display = "block";
  //         observer.disconnect();
  //       }
  //     });
  //     observer.observe(liveskladWidget, {
  //       attributes: true,
  //       attributeFilter: ["class"],
  //       childList: true,
  //     });
  //   }
  // }, [isPopupOpen]);

  return (
    <>
      <section>
        <div
          style={{ backgroundImage: `url(${grayLine})` }}
          className="h-48 flex justify-around items-center bg-right px-6 gap-6 lg:gap-3"
        >
          <Button
            onClick={handleOpenPopup}
            classNames="bg-black text-white font-bold border-golden uppercase lg:lowercase lg:text-sm sm:text-xs"
          >
            Нажмите, чтобы проверить статус ремонта
          </Button>
          <div className="w-full h-96">
            <LiveSkladWidget
              api_key="tB5HIm77UqMixqIGFRaP"
              title="Мои заказы"
              width="400px"
            />
          </div>
          {/* <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
            <div className="text-center">
              <h2 className="text-lg font-medium mb-2">Popup Title</h2>
              <p className="text-gray-600">Popup content goes here.</p>
              <div className="w-full h-96">
                <LiveSkladWidget
                  api_key="tB5HIm77UqMixqIGFRaP"
                  title="Мои заказы"
                  width="400px"
                />
              </div>
            </div>
          </Popup> */}
          <Button classNames="bg-golden text-black font-bold border-black uppercase lg:lowercase lg:text-sm sm:text-xs">
            <a href="tel:+79898293242">
              Нажмите, чтобы позвонить в сервис e989
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ButtonGroup;
