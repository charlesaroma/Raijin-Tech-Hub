import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  initializeChat, 
  sendMessage, 
  shouldOfferWhatsAppHandoff,
  formatConversationSummary 
} from '../../utils/geminiAI';
import { trackContact } from '../../utils/analytics';
import ChatHeader from './ChatHeader';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import QuickReplies from './QuickReplies';
import ChatInput from './ChatInput';
import FloatingButton from './FloatingButton';

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

export default AIChatWidget;

