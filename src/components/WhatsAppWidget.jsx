import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackContact } from '../utils/analytics';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = '256777982066'; // Your WhatsApp Business number
  const defaultMessage = 'Hello! I would like to inquire about your services.';

  // Show widget after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackContact('WhatsApp Widget');
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Chat Popup */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-green-500/20"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <Icon icon="mdi:whatsapp" className="text-xl text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Raijin Tech Hub</h4>
                      <p className="text-white/80 text-[10px]">Typically replies instantly</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleOpen}
                    className="text-white hover:bg-white/20 p-1 rounded-full transition-colors cursor-pointer"
                  >
                    <Icon icon="mdi:close" className="text-sm" />
                  </button>
                </div>

                {/* Message Body */}
                <div className="p-3 bg-[#ECE5DD]">
                  <div className="bg-white rounded-lg rounded-tl-none p-2.5 shadow-sm mb-3">
                    <p className="text-xs text-gray-700 mb-1">
                      👋 Hello! Welcome to Raijin Tech Hub.
                    </p>
                    <p className="text-xs text-gray-700">
                      How can we help you today? Click below to start a conversation on WhatsApp.
                    </p>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-1.5">
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-2 text-left text-xs text-gray-700 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>💼</span>
                      <span>Request a Quote</span>
                    </button>
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-2 text-left text-xs text-gray-700 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>💬</span>
                      <span>General Inquiry</span>
                    </button>
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-2 text-left text-xs text-gray-700 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>🛠️</span>
                      <span>Technical Support</span>
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-white p-2.5 border-t border-gray-200">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-3 rounded-lg text-xs font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    <Icon icon="mdi:whatsapp" className="text-base" />
                    <span>Start Chat on WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            onClick={toggleOpen}
            className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group cursor-pointer"
            aria-label="Open WhatsApp chat"
          >
            {/* Pulse Animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            
            {/* Icon */}
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isOpen ? (
                <Icon icon="mdi:close" className="text-xl" />
              ) : (
                <Icon icon="mdi:whatsapp" className="text-2xl" />
              )}
            </motion.div>

            {/* Notification Badge */}
            {!isOpen && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold animate-bounce">
                1
              </span>
            )}
          </motion.button>

          {/* Tooltip */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap shadow-lg hidden lg:block"
            >
              Chat with us on WhatsApp!
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppWidget;

