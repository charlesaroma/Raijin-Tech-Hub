import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookText, ShieldCheck, FileText, AlertCircle } from "lucide-react";
import companyInfoData from "./companyInfoData";

const iconMap = {
  "User Agreement": <BookText className="w-6 h-6" />,
  "Privacy Policy": <ShieldCheck className="w-6 h-6" />,
  "Terms of Service": <FileText className="w-6 h-6" />,
  "Disclaimer": <AlertCircle className="w-6 h-6" />,
};

const iconColors = {
  "User Agreement": "from-blue-500 to-blue-600",
  "Privacy Policy": "from-green-500 to-green-600",
  "Terms of Service": "from-yellow-500 to-yellow-600",
  "Disclaimer": "from-red-500 to-red-600",
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const CompanyUserAgreement = () => {
  const [activeTab, setActiveTab] = useState(companyInfoData[0].title);
  const [isSticky, setIsSticky] = useState(false);
  const tabsRef = useRef(null);
  const activeSection = companyInfoData.find((section) => section.title === activeTab);

  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current) {
        const tabsPosition = tabsRef.current.getBoundingClientRect().top;
        const navbarHeight = window.innerWidth >= 1024 ? window.innerHeight * 0.13 : window.innerHeight * 0.10;
        
        // Check if footer is in view
        const footer = document.querySelector('footer');
        const footerPosition = footer ? footer.getBoundingClientRect().top : window.innerHeight;
        const windowHeight = window.innerHeight;
        
        // Make sticky when tabs reach the navbar AND footer is not in view
        const shouldBeSticky = tabsPosition <= navbarHeight && footerPosition > windowHeight * 0.5;
        setIsSticky(shouldBeSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-transparent">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[var(--color-primary-500)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[var(--color-primary-600)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <div className="relative pt-16 px-4 md:px-6 lg:px-[5%]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary-600)] mb-2">
              Raijin Tech Hub
            </h1>
            <div className="w-50 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-primary-500)]/80 max-w-2xl mx-auto leading-relaxed">
              Important legal information. Please read carefully.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tab Buttons - Scroll-based Sticky */}
      <div ref={tabsRef} className="relative mb-8">
        <motion.div 
          className={`${isSticky ? 'fixed top-[calc(10vh+1rem)] lg:top-[calc(13vh+1rem)] left-0 right-0' : 'relative'} z-40 transition-all duration-300`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Custom scrollbar hide */}
          <style>
            {`
              .tab-scroll-container::-webkit-scrollbar {
                display: none;
              }
              .tab-scroll-container {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}
          </style>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden px-4">
            <div 
              className={`tab-scroll-container overflow-x-auto overflow-y-hidden ${isSticky ? 'bg-[var(--color-accent-300)]/95 backdrop-blur-md shadow-lg rounded-2xl p-3 border-2 border-[var(--color-primary-500)]/20' : ''}`}
              style={isSticky ? {
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                WebkitOverflowScrolling: 'touch'
              } : { WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex gap-2 pb-1 min-w-max">
                {companyInfoData.map(({ title }) => (
                  <button
                    key={title}
                    onClick={() => setActiveTab(title)}
                    className={`group relative flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 border-2 overflow-hidden cursor-pointer whitespace-nowrap flex-shrink-0
                    ${
                      activeTab === title
                        ? "bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white border-[var(--color-primary-500)] shadow-md"
                        : "bg-transparent text-[var(--color-primary-600)] border-[var(--color-primary-500)]/30 hover:border-[var(--color-primary-500)] hover:bg-[var(--color-primary-500)]/5"
                    }`}
                  >
                    <div className={`flex items-center justify-center ${activeTab === title ? 'text-white' : 'text-[var(--color-primary-500)]'}`}>
                      {React.cloneElement(iconMap[title], { className: 'w-4 h-4' })}
                    </div>
                    <span className="relative z-10">{title}</span>
                    {activeTab === title && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Wrapped Grid */}
          <div className="hidden md:block px-4 md:px-6 lg:px-[5%]">
            <div className="max-w-4xl mx-auto">
              <div className={`flex justify-center flex-wrap gap-3 ${isSticky ? 'bg-[var(--color-accent-300)]/25 backdrop-blur-md shadow-lg rounded-2xl p-4' : ''}`}
                   style={isSticky ? {
                     backdropFilter: 'blur(12px)',
                     WebkitBackdropFilter: 'blur(12px)'
                   } : {}}>
                {companyInfoData.map(({ title }) => (
                  <button
                    key={title}
                    onClick={() => setActiveTab(title)}
                    className={`group relative flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-base transition-all duration-300 border-2 overflow-hidden cursor-pointer
                    ${
                      activeTab === title
                        ? "bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white border-[var(--color-primary-500)] shadow-lg scale-105"
                        : "bg-transparent text-[var(--color-primary-600)] border-[var(--color-primary-500)]/30 hover:border-[var(--color-primary-500)] hover:bg-[var(--color-primary-500)]/5"
                    }`}
                  >
                    <div className={`flex items-center justify-center ${activeTab === title ? 'text-white' : 'text-[var(--color-primary-500)]'}`}>
                      {iconMap[title]}
                    </div>
                    <span className="relative z-10">{title}</span>
                    {activeTab === title && (
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Spacer to prevent content jump when tabs become fixed */}
      {isSticky && <div className="h-20"></div>}

      {/* Animated Tab Content */}
      <div className="relative px-4 md:px-6 lg:px-[5%] pb-16">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              {...fadeInUp}
              className="group relative"
            >
              <div className="relative rounded-3xl p-8 lg:p-12 border-2 border-[var(--color-primary-500)]/20 hover:border-[var(--color-primary-500)]/40 transition-all duration-500 backdrop-blur-sm overflow-hidden bg-transparent">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.2)]"></div>
              </div>

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 rounded-3xl" 
                   style={{
                     backgroundImage: `linear-gradient(var(--color-primary-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-500) 1px, transparent 1px)`,
                     backgroundSize: '20px 20px'
                   }}>
              </div>

              {/* Gradient orb effects */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-primary-500)]/0 group-hover:bg-[var(--color-primary-500)]/10 rounded-full blur-3xl transition-all duration-700"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--color-primary-500)]/0 group-hover:bg-[var(--color-primary-500)]/10 rounded-full blur-3xl transition-all duration-700 delay-100"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Title Section */}
                <div className="text-center mb-10">
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br ${iconColors[activeTab]} text-white flex items-center justify-center shadow-lg`}>
                      {React.cloneElement(iconMap[activeTab], { className: 'w-8 h-8 lg:w-10 lg:h-10' })}
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary-600)]">{activeTab}</h2>
                  <div className="w-16 h-0.5 bg-[var(--color-accent-500)] rounded-full mx-auto mt-4"></div>
                </div>

                {/* Content Timeline */}
                <div className="relative space-y-6 border-l-4 border-[var(--color-primary-500)]/30 pl-8">
                  {activeSection.paragraphs.map((para, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative group/item"
                    >
                      {/* Timeline dot */}
                      <span className="absolute -left-[39px] top-2 w-6 h-6 bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-600)] rounded-full border-4 border-[var(--color-accent-300)] shadow-lg transition-all duration-300 group-hover/item:scale-125"></span>
                      
                      {/* Content card */}
                      <div className="relative rounded-xl p-5 lg:p-6 border border-[var(--color-primary-500)]/10 bg-[var(--color-accent-300)]/50 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-primary-500)]/30 hover:bg-[var(--color-accent-300)]/70">
                        <p className="text-[var(--color-primary-600)] text-sm sm:text-base lg:text-lg leading-relaxed">
                          {para}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Scanning line effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent -translate-y-full group-hover:animate-scan"></div>
              </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Custom animation for scanning line */}
      <style>
        {`
          @keyframes scan {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100vh);
            }
          }
          .animate-scan {
            animation: scan 2s linear;
          }
        `}
      </style>
    </section>
  );
};

export default CompanyUserAgreement;
