import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { QUICK_REPLIES } from '../../utils/geminiAI';

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

export default QuickReplies;

