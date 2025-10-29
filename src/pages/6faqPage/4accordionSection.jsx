import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import faqData from '../../data/faqData.json';

const iconMap = {
  FaQuestionCircle: <Icon icon="mdi:help-circle" className="text-3xl" />,
  FaCogs: <Icon icon="mdi:cog-outline" className="text-3xl" />,
  FaProjectDiagram: <Icon icon="mdi:file-tree" className="text-3xl" />,
  FaMoneyBillWave: <Icon icon="mdi:currency-usd" className="text-3xl" />,
  FaHeadset: <Icon icon="mdi:headset" className="text-3xl" />,
};

const AccordionSection = ({ 
  activeCategory, 
  setActiveCategory, 
  searchQuery, 
  filteredQuestions, 
  openQuestions, 
  toggleQuestion,
  expandAll,
  collapseAll,
  questionsRef
}) => {
  return (
    <>
      {/* Category Tabs */}
      {!searchQuery && (
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {faqData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]'
                    : 'bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]'
                }`}
              >
                {iconMap[category.icon]}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Expand/Collapse All Buttons */}
      <div className="flex justify-end gap-3 mb-6">
        <button
          onClick={expandAll}
          className="px-4 py-2 text-sm text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)] transition-colors cursor-pointer"
        >
          Expand All
        </button>
        <button
          onClick={collapseAll}
          className="px-4 py-2 text-sm text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)] transition-colors cursor-pointer"
        >
          Collapse All
        </button>
      </div>

      {/* Questions Accordion */}
      <div className="space-y-4">
        {filteredQuestions && filteredQuestions.length > 0 ? (
          filteredQuestions.map((question, index) => (
            <motion.div
              key={`${question.categoryId}-${question.id}`}
              ref={(el) => {
                if (questionsRef.current) {
                  questionsRef.current[index] = el;
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-2xl bg-[var(--color-bg-card)] transition-all duration-300 overflow-hidden shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_12px_var(--shadow-dark),-4px_-4px_12px_var(--shadow-light)]"
            >
            {/* Question Header */}
            <button
              onClick={() => toggleQuestion(question.id)}
              className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-primary)] flex items-center justify-center flex-shrink-0 shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)] transition-all">
                  <Icon icon="mdi:help-circle" className="text-[var(--color-primary-500)] text-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm lg:text-base font-bold text-[var(--color-primary-600)] pr-4">
                    {question.question}
                  </h3>
                  {searchQuery && (
                    <span className="inline-block mt-2 px-3 py-1 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full text-sm shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]">
                      {question.categoryName}
                    </span>
                  )}
                </div>
              </div>
              <motion.div
                animate={{ rotate: openQuestions.has(question.id) ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <Icon icon="mdi:chevron-down" className="text-[var(--color-primary-500)] text-xl" />
              </motion.div>
            </button>

            {/* Answer Content */}
            <AnimatePresence>
              {openQuestions.has(question.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pl-20">
                    <div className="border-l-4 border-[var(--color-primary-500)] pl-6 py-4 bg-[var(--color-bg-primary)] rounded-r-lg">
                      <p className="text-[var(--color-primary-600)] text-sm leading-relaxed">
                        {question.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))
        ) : (
          // No Questions Available
          <div className="text-center py-20">
            <Icon icon="mdi:help-circle" className="text-6xl text-[var(--color-primary-500)]/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[var(--color-primary-600)] mb-2">
              No questions available
            </h3>
            <p className="text-[var(--color-primary-600)] text-sm">
              Please select a category or try searching
            </p>
          </div>
        )}
      </div>

      {/* No Results for Search */}
      {searchQuery && filteredQuestions.length === 0 && (
        <div className="text-center py-20">
          <Icon icon="mdi:magnify" className="text-6xl text-[var(--color-primary-500)]/30 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[var(--color-primary-600)] mb-2">
            No results found
          </h3>
          <p className="text-[var(--color-primary-600)] text-sm">
            Try searching with different keywords or browse our categories
          </p>
        </div>
      )}
    </>
  );
};

AccordionSection.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  filteredQuestions: PropTypes.array.isRequired,
  openQuestions: PropTypes.instanceOf(Set).isRequired,
  toggleQuestion: PropTypes.func.isRequired,
  expandAll: PropTypes.func.isRequired,
  collapseAll: PropTypes.func.isRequired,
  questionsRef: PropTypes.object.isRequired
};

export default AccordionSection;

