import { motion } from 'framer-motion';

const RepairSection = () => {
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div id="repair-section" className="flex flex-col">
      <motion.div
        className="text-white text-base font-bold uppercase lg:text-xs"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        ремонт оргтехники
      </motion.div>
      <motion.div
        className="text-golden text-5xl font-bold uppercase lg:text-3xl"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        быстро
      </motion.div>
      <motion.div
        className="text-white text-5xl font-bold uppercase lg:text-3xl"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        качественно
      </motion.div>
      <motion.div
        className="text-white text-5xl font-bold uppercase lg:text-3xl"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.6 }}
      >
        <span className="text-nice-blue">доступная</span> цена
      </motion.div>
    </div>
  );
};

export default RepairSection;
