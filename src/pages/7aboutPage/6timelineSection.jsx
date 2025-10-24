import { motion } from 'framer-motion';

const TimelineSection = () => {
  const timeline = [
    {
      year: 'Q1 2024',
      title: 'Company Founded & Registered',
      description: 'Raijin Tech Hub was officially registered and launched with a vision to transform Uganda\'s digital landscape through innovative technology solutions.'
    },
    {
      year: 'Q2 2024',
      title: 'First Major Projects',
      description: 'Secured and delivered key projects including Gulu University licensed software supply, The Artistry360 website, and voting platform development.'
    },
    {
      year: 'Q3 2024',
      title: 'Service Expansion',
      description: 'Expanded service offerings to include computer hardware sales, comprehensive website development, and IT consultancy services across multiple industries.'
    },
    {
      year: 'Q4 2024',
      title: 'Rapid Growth',
      description: 'Successfully delivered 30+ projects across 8 industries, built strong client relationships with 95% retention rate, and established reputation for quality and reliability.'
    },
    {
      year: '2025',
      title: 'Scaling Operations',
      description: 'Focusing on regional expansion, team growth, and launching advanced services including cloud solutions, cybersecurity, and digital transformation consultancy.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-600)] text-center mb-12">
        Our Journey
      </h2>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--color-primary-500)]/20"></div>

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
          >
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}>
              <div className="p-5 rounded-2xl bg-[var(--color-bg-card)] transition-all duration-300 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_12px_var(--shadow-dark),-4px_-4px_12px_var(--shadow-light)] hover:translate-y-1">
                <div className="text-base font-bold text-[var(--color-primary-500)] mb-2">
                  {item.year}
                </div>
                <h4 className="text-sm font-bold text-[var(--color-primary-600)] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--color-primary-600)]">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[var(--color-primary-500)] rounded-full border-4 border-[var(--color-bg-primary)] shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TimelineSection;

