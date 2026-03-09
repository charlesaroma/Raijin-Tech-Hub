import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="relative rounded-[2.5rem] p-10 lg:p-16 bg-(--color-bg-primary) overflow-hidden shadow-[12px_12px_24px_var(--shadow-dark),-12px_-12px_24px_var(--shadow-light)]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-(--color-primary-500) rounded-full blur-[120px] -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-(--color-secondary-500) rounded-full blur-[120px] -ml-40 -mb-40"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-(--color-primary-600) mb-4">
          Ready to Elevate Your Digital Presence?
        </h2>
        <p className="text-xs sm:text-sm text-(--color-primary-600) mb-10 leading-relaxed">
          Partner with our team of visionaries and engineers to turn your most
          ambitious ideas into market-leading reality.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link to="/contact">
            <button className="group relative px-8 py-3 rounded-full font-semibold text-xs sm:text-sm bg-(--color-bg-primary) text-(--color-primary-600) cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:translate-y-0.5 active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)] transition-all duration-300 flex items-center gap-2">
              <span>Get Started Now</span>
              <Icon icon="mdi:rocket-launch" className="text-base text-(--color-secondary-500)" />
            </button>
          </Link>

          <Link to="/portfolio">
            <button className="group relative px-8 py-3 rounded-full font-semibold text-xs sm:text-sm bg-(--color-bg-primary) text-(--color-primary-600) cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:translate-y-0.5 active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)] transition-all duration-300 flex items-center gap-2">
              <span>Explore Our Portfolio</span>
              <Icon icon="mdi:arrow-right" className="text-base text-(--color-primary-500)" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CTASection;
