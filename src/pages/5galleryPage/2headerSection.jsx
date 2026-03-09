import { motion } from 'framer-motion';

const HeaderSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 lg:mb-16"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--color-primary-600) mb-4">
        Our Gallery
      </h1>
      <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-(--color-primary-500) to-transparent mx-auto mb-6"></div>
      <p className="text-xs sm:text-sm text-(--color-primary-600) max-w-3xl mx-auto leading-relaxed">
        Take a glimpse into our world - from innovative projects to our creative workspace and amazing team.
      </p>
    </motion.div>
  );
};

export default HeaderSection;

