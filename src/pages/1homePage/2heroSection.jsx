import { useState, useEffect, useMemo } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const services = useMemo(() => [
    "Custom Software & Web Development",
    "IT Consultancy & Strategy",
    "Cloud Solutions & Migration",
    "UI/UX Design & Development",
    "Digital Transformation & Automation",
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [services]);

  return (
    <section className="relative w-full min-h-screen px-4 md:px-6 lg:px-[5%] bg-transparent overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[var(--color-primary-500)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[var(--color-primary-600)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--color-primary-500)]/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[var(--color-primary-500)]/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-[var(--color-primary-500)]/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Add custom animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      <div className="relative flex flex-col-reverse lg:flex-row w-full min-h-screen pb-8 lg:pb-0 items-center justify-center lg:justify-between gap-8">
        
        {/* Left Section: Text Content, CTA */}
        <div className="space-y-4 lg:space-y-5 max-w-2xl text-center lg:text-left z-10">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-[var(--color-primary-500)]/30 bg-[var(--color-primary-500)]/5 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary-500)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-primary-500)]"></span>
            </span>
            <span className="text-xs font-medium text-[var(--color-primary-600)]">Transforming Ideas into Digital Reality</span>
          </motion.div>

          {/* Main Title with Gradient */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-primary-500)] to-[var(--color-primary-700)] bg-clip-text text-transparent">
              Empowering Your
            </span>
            <br />
            <span className="text-[var(--color-primary-600)]">Digital Future</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xs sm:text-sm md:text-base font-normal text-[var(--color-primary-500)]/80 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Raijin Tech Hub crafts state-of-the-art digital solutions that drive innovation and accelerate growth. From custom software to IT consultancy, we deliver excellence that transforms businesses.
          </motion.p>

          {/* Services List with Enhanced Design */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 min-h-[50px]">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white shadow-lg">
                <span className="text-sm">⚡</span>
              </div>
              <div className="flex-1 max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                    className="text-sm lg:text-base font-bold text-[var(--color-primary-600)]"
                >
                  {services[currentIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 items-center lg:items-start justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <Link
              to="/discover"
              className="group relative px-5 py-2.5 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full font-semibold text-xs transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:translate-y-0.5 active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]"
            >
              <span>Discover Our Expertise</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              to="/contact"
              className="group relative px-5 py-2.5 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full font-semibold text-xs transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:translate-y-0.5 active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]"
            >
              <span className="relative z-10">Get in Touch</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </motion.div>

        </div>

        {/* Right Section: Lottie Animation with Enhanced Container */}
        <motion.div 
          className="relative flex justify-center items-center lg:mt-0 lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Rotating Ring */}
            <div className="absolute w-full h-full max-w-[500px] max-h-[500px] border-2 border-[var(--color-primary-500)]/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute w-[90%] h-[90%] max-w-[450px] max-h-[450px] border-2 border-[var(--color-primary-500)]/5 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[var(--color-primary-500)]/30 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[var(--color-primary-500)]/30 rounded-bl-3xl"></div>
          </div>

          {/* Lottie Animation */}
          <div className="relative z-10">
          <DotLottieReact
            src="https://lottie.host/07f46691-757c-4dcb-8638-530f7f8182d4/JMJkROXuyl.lottie"
            loop
            autoplay
            className="w-full max-w-[800px] md:max-w-[600px] lg:max-w-[900px] h-auto lg:h-[700px] object-contain"
          />
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
