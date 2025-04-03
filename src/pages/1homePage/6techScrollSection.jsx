import React, { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAngular,
  FaPython,
  FaJava,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiFlutter,
  SiKotlin,
} from 'react-icons/si';

const TechIcon = ({ icon, name }) => (
  <motion.div
    className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 lg:p-6 w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 bg-white rounded-full shadow-md border border-gray-200 hover:scale-110 transition-transform duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center justify-center w-full h-full">{icon}</div>
    <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium mt-2">{name}</p>
  </motion.div>
);

const TechScrollSection = () => {
  const containerRef = useRef(null);
  const scrollSpeed = 0.8;

  const technologies = useMemo(
    () => [
      { name: 'React', icon: <FaReact className="text-2xl sm:text-3xl text-blue-500" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-2xl sm:text-3xl text-green-500" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-2xl sm:text-3xl text-teal-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-2xl sm:text-3xl text-green-600" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="text-2xl sm:text-3xl text-yellow-500" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-2xl sm:text-3xl text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-2xl sm:text-3xl text-blue-600" /> },
      { name: 'Angular', icon: <FaAngular className="text-2xl sm:text-3xl text-red-500" /> },
      { name: 'Python', icon: <FaPython className="text-2xl sm:text-3xl text-green-500" /> },
      { name: 'Java', icon: <FaJava className="text-2xl sm:text-3xl text-orange-600" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-2xl sm:text-3xl text-gray-800" /> },
      { name: 'Flutter', icon: <SiFlutter className="text-2xl sm:text-3xl text-blue-400" /> },
      { name: 'Kotlin', icon: <SiKotlin className="text-2xl sm:text-3xl text-purple-500" /> },
    ],
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    let scrollPosition = 0;

    const scrollIcons = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }

      container.style.transform = `translateX(-${scrollPosition}px)`;
    };

    const interval = setInterval(scrollIcons, 10);

    return () => clearInterval(interval);
  }, [scrollSpeed]);

  return (
    <div className="bg-gradient-to-r from-[var(--color-accent-100)] to-[var(--color-accent-200)] h-auto py-12 sm:py-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full text-center mb-8 md:mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-primary-500)] tracking-wide">
          Our Technology Stack
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--color-primary-300)]">
          Technologies we leverage to build robust and scalable solutions.
        </p>
      </div>

      <div className="w-full flex justify-center px-4">
        <div
          ref={containerRef}
          className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10"
        >
          {technologies.map((tech, index) => (
            <TechIcon key={index} icon={tech.icon} name={tech.name} />
          ))}
          {technologies.map((tech, index) => (
            <TechIcon key={index + technologies.length} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechScrollSection;