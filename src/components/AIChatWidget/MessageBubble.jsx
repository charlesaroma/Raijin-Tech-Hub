import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MessageBubble = ({ message, onWhatsAppClick }) => {
  const isUser = message.role === 'user';
  const isError = message.isError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[90%] sm:max-w-[85%] ${isUser ? 'order-2' : 'order-1'}`}>
        <div
          className={`rounded-2xl p-2.5 sm:p-3 ${
            isUser
              ? 'bg-[var(--color-primary-500)] text-white rounded-br-none'
              : isError
              ? 'bg-red-50 text-red-700 rounded-bl-none border border-red-200'
              : 'bg-white text-gray-800 rounded-bl-none shadow-md border border-gray-100'
          }`}
        >
          <div className="text-xs sm:text-sm prose prose-sm max-w-none">
            {isUser ? (
              <p>{message.text}</p>
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.text}
              </ReactMarkdown>
            )}
          </div>
        </div>
        
        {message.showWhatsAppButton && (
          <motion.button
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={onWhatsAppClick}
            className="mt-2 w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-xs py-2 px-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <Icon icon="mdi:whatsapp" className="text-base" />
            <span>Connect on WhatsApp</span>
          </motion.button>
        )}
        
        <p className="text-[10px] text-gray-400 mt-1 px-1">
          {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </motion.div>
  );
};

MessageBubble.propTypes = {
  message: PropTypes.object.isRequired,
  onWhatsAppClick: PropTypes.func.isRequired
};

export default MessageBubble;

