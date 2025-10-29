import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PropTypes from 'prop-types';
import { 
  initializeChat, 
  sendMessage, 
  QUICK_REPLIES,
  shouldOfferWhatsAppHandoff,
  formatConversationSummary 
} from '../utils/geminiAI';
import { trackContact } from '../utils/analytics';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState(null);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [error, setError] = useState(null);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const whatsappNumber = '256777982066';

  // Show widget after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize chat when opened
  useEffect(() => {
    const setupChat = async () => {
      if (isOpen && !chat && messages.length === 0) {
        try {
          const newChat = await initializeChat();
          setChat(newChat);
          
          // Welcome message
          setMessages([{
            role: 'assistant',
            text: '👋 Hello! I\'m Raijin AI, your virtual assistant. How can I help you today?',
            timestamp: new Date()
          }]);
        } catch (err) {
          console.error('Failed to initialize chat:', err);
          setError('Failed to initialize AI. Please check your API key configuration.');
        }
      }
    };
    setupChat();
  }, [isOpen, chat, messages.length]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isLoading) {
      inputRef.current?.focus();
    }
  }, [isOpen, isLoading]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      trackContact('AI Chat Widget Opened');
    }
  };

  const handleSendMessage = async (messageText = inputValue) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      text: messageText.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setShowQuickReplies(false);
    setError(null);

    try {
      const response = await sendMessage(chat, messageText);
      
      const assistantMessage = {
        role: 'assistant',
        text: response,
        timestamp: new Date(),
        showWhatsAppButton: shouldOfferWhatsAppHandoff(messageText) || response.toLowerCase().includes('whatsapp')
      };

      setMessages(prev => [...prev, assistantMessage]);
      trackContact('AI Chat Message Sent');
    } catch (err) {
      console.error('❌ AI Error:', err.message);
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: '❌ Sorry, I encountered an error. Would you like to connect with our team on WhatsApp instead?',
        timestamp: new Date(),
        showWhatsAppButton: true,
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (query) => {
    setInputValue(query);
    handleSendMessage(query);
  };

  const handleWhatsAppHandoff = () => {
    trackContact('WhatsApp Handoff from AI');
    const summary = formatConversationSummary(messages);
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summary)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          {/* Chat Window */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] max-w-[340px] sm:max-w-[380px] md:w-[400px] h-[500px] sm:h-[550px] md:h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col"
              >
                {/* Header */}
                <ChatHeader onClose={toggleOpen} />

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 bg-gradient-to-b from-gray-50 to-white space-y-3">
                  {messages.map((message, index) => (
                    <MessageBubble 
                      key={index} 
                      message={message} 
                      onWhatsAppClick={handleWhatsAppHandoff}
                    />
                  ))}
                  
                  {isLoading && <TypingIndicator />}
                  
                  {error && (
                    <div className="text-center text-xs text-red-500 bg-red-50 p-2 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {showQuickReplies && messages.length === 1 && !isLoading && (
                  <QuickReplies onSelect={handleQuickReply} />
                )}

                {/* Input Area */}
                <ChatInput
                  value={inputValue}
                  onChange={setInputValue}
                  onSend={handleSendMessage}
                  onKeyPress={handleKeyPress}
                  isLoading={isLoading}
                  inputRef={inputRef}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button */}
          <FloatingButton isOpen={isOpen} onClick={toggleOpen} />
        </div>
      )}
    </AnimatePresence>
  );
};

// Chat Header Component
const ChatHeader = ({ onClose }) => (
  <div className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] p-3 sm:p-4 flex items-center justify-between text-white">
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
        <Icon icon="mdi:robot" className="text-lg sm:text-xl text-[var(--color-primary-500)]" />
      </div>
      <div>
        <h4 className="font-bold text-xs sm:text-sm">Raijin AI Assistant</h4>
        <p className="text-[10px] sm:text-xs text-white/80 flex items-center gap-1">
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

// Message Bubble Component
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

// Typing Indicator Component
const TypingIndicator = () => (
  <div className="flex justify-start">
    <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none p-3 shadow-md">
      <div className="flex gap-1">
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: 0.1 }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
        />
      </div>
    </div>
  </div>
);

// Quick Replies Component
const QuickReplies = ({ onSelect }) => (
  <div className="px-3 sm:px-4 pb-2 sm:pb-3 space-y-2">
    <p className="text-[10px] sm:text-xs text-gray-500 mb-1 sm:mb-2">💡 Quick questions:</p>
    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
      {QUICK_REPLIES.map((reply, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelect(reply.query)}
          className="text-[10px] sm:text-xs bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-1.5 sm:p-2 text-left transition-all hover:border-[var(--color-primary-500)] hover:shadow-sm cursor-pointer"
        >
          {reply.text}
        </motion.button>
      ))}
    </div>
  </div>
);

QuickReplies.propTypes = {
  onSelect: PropTypes.func.isRequired
};

// Chat Input Component
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
        className="flex-1 px-3 py-2 sm:px-4 border border-gray-300 rounded-full text-xs sm:text-sm focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-500)]/20 disabled:bg-gray-50 disabled:cursor-not-allowed"
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
    <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1.5 sm:mt-2 text-center">
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

// Floating Button Component
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

export default AIChatWidget;

