import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const CTASection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative rounded-3xl p-8 lg:p-12 bg-[var(--color-bg-card)] text-center shadow-[12px_12px_24px_var(--shadow-dark),-12px_-12px_24px_var(--shadow-light)]"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary-600)] mb-4">
        Ready to Start Your Project?
      </h2>
      <p className="text-sm sm:text-base text-[var(--color-primary-600)] mb-8 max-w-2xl mx-auto">
        Let&apos;s discuss how we can help transform your business with cutting-edge technology solutions.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full font-semibold text-xs transition-all duration-300 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:translate-y-0.5 active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]"
      >
        <span>Get in Touch</span>
        <Icon icon="mdi:arrow-right" />
      </Link>
    </motion.div>
  );
};

export default CTASection;

