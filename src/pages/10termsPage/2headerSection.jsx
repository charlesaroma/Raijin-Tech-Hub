import { motion } from "framer-motion";
import { FaFileContract } from "react-icons/fa";

const HeaderSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-100 flex items-center justify-center text-(--color-primary-600) shadow-lg">
          <FaFileContract className="text-3xl" />
        </div>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--color-primary-600) mb-4">
        Terms of Service
      </h1>
      <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-(--color-tertiary-500) to-transparent mx-auto mb-6"></div>
      <p className="text-xs text-(--color-text-secondary) mb-4">
        Last Updated: March 9, 2026
      </p>
      <p className="text-xs sm:text-sm text-(--color-text-secondary) max-w-3xl mx-auto leading-relaxed">
        These Terms of Service govern your use of Raijin Tech Hub&apos;s
        services. By engaging our services, you agree to comply with and be
        bound by these terms.
      </p>
    </motion.div>
  );
};

export default HeaderSection;
