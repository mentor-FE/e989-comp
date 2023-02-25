  
import Button from '../Shared/Button';
import grayLine from "../../assets/grey.jpg";

  const ButtonGroup: React.FC = () => {
    return (
      <>
      <section>
        <div
          style={{ backgroundImage: `url(${grayLine})` }}
          className="h-48 flex justify-around items-center bg-right px-6 gap-6 lg:gap-3"
        >
          <Button classNames="bg-black text-white font-bold border-golden uppercase lg:lowercase lg:text-sm sm:text-xs">
            Нажмите, чтобы проверить статус ремонта
          </Button>
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