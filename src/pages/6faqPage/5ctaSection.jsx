import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const CTASection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 text-center p-8 lg:p-12 rounded-3xl bg-[var(--color-bg-card)] shadow-[12px_12px_24px_var(--shadow-dark),-12px_-12px_24px_var(--shadow-light)]"
    >
      <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-primary-600)] mb-4">
        Still have questions?
      </h3>
      <p className="text-sm lg:text-base text-[var(--color-primary-600)] mb-8 max-w-2xl mx-auto">
        Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help you.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full font-semibold text-xs transition-all duration-300 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:translate-y-0.5"
        >
          <Icon icon="mdi:headset" />
          <span>Contact Support</span>
        </a>
        <a
          href="https://wa.me/256777982066"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full font-semibold text-xs transition-all duration-300 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:translate-y-0.5"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );
};

export default CTASection;

