import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
    FaAngular, FaPython, FaJava
} from 'react-icons/fa';
import {
    SiTailwindcss, SiMongodb, SiNextdotjs, SiFlutter, SiKotlin
} from 'react-icons/si';

const TechIcon = ({ icon, name }) => (
    <motion.div
        className="flex flex-col items-center justify-center p-4 lg:p-6 w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-lg border border-white/10 hover:scale-110 transition-transform duration-300"
        whileHover={{ y: -5 }}
        style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), rgba(255,255,255,0))',
            backdropFilter: 'blur(10px)',
        }}
    >
        <div className="flex items-center justify-center w-full h-full">{icon}</div>
        <p className="text-white text-sm md:text-base font-medium mt-2">{name}</p>
    </motion.div>
);

const TechScrollSection = () => {
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const animationControls = useAnimation();
    const scrollSpeed = 0.8;
    const damping = 0.05;

    const technologies = useMemo(() => [
        { name: 'React', icon: <FaReact className="text-3xl text-cyan-400" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-3xl text-green-500" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-3xl text-sky-300" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-3xl text-emerald-400" /> },
        { name: 'JavaScript', icon: <FaJsSquare className="text-3xl text-yellow-400" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-3xl text-orange-400" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-3xl text-blue-400" /> },
        { name: 'Angular', icon: <FaAngular className="text-3xl text-red-400" /> },
        { name: 'Python', icon: <FaPython className="text-3xl text-green-400" /> },
        { name: 'Java', icon: <FaJava className="text-3xl text-orange-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-3xl text-white" /> },
        { name: 'Flutter', icon: <SiFlutter className="text-3xl text-sky-400" /> },
        { name: 'Kotlin', icon: <SiKotlin className="text-3xl text-violet-400" /> },
    ], []);

    useEffect(() => {
        const container = containerRef.current;
        const contentWidth = container.scrollWidth;
        container.style.width = `${contentWidth}px`;
    }, [technologies]);

    useEffect(() => {
        let animationFrameId = null;
        let autoScrollPosition = 0;
        let targetScrollPosition = 0;
        let velocity = 0;

        const autoScroll = () => {
            targetScrollPosition += scrollSpeed;
            if (targetScrollPosition >= containerRef.current.scrollWidth) {
                targetScrollPosition = 0;
                autoScrollPosition = 0;
            } else if (targetScrollPosition < 0) {
                targetScrollPosition = containerRef.current.scrollWidth;
                autoScrollPosition = containerRef.current.scrollWidth;
            }

            velocity = (targetScrollPosition - autoScrollPosition) * damping;
            autoScrollPosition += velocity;

            setScrollPosition(autoScrollPosition);
            animationControls.start({
                x: -autoScrollPosition,
                transition: { duration: 0, ease: 'linear' },
            });

            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [scrollSpeed, animationControls]);

    return (
        <div className="bg-gradient-to-b from-[var(--color-primary-800)] via-[var(--color-primary-600)] to-[var(--color-primary-900)] py-20 overflow-hidden">
            <div className="w-full text-center mb-12 px-4">
                <h2 className="text-4xl font-bold text-white drop-shadow-sm">Our Technology Stack</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
                    Technologies we leverage to build robust and scalable solutions.
                </p>
            </div>

            <div className="w-full flex justify-center">
                <motion.div
                    ref={containerRef}
                    className="flex items-center space-x-6 md:space-x-8 lg:space-x-10 whitespace-nowrap"
                    style={{ x: 0 }}
                    animate={animationControls}
                >
                    {technologies.map((tech, index) => (
                        <TechIcon key={index} icon={tech.icon} name={tech.name} />
                    ))}
                    {technologies.map((tech, index) => (
                        <TechIcon key={`dup-${index}`} icon={tech.icon} name={tech.name} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechScrollSection;