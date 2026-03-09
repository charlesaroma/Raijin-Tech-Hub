import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <motion.div
      className="text-center mb-16 lg:mb-24"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-(--color-primary-500) mb-6">
        Our <span className="text-(--color-secondary-500)">Expertise</span>
      </h1>
      <div className="w-24 h-1.5 bg-linear-to-r from-transparent via-(--color-secondary-500) to-transparent mx-auto mb-8"></div>
      <p className="text-sm sm:text-base md:text-lg text-(--color-off-black-500) max-w-2xl mx-auto leading-relaxed opacity-80">
        Bridging the gap between vision and reality with world-class digital
        engineering and strategic consultancy.
      </p>
    </motion.div>
  );
};

export default HeaderSection;
