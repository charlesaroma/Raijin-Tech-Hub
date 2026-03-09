import { useState, useEffect, useMemo } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const HeroSection = () => {
  const services = useMemo(
    () => [
      "Custom Software & Web Development",
      "IT Consultancy & Strategy",
      "AI Integration & Chatbot Solutions",
      "UI/UX Design & Development",
      "Digital Transformation & Automation",
    ],
    [],
  );

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
        <div className="absolute top-20 -left-20 w-72 h-72 bg-(--color-primary-500)/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-(--color-primary-600)/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-(--color-primary-500)/30 rounded-full animate-float"></div>
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-(--color-primary-500)/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-(--color-primary-500)/25 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-y-(--color-primary-500)/30 bg-(--color-primary-500)/5 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium text-(--color-off-black-500)">
              Transforming Ideas into Digital Reality
            </span>
          </motion.div>

          {/* Main Title with Gradient */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-linear-to-r from-(--color-primary-500) to-(--color-primary-800) bg-clip-text text-transparent">
              Empowering Your
            </span>
            <br />
            <span className="text-(--color-secondary-500)">Digital Future</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xs sm:text-sm md:text-base font-normal text-(--color-primary-500)/80 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Raijin Tech Hub crafts state-of-the-art digital solutions that drive
            innovation and accelerate growth. From custom software to IT
            consultancy, we deliver excellence that transforms businesses.
          </motion.p>

          {/* Services List with Enhanced Design */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 min-h-[50px]">

              <div className="flex-1 max-w-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm lg:text-base font-bold text-(--color-primary-600)"
                  >
                    {services[currentIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <Link
              to="/service"
              className="px-8 py-4 bg-(--color-secondary-500) text-(--color-white-50) rounded-full font-bold text-sm transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-lg hover:bg-(--color-secondary-600) hover:shadow-secondary-500/25 hover:-translate-y-1 active:translate-y-0"
            >
              <span>Explore Our Expertise</span>
              <Icon icon="mdi:rocket-launch" className="text-lg" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-(--color-primary-500) border-2 border-(--color-primary-500) rounded-full font-bold text-sm transition-all duration-300 inline-flex items-center gap-2 cursor-pointer hover:bg-(--color-primary-500) hover:text-(--color-white-50) hover:-translate-y-1 active:translate-y-0"
            >
              <span className="relative z-10">Get in Touch</span>
              <Icon icon="mdi:message-text-outline" className="text-lg" />
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
          {/* Decorative Elements - Rotating Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer Rotating Ring */}
            <div
              className="absolute w-full h-full max-w-[500px] max-h-[500px] md:max-w-[600px] md:max-h-[600px] lg:max-w-[700px] lg:max-h-[700px] border-2 border-(--color-primary-500)/10 rounded-full animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>

            {/* Inner Rotating Ring */}
            <div
              className="absolute w-[90%] h-[90%] max-w-[450px] max-h-[450px] md:max-w-[540px] md:max-h-[540px] lg:max-w-[630px] lg:max-h-[630px] border-2 border-(--color-secondary-500)/10 rounded-full animate-spin"
              style={{
                animationDuration: "30s",
                animationDirection: "reverse",
              }}
            ></div>

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-(--color-secondary-500)/20 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-(--color-secondary-500)/20 rounded-bl-3xl"></div>
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
