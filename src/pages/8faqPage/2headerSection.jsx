import { motion } from 'framer-motion';

const HeaderSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary-600)] mb-4">
        Frequently Asked Questions
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent mx-auto mb-6"></div>
      <p className="text-sm sm:text-base text-[var(--color-primary-600)] max-w-3xl mx-auto leading-relaxed">
        Find quick answers to common questions about our services, process, and how we can help your business.
      </p>
    </motion.div>
  );
};

export default HeaderSection;

