import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Lottie animation import
import { motion } from "framer-motion"; // Framer Motion for text animations
import { Link } from "react-router-dom"; // React Router Link import
import Typical from "react-typical"; // Import Typical for the typing effect

const HeroSection = () => {
  return (
    <section className="relative w-full lg:h-[90vh]" >
      <div className="flex flex-col-reverse lg:flex-row w-full h-full pb-8 lg:pb-0 px-6 lg:px-16 items-center justify-center lg:justify-between">
        
        {/* Left Section: Text Content, CTA */}
        <div className="space-y-4 lg:space-y-8 max-w-lg text-center lg:text-left">
          {/* Main Title Animation */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Empowering Your Digital Future with Innovation
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl font-normal text-neutral-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Raijin Tech Hub is committed to crafting state-of-the-art digital solutions tailored to drive your business forward. From custom software to IT consultancy, we deliver results that matter.
          </motion.p>

          {/* Services List with Typing Effect */}
          <div className="space-y-4">
            <div className="lg:text-left lg:text-lg font-medium lg:font-bold italicize text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-teal-600">
              <Typical
                steps={[
                  "Custom Software & Web Development",
                  1500,
                  "IT Consultancy & Strategy",
                  1500,
                  "Cloud Solutions & Migration",
                  1500,
                  "UI/UX Design & Development",
                  1500,
                  "Digital Transformation & Automation",
                  1500,
                ]}
                loop={Infinity}
                wrapper="div"
              />
            </div>
          </div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link
              to="/services"
              className="bg-gradient-to-r from-teal-500 to-purple-600 text-white py-3 px-6 rounded-md text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              Discover Our Expertise
            </Link>
          </motion.div>
        </div>

        {/* Right Section: Lottie Animation */}
        <div className="flex justify-center items-center lg:mt-0 lg:w-1/2">
          <DotLottieReact
            src="https://lottie.host/07ea4a48-0e54-490e-bcdc-2f7008d24869/bfTKdQ0l9b.json" // Lottie file
            loop
            autoplay
            className="w-full max-w-[400px] lg:max-w-[900px] h-auto lg:h-[700px] object-contain" // Make height responsive
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
