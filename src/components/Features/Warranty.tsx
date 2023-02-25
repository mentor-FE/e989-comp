import { Partners } from "../../constants";
import Typography from "../Shared/Typography";
import Card from "../Widgets/Card";

const Warranty: React.FC = () => {
  return (
    <>
      <section id="warranty" className="bg-dark-slate-grey">
        <div className="px-6">
          <Typography
            variant="subheading"
            className="text-5xl sm:text-2xl text-white mb-2 text-center pt-10"
          >
            Гарантийный ремонт
          </Typography>
          <Typography className="text-xl text-white uppercase sm:lowercase mb-12 lg:mb-6">
            Наши партнёры:
          </Typography>
          <div className="flex flex-wrap gap-5 justify-center pb-32">
            <Card partners={Partners} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Warranty;
