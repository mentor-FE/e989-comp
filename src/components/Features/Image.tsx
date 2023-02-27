import laptop from "../../assets/laptop.webp";

const Image: React.FC = () => {
  return (
    <>
      <section className="w-full overflow-hidden">
        <img src={laptop} alt="laptop" className="object-cover	w-full" />
      </section>
    </>
  );
};

export default Image;
