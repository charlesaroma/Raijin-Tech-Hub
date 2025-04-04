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
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0); // Store the drag offset
    const animationControls = useAnimation();
    const scrollSpeed = 0.8;
    const damping = 0.05; // Reduced damping for smoother deceleration
    const minDragDistance = 10; // Minimum drag distance to consider it a drag

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
        const originalWidth = container.offsetWidth;
        container.style.width = `${contentWidth}px`;
    }, [technologies]);

    useEffect(() => {
        let animationFrameId = null;
        let autoScrollPosition = 0;
        let targetScrollPosition = 0;
        let velocity = 0;

        const autoScroll = () => {
            if (!isDragging) {
                targetScrollPosition += scrollSpeed;
                if (targetScrollPosition >= containerRef.current.offsetWidth) {
                    targetScrollPosition -= containerRef.current.offsetWidth;
                    autoScrollPosition -= containerRef.current.offsetWidth;
                } else if (targetScrollPosition < 0) {
                    targetScrollPosition += containerRef.current.offsetWidth;
                    autoScrollPosition += containerRef.current.offsetWidth;
                }
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
    }, [isDragging, scrollSpeed, animationControls]);

    const handleDragStart = () => {
        setIsDragging(true);
        animationControls.stop();
    };

    const handleDrag = (event, info) => {
        if (Math.abs(info.offset.x) > minDragDistance) {
            setIsDragging(true);
            setDragOffset(info.offset.x);
            setScrollPosition(prevPosition => prevPosition + info.delta.x);
        }
    };


    const handleDragEnd = (event, info) => {
        setIsDragging(false);
        setDragOffset(0);

        // "Fling" effect (optional, but recommended for a natural feel)
        const dragVelocity = info.velocity.x;
        const flingVelocity = dragVelocity * 0.5; // Adjust the multiplier for the strength of the fling
        const animationDuration = Math.min(Math.abs(flingVelocity) * 0.002, 1); // Cap the duration

        if (Math.abs(dragVelocity) > 50) { // Only fling if the drag was fast enough
            animationControls.start({
                x: -scrollPosition + flingVelocity * 10, // Project the end position
                transition: {
                    duration: animationDuration,
                    ease: "easeOut",
                }
            }).then(() => {
                if (!isDragging) { // Check again after animation
                    // Continue auto-scrolling
                    animationControls.start({
                        x: -scrollPosition,
                        transition: { duration: 0, ease: 'linear' },
                    });
                }
            });
        } else if (!isDragging) {
            animationControls.start({
                x: -scrollPosition,
                transition: { duration: 0, ease: 'linear' },
            });
        }



    };



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
                    className="flex items-center space-x-6 md:space-x-8 lg:space-x-10 whitespace-nowrap cursor-grab active:cursor-grabbing"
                    drag="x"
                    onDragStart={handleDragStart}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    style={{ x: 0 }}
                    animate={animationControls}
                    dragConstraints={{ left: -1000, right: 1000 }} // Adjust constraints as needed
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