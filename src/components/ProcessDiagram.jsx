import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import processData from '../data/processData.json';

gsap.registerPlugin(ScrollTrigger);

const ProcessDiagram = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const linesRef = useRef([]);
  const { phases } = processData;

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    const lines = linesRef.current.filter(Boolean);

    if (cards.length === 0) return;

    // Create main timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    // Animate cards appearing with stagger
    tl.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );

    // Animate connecting lines
    if (lines.length > 0) {
      tl.fromTo(
        lines,
        {
          scaleX: 0,
          transformOrigin: 'left center',
        },
        {
          scaleX: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power2.inOut',
        },
        '-=0.3'
      );
    }

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-16 px-4 md:px-6 lg:px-8">
      {/* Desktop Flow - Horizontal */}
      <div className="hidden lg:block">
        <div className="relative max-w-7xl mx-auto">
          {/* Top Row - 4 phases */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {phases.slice(0, 4).map((phase, index) => (
              <div key={phase.id} className="relative">
                <ProcessCard 
                  phase={phase} 
                  index={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                />
                {index < 3 && (
                  <div 
                    ref={(el) => (linesRef.current[index] = el)}
                    className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-400)]"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Connector Arrow Down */}
          <div className="flex justify-end mb-6">
            <div 
              ref={(el) => (linesRef.current[3] = el)}
              className="w-0.5 h-12 bg-gradient-to-b from-[var(--color-primary-500)] to-[var(--color-primary-400)]"
            />
          </div>

          {/* Bottom Row - 4 phases (reversed) */}
          <div className="grid grid-cols-4 gap-6">
            {phases.slice(4, 8).reverse().map((phase, index) => {
              const actualIndex = 7 - index;
              return (
                <div key={phase.id} className="relative">
                  <ProcessCard 
                    phase={phase} 
                    index={actualIndex}
                    ref={(el) => (cardsRef.current[actualIndex] = el)}
                  />
                  {index < 3 && (
                    <div 
                      ref={(el) => (linesRef.current[actualIndex] = el)}
                      className="absolute top-1/2 -left-3 w-6 h-0.5 bg-gradient-to-l from-[var(--color-primary-500)] to-[var(--color-primary-400)]"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet - Vertical Stack */}
      <div className="lg:hidden">
        <div className="max-w-2xl mx-auto space-y-8">
          {phases.map((phase, index) => (
            <div key={phase.id} className="relative">
              <ProcessCard 
                phase={phase} 
                index={index}
                ref={(el) => (cardsRef.current[index] = el)}
              />
              {index < phases.length - 1 && (
                <div className="flex justify-center my-4">
                  <div 
                    ref={(el) => (linesRef.current[index] = el)}
                    className="w-0.5 h-8 bg-gradient-to-b from-[var(--color-primary-500)] to-[var(--color-primary-400)]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Process Card Component
const ProcessCard = ({ phase, index }, ref) => {
  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      className="group relative bg-[var(--color-bg-card)] rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-[8px_8px_20px_var(--shadow-dark),-8px_-8px_20px_var(--shadow-light)] hover:shadow-[4px_4px_12px_var(--shadow-dark),-4px_-4px_12px_var(--shadow-light)]"
    >
      {/* Phase Number Badge */}
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[var(--color-bg-primary)] shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] flex items-center justify-center">
        <span className="text-[var(--color-primary-500)] font-bold text-sm">
          {phase.id}
        </span>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-2xl bg-[var(--color-bg-primary)] shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)] flex items-center justify-center group-hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] transition-all duration-300">
          <Icon 
            icon={phase.icon} 
            className="text-3xl text-[var(--color-primary-500)]" 
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-[var(--color-primary)] mb-2 text-center">
        {phase.title}
      </h3>

      {/* Duration */}
      <p className="text-xs text-[var(--color-primary-600)] mb-3 text-center">
        ⏱️ {phase.duration}
      </p>

      {/* Description */}
      <p className="text-xs text-[var(--color-primary-600)] leading-relaxed mb-4">
        {phase.description}
      </p>

      {/* Deliverables */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-[var(--color-primary-600)] mb-2">
          Deliverables:
        </h4>
        <ul className="space-y-1">
          {phase.deliverables.slice(0, 3).map((item, idx) => (
            <li key={idx} className="text-xs text-[var(--color-primary-600)] flex items-start gap-2">
              <span className="text-[var(--color-primary-500)] mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div>
        <h4 className="text-xs font-semibold text-[var(--color-primary-600)] mb-2">
          Tools:
        </h4>
        <div className="flex flex-wrap gap-2">
          {phase.tools.map((tool, idx) => (
            <span 
              key={idx}
              className="px-2 py-1 text-[10px] bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessDiagram;

