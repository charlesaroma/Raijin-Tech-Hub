import { motion } from "framer-motion";
import { Icon } from '@iconify/react';

const ExpertiseSection = () => {
  const expertiseItems = [
    {
      title: "Cybersecurity & Pen Testing",
      description: "Ensure your digital infrastructure is secure with our expert penetration testing and cybersecurity services.",
      icon: "mdi:shield-lock",
    },
    {
      title: "IT Consultancy & Strategy",
      description: "Our IT consultants provide strategic advice to optimize your technology landscape for the future.",
      icon: "mdi:laptop-account",
    },
    {
      title: "Cloud Solutions & Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with our scalable and secure cloud solutions.",
      icon: "mdi:cloud-upload",
    },
    {
      title: "UI/UX Design & Development",
      description: "Create stunning and user-friendly interfaces that offer the best user experience for your clients.",
      icon: "mdi:palette",
    },
    {
      title: "Mobile App Development",
      description: "Our mobile app development team builds intuitive apps that drive engagement and deliver results.",
      icon: "mdi:cellphone",
    },
    {
      title: "Digital Transformation & Automation",
      description: "Transform your business processes through cutting-edge digital technologies and automation.",
      icon: "mdi:cog-outline",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
      {expertiseItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative cursor-pointer"
        >
          <div className="relative h-full rounded-2xl p-6 lg:p-8 bg-[var(--color-bg-card)] transition-all duration-300 overflow-hidden shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)] hover:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] hover:translate-y-1">
            {/* Content */}
            <div className="relative z-10">
              {/* Icon Display */}
              <div className="relative mb-6 w-fit mx-auto">
                <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-[var(--color-bg-primary)] text-[var(--color-primary-500)] shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)] group-hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] transition-all duration-300">
                  <Icon icon={item.icon} className="text-3xl lg:text-4xl" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base lg:text-lg font-bold text-[var(--color-primary-600)] mb-3 text-center transition-all duration-300">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-[var(--color-primary-500)]/30 rounded-full mb-4 mx-auto"></div>

              {/* Description */}
              <p className="text-xs lg:text-sm text-[var(--color-primary-600)] leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExpertiseSection;

