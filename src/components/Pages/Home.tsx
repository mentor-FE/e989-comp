import ButtonGroup from "./../Features/ButtonGroup";
import Article from "../Features/Article";
import Image from "../Features/Image";
import Warranty from "../Features/Warranty";
import Contacts from "../Features/Contacts";
import LiveskladWidget from "./../Widgets/LiveskladWidget";
import { LiveskladOptions } from "./../../constants/index";

const Home = () => {
  return (
    <>
      <ButtonGroup />
      <Article />
      <Image />
      <Warranty />
      <LiveskladWidget options={LiveskladOptions} />
      <Contacts />
    </>
  );
};

export default Home;
