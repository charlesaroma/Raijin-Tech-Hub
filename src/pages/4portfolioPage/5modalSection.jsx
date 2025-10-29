import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const ModalSection = ({ selectedCase, closeCaseStudy }) => {
  if (!selectedCase) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[var(--color-bg-card)] rounded-3xl shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={closeCaseStudy}
          className="sticky top-4 right-4 float-right z-10 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg cursor-pointer"
        >
          <Icon icon="mdi:close" className="text-lg" />
        </button>

        {/* Modal Content */}
        <div className="p-8 lg:p-12">
          {/* Header Image */}
          <div className="relative h-80 rounded-2xl overflow-hidden mb-8">
            <img
              src={selectedCase.image}
              alt={selectedCase.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="px-4 py-2 bg-[var(--color-primary-500)] text-white rounded-full text-sm font-semibold">
                {selectedCase.industry}
              </span>
            </div>
          </div>

          {/* Title & Client Info */}
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-600)] mb-4">
              {selectedCase.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-xs text-[var(--color-primary-600)]">
              <span className="font-semibold">Client: {selectedCase.client}</span>
              <span>•</span>
              <span>Duration: {selectedCase.duration}</span>
              <span>•</span>
              <span>Year: {selectedCase.year}</span>
            </div>
          </div>

          {/* Challenge */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[var(--color-primary-600)] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[var(--color-primary-500)]"></span>
              The Challenge
            </h3>
            <p className="text-sm text-[var(--color-primary-600)] leading-relaxed">
              {selectedCase.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[var(--color-primary-600)] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[var(--color-primary-500)]"></span>
              Our Solution
            </h3>
            <p className="text-sm text-[var(--color-primary-600)] leading-relaxed">
              {selectedCase.solution}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[var(--color-primary-600)] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[var(--color-primary-500)]"></span>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedCase.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full text-xs font-medium flex items-center gap-2 shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]"
                >
                  <Icon icon="mdi:laptop-account" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[var(--color-primary-600)] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[var(--color-primary-500)]"></span>
              Results & Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedCase.results.map((result, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-green-50 border-2 border-green-200 rounded-lg"
                >
                  <Icon icon="mdi:check-circle" className="text-green-500 text-lg flex-shrink-0 mt-1" />
                  <span className="text-xs text-[var(--color-primary-600)]">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {selectedCase.testimonial && (
            <div className="bg-gradient-to-r from-[var(--color-primary-500)]/10 to-[var(--color-primary-600)]/10 border-l-4 border-[var(--color-primary-500)] p-6 rounded-r-lg">
              <p className="text-sm text-[var(--color-primary-600)] italic mb-4">
                &quot;{selectedCase.testimonial}&quot;
              </p>
              <p className="text-xs font-semibold text-[var(--color-primary-600)]">
                - {selectedCase.testimonialAuthor}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ModalSection;

