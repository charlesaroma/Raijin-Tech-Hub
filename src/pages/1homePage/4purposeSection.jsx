import { useRef } from 'react';
import { FaRocket, FaHandshake, FaLightbulb, FaUsers, FaBullseye, FaStar } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const PurposeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const values = [
    {
      title: 'Vision',
      description:
        'To be a global leader in providing innovative and sustainable digital solutions that empower businesses and industries, shaping a smarter and more efficient future.',
      icon: <FaRocket className="text-4xl text-teal-600" />,
    },
    {
      title: 'Mission',
      description:
        'To deliver cutting-edge technology solutions with excellence in software development, consultancy, and digital transformation, enabling businesses to thrive.',
      icon: <FaHandshake className="text-4xl text-purple-600" />,
    },
    {
      title: 'Objectives',
      description:
        'To drive business growth through tailored software solutions, foster customer engagement, and lead digital transformation initiatives that ensure measurable results.',
      icon: <FaLightbulb className="text-4xl text-teal-600" />,
    },
    {
      title: 'Core Values',
      description:
        'We embrace integrity, innovation, collaboration, customer-first mindset, and continuous improvement in all our projects and partnerships.',
      icon: <FaUsers className="text-4xl text-purple-600" />,
    },
    {
      title: 'Strategic Goals',
      description:
        'To expand into new markets, enhance operational efficiency, and continuously innovate our services to maintain competitive advantage.',
      icon: <FaBullseye className="text-4xl text-teal-600" />,
    },
    {
      title: 'Unique Strengths',
      description:
        'Our expertise in emerging technologies, customer-centric approach, and commitment to sustainability set us apart in the industry.',
      icon: <FaStar className="text-4xl text-purple-600" />,
    },
  ];

  return (
    <div className="bg-white py-12" ref={ref}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 text-center py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent shadow-sm"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.1)' }} // Fallback for devices
        >
          Our Purpose & Values
        </motion.h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 * index }}
            >
              <div className="mb-4">{item.icon}</div>
              <motion.h3
                className="text-xl sm:text-2xl font-bold text-gray-900 md:mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {item.title}
              </motion.h3>
              <p className="text-gray-800 text-sm sm:text-base text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurposeSection;
