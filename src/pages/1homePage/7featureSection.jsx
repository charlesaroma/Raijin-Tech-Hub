import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const TechExplorationSection = () => {
  const [activeTech, setActiveTech] = useState(null);

  const { ref: aiRef, inView: aiInView } = useInView({ triggerOnce: true });
  const { ref: blockchainRef, inView: blockchainInView } = useInView({ triggerOnce: true });
  const { ref: cloudRef, inView: cloudInView } = useInView({ triggerOnce: true });

  const techItems = [
    {
      title: "Artificial Intelligence",
      icon: "💻", // Use SVG or icon here
      description:
        "AI is transforming industries with automation, intelligent systems, and machine learning.",
      bgColor: "from-blue-500 to-indigo-600",
      animationClass: aiInView ? "animate-appear" : "",
      ref: aiRef,
    },
    {
      title: "Blockchain",
      icon: "🔗", // Use SVG or icon here
      description:
        "Blockchain offers decentralized solutions with transparency and security.",
      bgColor: "from-green-500 to-teal-600",
      animationClass: blockchainInView ? "animate-appear" : "",
      ref: blockchainRef,
    },
    {
      title: "Cloud Computing",
      icon: "☁️", // Use SVG or icon here
      description:
        "Cloud computing enables flexible, scalable, and on-demand access to computing resources.",
      bgColor: "from-pink-500 to-purple-600",
      animationClass: cloudInView ? "animate-appear" : "",
      ref: cloudRef,
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="exploration">
      <div className="container mx-auto text-center px-6 sm:px-8 lg:px-16">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore the Future of Technology
        </motion.h2>

        {/* Tech Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techItems.map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-xl transition-all transform hover:scale-105 bg-gradient-to-r ${item.bgColor} ${item.animationClass}`}
              ref={item.ref}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <motion.h3
                className="text-xl font-semibold text-white mb-2"
                initial={{ opacity: 0 }}
                animate={item.animationClass ? { opacity: 1 } : {}}
                transition={{ duration: 1 }}
              >
                {item.title}
              </motion.h3>
              <p className="text-sm text-white">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* SVG Morphing Effect on Scroll */}
        <div className="mt-12 relative">
          <motion.div
            className={`transition-all transform ${activeTech ? "scale-150" : "scale-100"} duration-1000 ease-in-out`}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTech ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="mx-auto w-24 h-24"
            >
              <circle cx="50" cy="50" r="40" className="fill-blue-500" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTech ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-white">Scroll to explore more</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechExplorationSection;
