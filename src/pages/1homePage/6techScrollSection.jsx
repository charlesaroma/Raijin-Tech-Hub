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
    className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white shadow-lg rounded-full border-4 border-gray-200 transform hover:scale-110 transition-all duration-300"
  >
    {icon}
    <p className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg font-semibold mt-3">{name}</p>
  </motion.div>
);

const TechScrollSection = () => {
  const containerRef = useRef(null);
  const scrollSpeed = 1.2; // Adjust speed as necessary

  const technologies = useMemo(
    () => [
      { name: 'React', icon: <FaReact className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-500" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-green-500" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-teal-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-green-600" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-500" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-600" /> },
      { name: 'Angular', icon: <FaAngular className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500" /> },
      { name: 'Python', icon: <FaPython className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-green-500" /> },
      { name: 'Java', icon: <FaJava className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-orange-600" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800" /> },
      { name: 'Flutter', icon: <SiFlutter className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-400" /> },
      { name: 'Kotlin', icon: <SiKotlin className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-purple-500" /> },
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
    <div className="bg-gray-100 h-[40vh] lg:py-16 lg:h-[50vh] flex items-center justify-center relative overflow-hidden">
      <h2 className="absolute top-6 text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl z-10 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-8">
        Technologies We Love
      </h2>

      <div
        ref={containerRef}
        className="absolute flex items-center space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-16 py-16"
      >
        {technologies.map((tech, index) => (
          <TechIcon key={index} icon={tech.icon} name={tech.name} />
        ))}
        {technologies.map((tech, index) => (
          <TechIcon key={index + technologies.length} icon={tech.icon} name={tech.name} />
        ))}
      </div>
    </div>
  );
};

export default TechScrollSection;
