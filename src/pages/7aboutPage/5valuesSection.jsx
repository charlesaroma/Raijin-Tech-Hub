import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const ValuesSection = () => {
  const values = [
    {
      icon: "mdi:lightbulb-on",
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead in the digital landscape.'
    },
    {
      icon: "mdi:heart",
      title: 'Integrity',
      description: 'Honesty and transparency guide every decision we make and every relationship we build.'
    },
    {
      icon: "mdi:account-group",
      title: 'Collaboration',
      description: 'We work closely with clients and team members to achieve shared success and goals.'
    },
    {
      icon: "mdi:handshake",
      title: 'Customer-First',
      description: 'Your success is our priority. We deliver solutions that exceed expectations and drive results.'
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
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="text-center p-6 rounded-2xl bg-[var(--color-bg-card)] transition-all duration-300 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_12px_var(--shadow-dark),-4px_-4px_12px_var(--shadow-light)] hover:translate-y-1"
          >
            <div className="text-[var(--color-primary-500)] mb-4 flex justify-center">
              <Icon icon={value.icon} className="text-4xl" />
            </div>
            <h4 className="text-base font-bold text-[var(--color-primary-600)] mb-3">
              {value.title}
            </h4>
            <p className="text-xs text-[var(--color-primary-600)]">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ValuesSection;

