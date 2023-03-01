import { motion } from 'framer-motion';
import useCardInView from '../../hooks/useCardInView';

interface CardProps {
  partners: { name: string; path: string }[];
}

const Card: React.FC<CardProps> = ({ partners }) => {
  return (
    <>
      {partners.map((partner) => (
        <CardItem partner={partner} key={partner.name} />
      ))}
    </>
  );
};

interface CardItemProps {
  partner: { name: string; path: string };
}

const CardItem: React.FC<CardItemProps> = ({ partner }) => {
  const { ref, animation } = useCardInView({ threshold: 0.5 });

  return (
    <motion.div
      className="bg-white w-52 flex items-center justify-center object-cover h-32"
      ref={ref}
      initial={animation.initial}
      animate={animation.animate}
    >
      <img src={partner.path} alt={partner.name} />
    </motion.div>
  );
};

export default Card;