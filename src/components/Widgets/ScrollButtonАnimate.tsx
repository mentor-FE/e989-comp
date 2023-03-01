import { useState, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../Shared/Button";

const ScrollButton = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition =
        (elementRef.current as HTMLDivElement)?.offsetTop || 0;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const buttonVariants = {
    hidden: {
      opacity: 0,
      x: 70,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={elementRef}>
      <motion.div
        className=""
        variants={buttonVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <Button classNames="bg-black border-golden text-turmeric text-base font-bold uppercase w-full my-8 lg:text-xs">
          {children}
        </Button>
      </motion.div>
    </div>
  );
};

export default ScrollButton;
