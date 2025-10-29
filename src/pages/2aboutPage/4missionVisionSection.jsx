import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const MissionVisionSection = () => {
  const items = [
    {
      icon: "mdi:rocket-launch",
      title: "Our Vision",
      description: "To be a global leader in providing innovative and sustainable digital solutions that empower businesses and industries, shaping a smarter and more efficient future.",
      delay: 0
    },
    {
      icon: "mdi:eye",
      title: "Our Mission",
      description: "To deliver cutting-edge technology solutions with excellence in software development, consultancy, and digital transformation, enabling businesses to thrive in the digital age.",
      delay: 0.1
    },
    {
      icon: "mdi:bullseye-arrow",
      title: "Our Goal",
      description: "To drive business growth through tailored software solutions, foster customer engagement, and lead digital transformation initiatives that ensure measurable results.",
      delay: 0.2
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: item.delay }}
          className="group relative rounded-3xl p-8 bg-[var(--color-bg-card)] transition-all duration-300 cursor-pointer shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)] hover:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] hover:translate-y-1"
        >
          <div className="w-16 h-16 bg-[var(--color-bg-primary)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]">
            <Icon icon={item.icon} className="text-3xl text-[var(--color-primary-500)]" />
          </div>
          <h3 className="text-lg font-bold text-[var(--color-primary-600)] mb-4">{item.title}</h3>
          <p className="text-[var(--color-primary-600)] text-xs leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default MissionVisionSection;

