import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="w-full bg-transparent py-8 sm:py-12 lg:py-16" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        
        {/* Left Section: Lottie Animation */}
        <div className="flex justify-center lg:w-1/2 w-full">
          <DotLottieReact
            src="https://lottie.host/2d08889e-95bb-41c7-9288-01be6adbf898/FnwkailNBV.lottie"
            loop
            autoplay
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
          />
        </div>
        
        {/* Right Section: Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          {/* Main Heading with consistent style */}
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary-600)] mb-3 relative px-2">
              About Us
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent"></div>
            </h2>
          </motion.div>
          
          {/* Sub Heading */}
          <motion.h3
            className="text-sm sm:text-base font-semibold text-[var(--color-primary-600)] mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transforming Ideas into Action with Speed and Precision
          </motion.h3>

          {/* Description Paragraph */}
          <motion.p
            className="text-sm sm:text-sm text-[var(--color-primary-600)] leading-relaxed mb-5"
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
            <Link
              to="/about"
              className="inline-block bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] py-2 px-5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:translate-y-0.5 active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
