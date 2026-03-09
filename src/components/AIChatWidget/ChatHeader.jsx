import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const ChatHeader = ({ onClose }) => (
  <div className="bg-white/90 backdrop-blur-xl p-3 sm:p-4 flex items-center justify-between text-(--color-off-black-900) border-b border-(--color-border)">
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-(--color-primary-500) flex items-center justify-center shadow-lg">
        <Icon icon="mdi:robot" className="text-lg sm:text-xl text-(--color-white-50)" />
      </div>
      <div>
        <h4 className="font-bold text-sm sm:text-sm text-(--color-off-black-900)">
          Raijin AI
        </h4>
        <p className="text-[10px] sm:text-[10px] text-(--color-text-secondary) flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Intelligent Assistant
        </p>
      </div>
    </div>
    <button
      onClick={onClose}
      className="text-(--color-text-secondary) hover:bg-gray-100 p-1.5 sm:p-2 rounded-full transition-colors cursor-pointer"
      aria-label="Close chat"
    >
      <Icon icon="mdi:close" className="text-base sm:text-lg" />
    </button>
  </div>
);

ChatHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChatHeader;
