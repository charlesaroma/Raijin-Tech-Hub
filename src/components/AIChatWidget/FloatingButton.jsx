import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const FloatingButton = ({ isOpen, onClick }) => (
  <motion.button
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0 }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
    }}
    onClick={onClick}
    className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white rounded-full shadow-2xl hover:shadow-[var(--color-primary-500)]/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group cursor-pointer"
    aria-label="Open AI chat"
  >
    {/* Pulse Animation */}
    {!isOpen && (
      <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary-400)] opacity-75 animate-ping"></span>
    )}
    
    {/* Icon */}
    <motion.div
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      className="relative z-10"
    >
      {isOpen ? (
        <Icon icon="mdi:close" className="text-xl sm:text-2xl" />
      ) : (
        <Icon icon="mdi:robot" className="text-xl sm:text-2xl" />
      )}
    </motion.div>

    {/* Notification Badge */}
    {!isOpen && (
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 text-white text-[9px] sm:text-[10px] rounded-full flex items-center justify-center font-bold shadow-lg"
      >
        AI
      </motion.span>
    )}
  </motion.button>
);

FloatingButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FloatingButton;

