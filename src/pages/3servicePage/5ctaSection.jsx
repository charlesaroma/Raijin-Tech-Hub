import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="relative rounded-3xl p-8 lg:p-12 bg-[var(--color-bg-card)] overflow-hidden shadow-[12px_12px_24px_var(--shadow-dark),-12px_-12px_24px_var(--shadow-light)]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-500)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-primary-600)] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary-600)] mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[var(--color-primary-600)] mb-8 max-w-2xl mx-auto leading-relaxed">
          Our team is here to help you grow. Let&apos;s discuss how we can assist you in achieving your business goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <button className="group relative px-6 py-3 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full font-semibold text-xs overflow-hidden transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:translate-y-0.5 active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]">
              <span className="relative z-10">Get in Touch</span>
              <Icon icon="mdi:message" className="text-sm" />
            </button>
          </Link>

          <Link to="/portfolio">
            <button className="group relative px-6 py-3 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full font-semibold text-xs overflow-hidden transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:translate-y-0.5 active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]">
              <span className="relative z-10">View Our Work</span>
              <Icon icon="mdi:arrow-right" className="text-sm" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CTASection;

