import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AboutSection = () => {
  // Create a reference to the section
  const ref = useRef(null);
  // Check if the section is in view
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="w-full bg-gray-100 py-10 lg:py-0"  ref={ref}>
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Section: Lottie Animation */}
        <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0">
          <DotLottieReact
            src="https://lottie.host/e6218e5d-fda2-4650-a315-8ecad78d7e98/Fppw1HgoQi.lottie" // Lottie file
            loop
            autoplay
            className="w-full max-w-[800px] h-full lg:h-[600px] object-cover"
          />
        </div>
        
        {/* Right Section: Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Main Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            About Us
          </motion.h2>
          
          {/* Sub Heading */}
          <motion.h3
            className="text-xl md:text-2xl font-medium text-gray-700 mt-4"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Transforming Ideas into Action with Speed and Precision
          </motion.h3>

          {/* Description Paragraph */}
          <motion.p
            className="text-base md:text-lg font-light text-gray-600 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            At Raijin Tech Hub, we specialize in providing fast, efficient, and cutting-edge technology solutions designed to drive your business forward. Whether it's custom software development, IT consultancy, or digital transformation, we deliver results that are fast and impactful, ensuring you stay ahead in an ever-evolving digital landscape.
          </motion.p>

          {/* Learn More Button */}
          <motion.div
            className="mt-6 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <a href="#learn-more" className="inline-block bg-gradient-to-r from-teal-500 to-purple-600 text-white py-3 px-6 rounded-md text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
