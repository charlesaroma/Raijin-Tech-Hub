import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaShieldAlt,
  FaMobileAlt,
  FaCloud,
  FaCogs,
  FaPaintBrush,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { BreadcrumbStructuredData } from "../../components/StructuredData";

const DiscoverPage = () => {
  const expertiseItems = [
    {
      title: "Cybersecurity & Pen Testing",
      description:
        "Ensure your digital infrastructure is secure with our expert penetration testing and cybersecurity services.",
      icon: <FaShieldAlt className="text-4xl sm:text-5xl" />,
    },
    {
      title: "IT Consultancy & Strategy",
      description:
        "Our IT consultants provide strategic advice to optimize your technology landscape for the future.",
      icon: <FaLaptopCode className="text-4xl sm:text-5xl" />,
    },
    {
      title: "Cloud Solutions & Migration",
      description:
        "Seamlessly migrate your infrastructure to the cloud with our scalable and secure cloud solutions.",
      icon: <FaCloud className="text-4xl sm:text-5xl" />,
    },
    {
      title: "UI/UX Design & Development",
      description:
        "Create stunning and user-friendly interfaces that offer the best user experience for your clients.",
      icon: <FaPaintBrush className="text-4xl sm:text-5xl" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Our mobile app development team builds intuitive apps that drive engagement and deliver results.",
      icon: <FaMobileAlt className="text-4xl sm:text-5xl" />,
    },
    {
      title: "Digital Transformation & Automation",
      description:
        "Transform your business processes through cutting-edge digital technologies and automation.",
      icon: <FaCogs className="text-4xl sm:text-5xl" />,
    },
  ];

  return (
    <>
      <SEO 
        title="Discover Our Expertise | Raijin Tech Hub Uganda"
        description="Explore our comprehensive IT services including custom software development, cybersecurity, mobile apps, cloud solutions, system integration, and UI/UX design. Expert tech solutions for Ugandan businesses."
        keywords="IT services Uganda, software development services, cybersecurity Uganda, mobile app development, cloud solutions Kampala, system integration Uganda, UI/UX design services"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Discover Our Expertise', path: '/discover' }
        ]}
      />
      <section className="relative min-h-screen py-16 px-4 md:px-6 lg:px-[5%] bg-transparent overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -left-20 w-72 h-72 bg-[var(--color-primary-500)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 -right-20 w-96 h-96 bg-[var(--color-primary-600)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary-600)] mb-4">
          Discover Our Expertise
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-primary-500)]/80 max-w-3xl mx-auto leading-relaxed">
          Explore the wide range of services that we offer to enhance your business operations and technology stack.
        </p>
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl p-6 lg:p-8 border-2 border-[var(--color-primary-500)]/20 hover:border-[var(--color-primary-500)] transition-all duration-500 backdrop-blur-sm overflow-hidden bg-transparent">
                {/* Animated border glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.3)]"></div>
                </div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 rounded-2xl" 
                     style={{
                       backgroundImage: `linear-gradient(var(--color-primary-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-500) 1px, transparent 1px)`,
                       backgroundSize: '20px 20px'
                     }}>
                </div>

                {/* Gradient orb effect on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-primary-500)]/0 group-hover:bg-[var(--color-primary-500)]/10 rounded-full blur-3xl transition-all duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--color-primary-500)]/0 group-hover:bg-[var(--color-primary-500)]/10 rounded-full blur-3xl transition-all duration-700 delay-100"></div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[var(--color-primary-500)]/0 group-hover:border-[var(--color-primary-500)] rounded-tl-2xl transition-all duration-300"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[var(--color-primary-500)]/0 group-hover:border-[var(--color-primary-500)] rounded-br-2xl transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Display with animated ring */}
                  <div className="relative mb-6 w-fit mx-auto">
                    <div className="absolute inset-0 rounded-2xl bg-[var(--color-primary-500)]/10 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      {item.icon}
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary-500)]/0 group-hover:border-[var(--color-primary-500)]/50 scale-100 group-hover:scale-125 transition-all duration-500"></div>
              </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-primary-500)] mb-3 text-center transition-all duration-300">
                {item.title}
              </h3>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-[var(--color-accent-500)] rounded-full mb-4 mx-auto"></div>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-[var(--color-primary-500)]/80 dark:text-[var(--color-primary-400)]/80 leading-relaxed text-center transition-all duration-300 group-hover:text-[var(--color-primary-500)]">
                    {item.description}
                  </p>
                </div>

                {/* Scanning line effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent -translate-y-full group-hover:translate-y-[400px] transition-transform duration-[1500ms] ease-linear"></div>
                </div>
            </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-3xl p-8 lg:p-12 border-2 border-[var(--color-primary-500)]/30 bg-gradient-to-br from-[var(--color-primary-500)]/5 to-[var(--color-primary-600)]/5 backdrop-blur-sm overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-500)] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-primary-600)] rounded-full blur-3xl"></div>
      </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-600)] mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--color-primary-500)]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our team is here to help you grow. Let&apos;s discuss how we can assist you in achieving your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 inline-flex items-center gap-2 cursor-pointer">
                  <span className="relative z-10">Get in Touch</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-primary-700)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>

              <Link to="/">
                <button className="group relative px-8 py-4 bg-transparent border-2 border-[var(--color-primary-500)] text-[var(--color-primary-600)] rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:bg-[var(--color-primary-500)] hover:text-white hover:shadow-lg inline-flex items-center gap-2 cursor-pointer">
                  <span className="relative z-10">View All Services</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
            </button>
          </Link>
        </div>
          </div>
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default DiscoverPage;
