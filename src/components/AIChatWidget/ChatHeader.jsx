import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const ChatHeader = ({ onClose }) => (
  <div className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] p-3 sm:p-4 flex items-center justify-between text-white">
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
        <Icon icon="mdi:robot" className="text-lg sm:text-xl text-[var(--color-primary-500)]" />
      </div>
      <div>
        <h4 className="font-bold text-sm sm:text-sm">Raijin AI Assistant</h4>
        <p className="text-xs sm:text-xs text-white/80 flex items-center gap-1">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
          Online 24/7
        </p>
      </div>
    </div>
    <button
      onClick={onClose}
      className="text-white hover:bg-white/20 p-1.5 sm:p-2 rounded-full transition-colors cursor-pointer"
      aria-label="Close chat"
    >
      <Icon icon="mdi:close" className="text-base sm:text-lg" />
    </button>
  </div>
);

ChatHeader.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ChatHeader;

