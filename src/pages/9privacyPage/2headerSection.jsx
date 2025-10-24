import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';

const HeaderSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-2xl bg-[var(--color-bg-primary)] flex items-center justify-center text-[var(--color-primary-500)] shadow-[inset_6px_6px_12px_var(--shadow-dark),inset_-6px_-6px_12px_var(--shadow-light)]">
          <FaShieldAlt className="text-3xl" />
        </div>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary-600)] mb-4">
        Privacy Policy
      </h1>
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent mx-auto mb-6"></div>
      <p className="text-xs text-[var(--color-primary-600)] mb-4">
        Last Updated: January 20, 2025
      </p>
      <p className="text-xs sm:text-sm text-[var(--color-primary-600)] max-w-3xl mx-auto leading-relaxed">
        At Raijin Tech Hub, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data.
      </p>
    </motion.div>
  );
};

export default HeaderSection;

