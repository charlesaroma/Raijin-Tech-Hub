import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ExpertiseSection = () => {
  const expertiseItems = [
    {
      title: "Cybersecurity & Pen Testing",
      description:
        "Ensure your digital infrastructure is secure with our expert penetration testing and cybersecurity services.",
      icon: "mdi:shield-lock",
    },
    {
      title: "IT Consultancy & Strategy",
      description:
        "Our IT consultants provide strategic advice to optimize your technology landscape for the future.",
      icon: "mdi:laptop-account",
    },
    {
      title: "AI Integration & Chatbot Solutions",
      description:
        "Transform customer interactions with intelligent AI chatbots and automation solutions powered by cutting-edge technology.",
      icon: "mdi:robot",
    },
    {
      title: "UI/UX Design & Development",
      description:
        "Create stunning and user-friendly interfaces that offer the best user experience for your clients.",
      icon: "mdi:palette",
    },
    {
      title: "Mobile App Development",
      description:
        "Our mobile app development team builds intuitive apps that drive engagement and deliver results.",
      icon: "mdi:cellphone",
    },
    {
      title: "Digital Transformation & Automation",
      description:
        "Transform your business processes through cutting-edge digital technologies and automation.",
      icon: "mdi:cog-outline",
    },
    {
      title: "Computer Hardware & Accessories",
      description:
        "Quality IT hardware including laptops, monitors, storage devices, and accessories from trusted suppliers at competitive prices.",
      icon: "mdi:desktop-classic",
    },
    {
      title: "Internship & Training Programs",
      description:
        "Hands-on internship opportunities and professional IT training programs for aspiring developers and tech enthusiasts.",
      icon: "mdi:school",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
      {expertiseItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          className="group relative cursor-pointer"
        >
          <div className="relative h-full rounded-3xl p-8 bg-white/80 backdrop-blur-md border border-(--color-white-600) transition-all duration-300 overflow-hidden hover:bg-white hover:shadow-2xl hover:border-(--color-secondary-500)/30">
            {/* Content */}
            <div className="relative z-10">
              {/* Icon Display */}
              <div className="relative mb-8 w-fit">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white text-(--color-secondary-500) shadow-sm border border-(--color-white-600) group-hover:bg-(--color-secondary-500) group-hover:text-white transition-all duration-500">
                  <Icon icon={item.icon} className="text-3xl" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-(--color-primary-500) mb-4 transition-all duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-(--color-off-black-500) leading-relaxed opacity-75">
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
