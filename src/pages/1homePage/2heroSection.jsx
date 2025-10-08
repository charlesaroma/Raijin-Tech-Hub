import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Lottie animation import
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion for text animations
import { Link } from "react-router-dom"; // React Router Link import

const HeroSection = () => {
  const services = [
    "Custom Software & Web Development",
    "IT Consultancy & Strategy",
    "Cloud Solutions & Migration",
    "UI/UX Design & Development",
    "Digital Transformation & Automation",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="relative w-full h-[calc(100vh-10vh)] md:h-full px-4 md:px-6 lg:px-[5%] bg-[var(--color-accent-300)]">
      <div className="flex flex-col-reverse lg:flex-row w-full h-full pb-8 lg:pb-0 items-center justify-center lg:justify-between">
        
        {/* Left Section: Text Content, CTA */}
        <div className="space-y-4 lg:space-y-8 max-w-lg text-center lg:text-left">
          {/* Main Title Animation */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-primary-600)]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Empowering Your Digital Future with Innovation
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl font-normal text-[var(--color-primary-500)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Raijin Tech Hub is committed to crafting state-of-the-art digital solutions tailored to drive your business forward. From custom software to IT consultancy, we deliver results that matter.
          </motion.p>

          {/* Services List with Typing Effect */}
          <div className="space-y-4 h-16 flex items-center justify-center lg:justify-start">
            <div className="lg:text-left lg:text-lg font-medium lg:font-bold italic text-[var(--color-primary-400)] text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {services[currentIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link
              to="/discover"
              className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-700)] text-white py-3 px-6 rounded-md text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              Discover Our Expertise
            </Link>
          </motion.div>
        </div>

        {/* Right Section: Lottie Animation */}
        <div className="flex justify-center items-center lg:mt-0 lg:w-1/2">
          <DotLottieReact
            src="https://lottie.host/07f46691-757c-4dcb-8638-530f7f8182d4/JMJkROXuyl.lottie"
            loop
            autoplay
            className="w-full max-w-[800px] md:max-w-[600px] lg:max-w-[900px] h-auto lg:h-[700px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
