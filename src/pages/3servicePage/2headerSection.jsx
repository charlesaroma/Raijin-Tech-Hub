import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <motion.div 
      className="text-center mb-12 lg:mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary-600)] mb-4">
        Our Services
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent mx-auto mb-6"></div>
      <p className="text-sm sm:text-base md:text-lg text-[var(--color-primary-600)] max-w-3xl mx-auto leading-relaxed">
        Explore the wide range of services that we offer to enhance your business operations and technology stack.
      </p>
    </motion.div>
  );
};

export default HeaderSection;

