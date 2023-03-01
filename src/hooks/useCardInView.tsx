import { useInView } from "react-intersection-observer";

interface UseInViewProps {
  threshold?: number;
}

const useCardInView = (props?: UseInViewProps) => {
  const { threshold } = props || {};

  const options = {
    threshold: threshold || 0.5,
  };

  const { ref: cardRef, inView } = useInView(options);
  console.log(inView);

  const animation = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: inView
      ? {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeInOut",
          },
        }
      : {
          opacity: 0,
          y: 50,
        },
  };

  return { ref: cardRef, animation };
};

export default useCardInView;
