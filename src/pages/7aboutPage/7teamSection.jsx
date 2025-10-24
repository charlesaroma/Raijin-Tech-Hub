import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import teamData from '../../data/teamData.json';
import { staggerAnimation } from '../../utils/gsapAnimations';

const TeamSection = () => {
  const teamRef = useRef([]);
  const { team } = teamData;

  // GSAP animations - only run after team cards are rendered
  useEffect(() => {
    // Add a small delay to ensure DOM elements are ready
    const timer = setTimeout(() => {
      const validRefs = teamRef.current.filter(ref => ref !== null);
      if (validRefs.length > 0) {
        staggerAnimation(validRefs, { start: 'top 85%' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [team.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-600)] text-center mb-4">
        Meet Our Team
      </h2>
      <p className="text-center text-xs sm:text-sm text-[var(--color-primary-600)] mb-12 max-w-2xl mx-auto">
        Our talented team of professionals is dedicated to delivering exceptional results and driving your success.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {team && team.length > 0 ? (
          team.map((member, index) => (
            <motion.div
              key={member.id}
              ref={(el) => {
                if (teamRef.current) {
                  teamRef.current[index] = el;
                }
              }}
              className="group relative"
            >
            <div className="relative rounded-3xl p-6 bg-[var(--color-bg-card)] transition-all duration-300 text-center cursor-pointer shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)] hover:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] hover:translate-y-1">
              {/* Photo */}
              <div className="relative w-28 h-28 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-[var(--color-primary-500)]/30 transition-all"
                />
                <div className="absolute -bottom-2 -right-2 w-9 h-9 bg-[var(--color-bg-primary)] rounded-full flex items-center justify-center shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]">
                  <Icon icon="mdi:account-check" className="text-[var(--color-primary-500)] text-sm" />
                </div>
              </div>

              {/* Info */}
              <h4 className="text-base font-bold text-[var(--color-primary-600)] mb-2">
                {member.name}
              </h4>
              <p className="text-xs font-semibold text-[var(--color-primary-600)] mb-3">
                {member.position}
              </p>
              <p className="text-xs text-[var(--color-primary-600)] mb-4 line-clamp-3">
                {member.bio}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {member.specialties.slice(0, 2).map((specialty, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded text-xs shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[var(--color-bg-primary)] text-[var(--color-primary-500)] rounded-full flex items-center justify-center transition-all cursor-pointer shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)] hover:scale-95"
                >
                  <Icon icon="mdi:linkedin" className="text-sm" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="w-9 h-9 bg-[var(--color-bg-primary)] text-[var(--color-primary-500)] rounded-full flex items-center justify-center transition-all cursor-pointer shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)] hover:scale-95"
                >
                  <Icon icon="mdi:email" className="text-sm" />
                </a>
              </div>
            </div>
          </motion.div>
        ))
        ) : (
          // No Team Members Available
          <div className="col-span-full text-center py-20">
            <Icon icon="mdi:account-group" className="text-6xl text-[var(--color-primary-500)]/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[var(--color-primary-600)] mb-2">
              No team members available
            </h3>
            <p className="text-[var(--color-primary-600)] text-sm">
              Team information will be available soon
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamSection;

