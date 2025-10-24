import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const GridSection = ({ filteredCases, cardsRef, openCaseStudy }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {filteredCases && filteredCases.length > 0 ? (
        filteredCases.map((caseStudy, index) => (
          <motion.div
            key={`${caseStudy.industry}-${caseStudy.id}`}
            ref={(el) => {
              if (cardsRef.current) {
                cardsRef.current[index] = el;
              }
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
          >
          <div className="relative h-full rounded-3xl overflow-hidden bg-[var(--color-bg-card)] transition-all duration-300 shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)] hover:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] hover:translate-y-1 cursor-pointer">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Industry Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-[var(--color-primary-500)] text-white rounded-full text-xs font-semibold flex items-center gap-2">
                  <Icon icon="mdi:factory" className="text-sm" />
                  {caseStudy.industry}
                </span>
              </div>

              {/* Year Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1.5 bg-white/90 text-[var(--color-primary-600)] rounded-full text-xs font-semibold">
                  {caseStudy.year}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              {/* Client & Duration */}
              <div className="flex items-center gap-4 mb-4 text-xs text-[var(--color-primary-600)]">
                <span className="font-semibold">{caseStudy.client}</span>
                <span className="flex items-center gap-1">
                  <Icon icon="mdi:clock" className="text-sm" />
                  {caseStudy.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base lg:text-lg font-bold text-[var(--color-primary-600)] mb-4">
                {caseStudy.title}
              </h3>

              {/* Challenge Preview */}
              <p className="text-xs text-[var(--color-primary-600)] mb-4 line-clamp-3">
                {caseStudy.challenge}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudy.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full text-[10px] font-medium flex items-center gap-1 shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]"
                  >
                    <Icon icon="mdi:laptop-account" className="text-xs" />
                    {tech}
                  </span>
                ))}
                {caseStudy.technologies.length > 4 && (
                  <span className="px-2 py-1 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full text-[10px] font-medium shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]">
                    +{caseStudy.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* View Case Study Button */}
              <button
                onClick={() => openCaseStudy(caseStudy)}
                className="group/btn w-full px-5 py-2.5 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)] hover:translate-y-0.5 active:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]"
              >
                <span>View Full Case Study</span>
                <Icon icon="mdi:arrow-right" className="text-sm group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      ))
      ) : (
        // No Case Studies Available
        <div className="col-span-full text-center py-20">
          <Icon icon="mdi:folder-open" className="text-6xl text-[var(--color-primary-500)]/30 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[var(--color-primary-600)] mb-2">
            No projects available
          </h3>
          <p className="text-[var(--color-primary-600)] text-sm">
            Please select a different category
          </p>
        </div>
      )}
    </div>
  );
};

GridSection.propTypes = {
  filteredCases: PropTypes.array.isRequired,
  cardsRef: PropTypes.object.isRequired,
  openCaseStudy: PropTypes.func.isRequired
};

export default GridSection;

