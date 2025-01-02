import React from 'react';
import { FaLaptopCode, FaCloud, FaBrush, FaChartLine, FaCogs, FaUsers } from 'react-icons/fa'; // Importing React Icons
import { motion } from 'framer-motion'; // For animations
import bgImage from '../../assets/stickyly.jpg'; // Import the image from your assets folder

const ServiceSection = () => {
  const services = [
    {
      title: 'Website & App Development',
      description:
        'Bring your ideas to life with custom websites and mobile applications tailored to your business needs and user expectations.',
      icon: <FaLaptopCode className="text-4xl text-teal-400 transition-transform transform group-hover:scale-110" />,
    },
    {
      title: 'Backup & Recovery',
      description:
        'Ensure your data is safe and accessible with our robust backup and recovery solutions designed for businesses of all sizes.',
      icon: <FaCloud className="text-4xl text-purple-400 transition-transform transform group-hover:scale-110" />,
    },
    {
      title: 'Graphics Design & Branding',
      description:
        'Elevate your brand with professional graphic design services, including logos, marketing materials, and complete brand identities.',
      icon: <FaBrush className="text-4xl text-teal-400 transition-transform transform group-hover:scale-110" />,
    },
    {
      title: 'SEO Optimization',
      description:
        'Improve your online visibility and drive traffic to your website with our expert SEO strategies and optimization techniques.',
      icon: <FaChartLine className="text-4xl text-purple-400 transition-transform transform group-hover:scale-110" />,
    },
    {
      title: 'IT Consultancy',
      description:
        'Get expert advice and guidance on leveraging technology to streamline operations, reduce costs, and achieve your goals.',
      icon: <FaCogs className="text-4xl text-teal-400 transition-transform transform group-hover:scale-110" />,
    },
    {
      title: 'Dedicated Support',
      description:
        'Rely on our team for round-the-clock support to ensure your systems run smoothly and efficiently, minimizing downtime.',
      icon: <FaUsers className="text-4xl text-purple-400 transition-transform transform group-hover:scale-110" />,
    },
  ];

  return (
    <div className="relative w-full text-gray-100">
      {/* Service Section Container with Fixed Background */}
      <div
        className="relative w-full h-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Full viewport height
          zIndex: -1,
        }}
      >
        {/* Adding an overlay for dimming and blur effect */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-70 backdrop-blur-xl"
          style={{ zIndex: -1 }} // Ensure the overlay is behind the content
        ></div>

        {/* Service Section Content */}
        <div className="container mx-auto flex flex-col justify-center items-center min-h-screen py-20 relative z-10">
          <motion.h2
            className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group flex flex-col items-center text-center space-y-4 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                {/* Icon */}
                <div>{service.icon}</div>

                {/* Title and Description */}
                <div>
                  <motion.h3
                    className="text-xl font-semibold mb-2 text-gray-100 transition-colors duration-300 group-hover:text-teal-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-100">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
