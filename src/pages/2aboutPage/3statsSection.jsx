import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { counterAnimation } from '../../utils/gsapAnimations';

const StatsSection = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    // Counter animation for stats
    const statValues = [10, 5, 95, 2]; // Values for each stat
    if (statsRef.current.length > 0) {
      statsRef.current.forEach((el, index) => {
        const countElement = el.querySelector('.count-number');
        if (countElement) {
          counterAnimation(countElement, statValues[index], 2);
        }
      });
    }
  }, []);

  const stats = [
    { label: 'Projects Delivered', suffix: '+', value: 10 },
    { label: 'Industries Served', suffix: '+', value: 5 },
    { label: 'Client Retention', suffix: '%', value: 95 },
    { label: 'Years Experience', suffix: '+', value: 2 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
    >
      {stats.map((stat, index) => (
        <div 
          key={index} 
          ref={(el) => (statsRef.current[index] = el)} 
          className="text-center p-6 rounded-2xl bg-[var(--color-bg-card)] transition-all duration-300 shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_12px_var(--shadow-dark),-4px_-4px_12px_var(--shadow-light)]"
        >
          <div className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-600)] mb-2">
            <span className="count-number">{stat.value}</span>
            {stat.suffix}
          </div>
          <div className="text-xs text-[var(--color-primary-600)] font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default StatsSection;

