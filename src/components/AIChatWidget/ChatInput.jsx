import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const ChatInput = ({
  value,
  onChange,
  onSend,
  onKeyPress,
  isLoading,
  inputRef,
}) => (
  <div className="p-3 sm:p-4 bg-white/80 backdrop-blur-md border-t border-gray-100">
    <div className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Type your message..."
        disabled={isLoading}
        className="flex-1 px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-(--color-secondary-500) focus:ring-4 focus:ring-(--color-secondary-500)/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        onClick={() => onSend()}
        disabled={!value.trim() || isLoading}
        className="bg-(--color-secondary-500) text-(--color-white-50) p-2.5 rounded-xl hover:bg-(--color-secondary-600) transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-lg active:scale-95"
        aria-label="Send message"
      >
        <Icon
          icon={isLoading ? "mdi:loading" : "mdi:send"}
          className={`text-lg ${isLoading ? "animate-spin" : ""}`}
        />
      </button>
    </div>
    <p className="text-[10px] sm:text-[10px] text-gray-400 mt-1.5 sm:mt-2 text-center">
      Powered by Google Gemini AI 🤖
    </p>
  </div>
);

ChatInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  inputRef: PropTypes.object.isRequired,
};

export default ChatInput;
