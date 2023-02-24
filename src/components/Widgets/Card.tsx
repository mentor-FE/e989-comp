
interface CardProps {
    partners: { name: string; path: string }[];
  }
  
  const Card: React.FC<CardProps> = ({ partners }) => {
    return (
      <>
        {partners.map((partner) => (
          <img
            key={partner.name}
            className="bg-white w-52 p-2 object-contain h-20"
            src={partner.path}
            alt={partner.name}
          />
        ))}
      </>
    );
  };
  
  export default Card;