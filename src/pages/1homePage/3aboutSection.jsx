import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Section: Lottie Animation */}
        <div className="flex justify-center lg:w-1/2 w-full">
          <DotLottieReact
            src="https://lottie.host/2d08889e-95bb-41c7-9288-01be6adbf898/FnwkailNBV.lottie"
            loop
            autoplay
            className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] h-auto"
          />
        </div>
        
        {/* Right Section: Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          {/* Main Heading with consistent style */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-500)] mb-4 relative px-2">
              About Us
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent"></div>
            </h2>
          </motion.div>
          
          {/* Sub Heading */}
          <motion.h3
            className="text-xl sm:text-2xl font-semibold text-[var(--color-primary-500)] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transforming Ideas into Action with Speed and Precision
          </motion.h3>

          {/* Description Paragraph */}
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-[var(--color-primary-500)]/80 dark:text-[var(--color-primary-400)]/80 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Raijin Tech Hub, we specialize in providing fast, efficient, and cutting-edge technology solutions designed to drive your business forward. Whether it&apos;s custom software development, IT consultancy, or digital transformation, we deliver results that are fast and impactful, ensuring you stay ahead in an ever-evolving digital landscape.
          </motion.p>

          {/* Learn More Button */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#learn-more"
              className="inline-block bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-700)] text-white py-3 px-6 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
