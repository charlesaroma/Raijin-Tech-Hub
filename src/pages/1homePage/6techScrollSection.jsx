import { useEffect, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare
} from 'react-icons/fa';
import {
    SiTailwindcss, SiMongodb, SiNextdotjs, SiFlutter
} from 'react-icons/si';

const TechIcon = ({ icon, name }) => (
    <motion.div
        className="flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] h-24 sm:h-28 lg:h-32 rounded-2xl shadow-lg border-2 border-[var(--color-primary-500)]/20 hover:border-[var(--color-primary-500)] transition-all duration-300 backdrop-blur-sm bg-gradient-to-br from-[var(--color-primary-50)]/10 to-transparent"
        whileHover={{ y: -8, scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        aria-label={name}
        role="img"
    >
        <div className="flex items-center justify-center mb-2">{icon}</div>
        <p className="text-[var(--color-primary-500)] text-xs sm:text-sm font-semibold text-center leading-tight">{name}</p>
    </motion.div>
);

TechIcon.propTypes = {
    icon: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired
};

const TechScrollSection = () => {
    const scrollContainerRef = useRef(null);
    const animationRef = useRef(null);
    const scrollPositionRef = useRef(0);
    const touchStartRef = useRef(0);
    const touchCurrentRef = useRef(0);
    const isDraggingRef = useRef(false);

    const technologies = useMemo(() => [
        { name: 'React', icon: <FaReact className="text-2xl sm:text-3xl text-cyan-400" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-2xl sm:text-3xl text-green-500" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-2xl sm:text-3xl text-sky-300" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-2xl sm:text-3xl text-emerald-400" /> },
        { name: 'JavaScript', icon: <FaJsSquare className="text-2xl sm:text-3xl text-yellow-400" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-2xl sm:text-3xl text-orange-400" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-2xl sm:text-3xl text-blue-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-2xl sm:text-3xl text-[var(--color-primary-500)]" /> },
        { name: 'Flutter', icon: <SiFlutter className="text-2xl sm:text-3xl text-sky-400" /> },        
    ], []);

    const animate = useCallback(() => {
        if (!scrollContainerRef.current || isDraggingRef.current) return;

        const scrollSpeed = 0.5;
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth / 2;

        scrollPositionRef.current += scrollSpeed;

        if (scrollPositionRef.current >= maxScroll) {
            scrollPositionRef.current = 0;
        }

        container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
        animationRef.current = requestAnimationFrame(animate);
    }, []);

    // Pause on hover
    const handleMouseEnter = useCallback(() => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (!isDraggingRef.current) {
            animationRef.current = requestAnimationFrame(animate);
        }
    }, [animate]);

    // Touch/Swipe handlers
    const handleTouchStart = useCallback((e) => {
        isDraggingRef.current = true;
        touchStartRef.current = e.touches[0].clientX;
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
    }, []);

    const handleTouchMove = useCallback((e) => {
        if (!isDraggingRef.current || !scrollContainerRef.current) return;

        touchCurrentRef.current = e.touches[0].clientX;
        const diff = touchStartRef.current - touchCurrentRef.current;
        
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth / 2;
        
        scrollPositionRef.current += diff * 0.8;

        if (scrollPositionRef.current >= maxScroll) {
            scrollPositionRef.current = 0;
        } else if (scrollPositionRef.current < 0) {
            scrollPositionRef.current = maxScroll - 1;
        }

        container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
        touchStartRef.current = touchCurrentRef.current;
    }, []);

    const handleTouchEnd = useCallback(() => {
        isDraggingRef.current = false;
        setTimeout(() => {
            if (!isDraggingRef.current) {
                animationRef.current = requestAnimationFrame(animate);
            }
        }, 500);
    }, [animate]);

    // Mouse drag handlers for desktop
    const handleMouseDown = useCallback((e) => {
        isDraggingRef.current = true;
        touchStartRef.current = e.clientX;
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
        e.preventDefault();
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!isDraggingRef.current || !scrollContainerRef.current) return;

        touchCurrentRef.current = e.clientX;
        const diff = touchStartRef.current - touchCurrentRef.current;
        
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth / 2;
        
        scrollPositionRef.current += diff * 0.8;

        if (scrollPositionRef.current >= maxScroll) {
            scrollPositionRef.current = 0;
        } else if (scrollPositionRef.current < 0) {
            scrollPositionRef.current = maxScroll - 1;
        }

        container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
        touchStartRef.current = touchCurrentRef.current;
    }, []);

    const handleMouseUp = useCallback(() => {
        isDraggingRef.current = false;
        setTimeout(() => {
            if (!isDraggingRef.current) {
                animationRef.current = requestAnimationFrame(animate);
            }
        }, 500);
    }, [animate]);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [animate]);

    // Handle mouse up globally when dragging
    useEffect(() => {
        const handleGlobalMouseUp = () => {
            if (isDraggingRef.current) {
                isDraggingRef.current = false;
                setTimeout(() => {
                    if (!isDraggingRef.current) {
                        animationRef.current = requestAnimationFrame(animate);
                    }
                }, 500);
            }
        };

        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, [animate]);

    return (
        <section 
            className="bg-transparent py-12 sm:py-16 lg:py-20 overflow-hidden relative"
            aria-label="Technology Stack"
        >
            {/* Header */}
            <div className="w-full text-center mb-8 sm:mb-12 px-4 max-w-5xl mx-auto">
                <div className="inline-block">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary-600)] mb-4 relative px-2">
                        Our Technology Stack
                        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent"></div>
                    </h2>
                </div>
                <p className="mt-6 text-xs sm:text-sm text-[var(--color-primary-600)] max-w-2xl mx-auto px-4">
                    Technologies we leverage to build robust and scalable solutions.
                </p>
            </div>

            {/* Scrolling Container */}
            <div 
                className="w-full relative overflow-hidden"
                role="region"
                aria-label="Scrolling technology icons - Swipe or drag to browse"
            >
                {/* Gradient Fade Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling Content */}
                <div 
                    className="py-4 select-none cursor-grab active:cursor-grabbing overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    <div
                        ref={scrollContainerRef}
                        className="flex items-center gap-4 sm:gap-6 lg:gap-8"
                        style={{ 
                            willChange: 'transform', 
                            userSelect: 'none', 
                            WebkitUserSelect: 'none', 
                            msUserSelect: 'none',
                            WebkitTouchCallout: 'none',
                            touchAction: 'pan-y pinch-zoom'
                        }}
                    >
                        {/* First set of technologies */}
                    {technologies.map((tech, index) => (
                            <TechIcon key={`first-${index}`} icon={tech.icon} name={tech.name} />
                    ))}
                        {/* Duplicate set for infinite scroll */}
                    {technologies.map((tech, index) => (
                            <TechIcon key={`second-${index}`} icon={tech.icon} name={tech.name} />
                    ))}
                    </div>
            </div>
        </div>
        </section>
    );
};

export default TechScrollSection;