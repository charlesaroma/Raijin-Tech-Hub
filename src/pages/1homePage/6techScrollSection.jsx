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

// eslint-disable-next-line react/prop-types
const TechIcon = ({ icon, name }) => (
  <motion.div
    className="flex flex-col items-center justify-center py-4 lg:py-10 w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white shadow-lg rounded-full border-4 border-gray-200 transform hover:scale-110 transition-all duration-300"
  >
    <div className="flex items-center justify-center w-full h-full">{icon}</div>
    <p className="text-gray-800 text-sm md:text-base lg:text-lg font-semibold mt-1">{name}</p>
  </motion.div>
);

const TechScrollSection = () => {
  const containerRef = useRef(null);
  const scrollSpeed = 0.8; // Adjust speed as necessary

  const technologies = useMemo(
    () => [
      { name: 'React', icon: <FaReact className="text-4xl md:text-6xl lg:text-7xl text-blue-500" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-4xl md:text-6xl lg:text-7xl text-green-500" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-4xl md:text-6xl lg:text-7xl text-teal-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-4xl md:text-6xl lg:text-7xl text-green-600" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="text-4xl md:text-6xl lg:text-7xl text-yellow-500" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-4xl md:text-6xl lg:text-7xl text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-4xl md:text-6xl lg:text-7xl text-blue-600" /> },
      { name: 'Angular', icon: <FaAngular className="text-4xl md:text-6xl lg:text-7xl text-red-500" /> },
      { name: 'Python', icon: <FaPython className="text-4xl md:text-6xl lg:text-7xl text-green-500" /> },
      { name: 'Java', icon: <FaJava className="text-4xl md:text-6xl lg:text-7xl text-orange-600" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-4xl md:text-6xl lg:text-7xl text-gray-800" /> },
      { name: 'Flutter', icon: <SiFlutter className="text-4xl md:text-6xl lg:text-7xl text-blue-400" /> },
      { name: 'Kotlin', icon: <SiKotlin className="text-4xl md:text-6xl lg:text-7xl text-purple-500" /> },
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
    <div className="bg-gray-100 h-auto py-10 md:py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* First div for heading */}
      <div className="w-full text-center mb-8">
        <h2 className="text-3xl lg:text-4xl text-center md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
          Technologies We Love
        </h2>
      </div>

      {/* Wrapper div for technology icons */}
      <div className="w-full flex justify-center">
        {/* Second div for technologies icons */}
        <div
          ref={containerRef}
          className="flex items-center space-x-8 md:space-x-12 lg:space-x-16"
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
