import { motion } from 'framer-motion';

const TimelineSection = () => {
  const timeline = [
    {
      year: 'Q1 2024',
      title: 'Foundation & Vision',
      description: 'Raijin Tech Hub was officially registered in December 2024 with a bold vision to become East Africa\'s premier technology solutions provider, committed to delivering excellence in software development and IT services.'
    },
    {
      year: 'Q2 2025',
      title: 'Strategic Partnerships',
      description: 'Established key partnerships and delivered our first enterprise solutions, including licensed software supply to educational institutions and custom web applications for creative industries.'
    },
    {
      year: 'Q3 2025',
      title: 'Service Innovation',
      description: 'Expanded our portfolio to offer comprehensive IT solutions including custom software development, enterprise web applications, IT consultancy, and hardware solutions, serving diverse industry sectors.'
    },
    {
      year: 'Q4 2025',
      title: 'AI Integration Launch',
      description: 'Launched Raijin AI, our innovative AI-powered chatbot assistant, marking our entry into cutting-edge AI integration services and establishing ourselves as Uganda\'s leading AI solutions provider.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-12 sm:mb-16 md:mb-20 px-3 sm:px-4"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-primary-600)] text-center mb-8 sm:mb-10 md:mb-12">
        Our Journey
      </h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line - Adjusted for mobile */}
        <div className="absolute left-4 sm:left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 h-full w-0.5 sm:w-1 bg-[var(--color-primary-500)]/20"></div>

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center mb-8 sm:mb-10 md:mb-12 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Content Card */}
            <div className={`w-full md:w-5/12 pl-10 sm:pl-14 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[var(--color-bg-card)] transition-all duration-300 cursor-pointer shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] sm:shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_12px_var(--shadow-dark),-4px_-4px_12px_var(--shadow-light)] hover:translate-y-1">
                <div className="text-sm sm:text-base font-bold text-[var(--color-primary-500)] mb-1.5 sm:mb-2">
                  {item.year}
                </div>
                <h4 className="text-sm sm:text-sm font-bold text-[var(--color-primary-600)] mb-1.5 sm:mb-2">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-sm leading-relaxed text-[var(--color-primary-600)]">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Timeline Dot - Adjusted for mobile */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[var(--color-primary-500)] rounded-full border-2 sm:border-3 md:border-4 border-[var(--color-bg-primary)] shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TimelineSection;

