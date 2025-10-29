import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const ChatInput = ({ value, onChange, onSend, onKeyPress, isLoading, inputRef }) => (
  <div className="p-2 sm:p-3 bg-white border-t border-gray-200">
    <div className="flex gap-1.5 sm:gap-2">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Type your message..."
        disabled={isLoading}
        className="flex-1 px-3 py-2 sm:px-4 border border-gray-300 rounded-full text-base focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-500)]/20 disabled:bg-gray-50 disabled:cursor-not-allowed"
      />
      <button
        onClick={() => onSend()}
        disabled={!value.trim() || isLoading}
        className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white p-2 rounded-full hover:from-[var(--color-primary-600)] hover:to-[var(--color-primary-700)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg hover:shadow-xl"
        aria-label="Send message"
      >
        <Icon icon={isLoading ? 'mdi:loading' : 'mdi:send'} className={`text-lg sm:text-xl ${isLoading ? 'animate-spin' : ''}`} />
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
  inputRef: PropTypes.object.isRequired
};

export default ChatInput;

