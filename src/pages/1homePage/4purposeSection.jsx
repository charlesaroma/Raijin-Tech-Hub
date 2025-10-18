import React, { useState } from "react";
import {
  FaEye,
  FaTasks,
  FaChartLine,
  FaUsers,
  FaBullseye,
  FaStar,
} from "react-icons/fa";

const VALUES = [
  {
    title: "Vision",
    description:
      "To be a global leader in providing innovative and sustainable digital solutions, shaping the future of technology and empowering businesses worldwide.",
    icon: <FaEye />,
  },
  {
    title: "Mission",
    description:
      "To deliver cutting-edge technology solutions with excellence in software development, fostering strong client relationships and driving their success through our technical expertise.",
    icon: <FaTasks />,
  },
  {
    title: "Objectives",
    description:
      "To drive business growth through tailored software solutions, focusing on efficiency, scalability, and user-centric design to meet the evolving needs of our clients.",
    icon: <FaChartLine />,
  },
  {
    title: "Core Values",
    description:
      "We embrace integrity, innovation, collaboration, and a customer-first mindset, ensuring transparency, creativity, teamwork, and client satisfaction in all our endeavors.",
    icon: <FaUsers />,
  },
  {
    title: "Strategic Goals",
    description:
      "To expand into new markets, enhance operational efficiency, and continuously invest in research and development to stay at the forefront of technological advancements and deliver exceptional value.",
    icon: <FaBullseye />,
  },
  {
    title: "Unique Strengths",
    description:
      "Our expertise in emerging technologies, customer-centric approach, and commitment to quality distinguish us in the industry, allowing us to provide unique and effective solutions for our clients.",
    icon: <FaStar />,
  },
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Vision");
  const activeValue = VALUES.find((value) => value.title === activeTab);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-transparent min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <div className="inline-block">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-500)] mb-4 relative px-2">
          Our Purpose & Values
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent"></div>
        </h2>
        </div>
        <p className="mt-6 text-base sm:text-lg text-[var(--color-primary-500)] dark:text-[var(--color-primary-400)] max-w-2xl mx-auto px-4">
          Discover what drives us forward and defines our commitment to excellence
        </p>
      </div>

      {/* Tabs and Content Layout */}
      <div className="max-w-5xl mx-auto w-full">
        {/* Mobile/Tablet: Horizontal Scrolling Pills */}
        <div className="lg:hidden mb-4 overflow-hidden">
          <style>
            {`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}
          </style>
          <div 
            className="overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-2 pb-2 min-w-max px-1">
            {VALUES.map((value, index) => (
              <button
                key={value.title}
                onClick={() => setActiveTab(value.title)}
                className={`
                group relative flex items-center gap-2 px-4 py-2.5 rounded-full text-left transition-all duration-300 whitespace-nowrap border-2 cursor-pointer
                  ${activeTab === value.title
                    ? "bg-[var(--color-primary-500)] text-white border-[var(--color-primary-500)] shadow-lg"
                    : "bg-transparent text-[var(--color-primary-500)] border-[var(--color-primary-500)]/20 hover:border-[var(--color-primary-500)] hover:bg-[var(--color-primary-500)]/5"}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`
                  flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 flex-shrink-0
                  ${activeTab === value.title
                    ? "bg-white/20"
                    : "bg-[var(--color-primary-500)]/10"}
                `}>
                  {React.cloneElement(value.icon, { size: 16 })}
                </div>
                
                {/* Title */}
                <span className="font-semibold text-sm">{value.title}</span>
                
                {/* Active indicator dot */}
                {activeTab === value.title && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white ml-1"></div>
                )}
              </button>
            ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout: Side-by-Side */}
        <div className="hidden lg:grid lg:grid-cols-[240px_1fr] lg:gap-5">
        {/* Left Side - Vertical Tabs */}
        <div className="flex flex-col space-y-2">
          {VALUES.map((value, index) => (
            <button
              key={value.title}
              onClick={() => setActiveTab(value.title)}
              className={`
                group relative px-4 py-2.5 rounded-xl text-left transition-all duration-300 transform cursor-pointer border-2
                ${activeTab === value.title
                  ? "bg-[var(--color-primary-500)] text-white border-[var(--color-primary-500)] shadow-lg scale-[1.02]"
                  : "bg-transparent text-[var(--color-primary-500)] border-[var(--color-primary-500)]/20 hover:border-[var(--color-primary-500)] hover:bg-[var(--color-primary-500)]/5 shadow-sm hover:shadow-md"}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Active Indicator Bar */}
              {activeTab === value.title && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-accent-500)] rounded-l-xl"></div>
              )}
              
              <div className="flex items-center space-x-3">
                {/* Icon Container */}
                <div className={`
                    flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 flex-shrink-0
                  ${activeTab === value.title
                    ? "bg-white/20 text-white"
                    : "bg-[var(--color-primary-500)]/10 text-[var(--color-primary-500)]"}
                `}>
                  {React.cloneElement(value.icon, { size: 18 })}
                </div>
                
                {/* Title */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base truncate">{value.title}</h3>
                </div>

                {/* Arrow Indicator */}
                {activeTab === value.title && (
                  <div className="transition-all duration-300 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

          {/* Right Side - Content Display (Desktop) */}
          <div className="relative group">
            <div className="relative rounded-2xl p-7 min-h-[320px] flex flex-col justify-center border-2 border-[var(--color-primary-500)]/20 hover:border-[var(--color-primary-500)] transition-all duration-500 backdrop-blur-sm overflow-hidden">
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
                <div className="relative mb-4 w-fit">
                  <div className="absolute inset-0 rounded-2xl bg-[var(--color-primary-500)]/10 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    {React.cloneElement(activeValue.icon, { size: 24 })}
                  </div>
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary-500)]/0 group-hover:border-[var(--color-primary-500)]/50 scale-100 group-hover:scale-125 transition-all duration-500"></div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--color-primary-500)] mb-2.5 transition-all duration-300 group-hover:translate-x-1">
                  {activeValue.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-[var(--color-accent-500)] rounded-full mb-3"></div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--color-primary-500)]/80 dark:text-[var(--color-primary-400)]/80 transition-all duration-300 group-hover:text-[var(--color-primary-500)]">
                  {activeValue.description}
                </p>
              </div>

              {/* Scanning line effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent -translate-y-full group-hover:translate-y-[320px] transition-transform duration-[1500ms] ease-linear"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet - Content Display (Below Tabs) */}
        <div className="relative group lg:hidden">
          <div className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 min-h-[280px] sm:min-h-[320px] flex flex-col justify-center border-2 border-[var(--color-primary-500)]/20 hover:border-[var(--color-primary-500)] transition-all duration-500 backdrop-blur-sm overflow-hidden">
            {/* Animated border glow on hover */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] sm:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.3)]"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 rounded-xl sm:rounded-2xl" 
                 style={{
                   backgroundImage: `linear-gradient(var(--color-primary-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-500) 1px, transparent 1px)`,
                   backgroundSize: '20px 20px'
                 }}>
            </div>

            {/* Gradient orb effect on hover */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-primary-500)]/0 group-hover:bg-[var(--color-primary-500)]/10 rounded-full blur-3xl transition-all duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--color-primary-500)]/0 group-hover:bg-[var(--color-primary-500)]/10 rounded-full blur-3xl transition-all duration-700 delay-100"></div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-[var(--color-primary-500)]/0 group-hover:border-[var(--color-primary-500)] rounded-tl-xl sm:rounded-tl-2xl transition-all duration-300"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-[var(--color-primary-500)]/0 group-hover:border-[var(--color-primary-500)] rounded-br-xl sm:rounded-br-2xl transition-all duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon Display with animated ring */}
              <div className="relative mb-3 sm:mb-4 w-fit">
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-[var(--color-primary-500)]/10 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  {React.cloneElement(activeValue.icon, { size: 20, className: "sm:w-6 sm:h-6" })}
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary-500)]/0 group-hover:border-[var(--color-primary-500)]/50 scale-100 group-hover:scale-125 transition-all duration-500"></div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary-500)] mb-2 sm:mb-3 transition-all duration-300 group-hover:translate-x-1">
                {activeValue.title}
              </h3>

              {/* Divider */}
              <div className="w-12 sm:w-14 h-0.5 sm:h-1 bg-[var(--color-accent-500)] rounded-full mb-3 sm:mb-4"></div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[var(--color-primary-500)]/80 dark:text-[var(--color-primary-400)]/80 leading-relaxed transition-all duration-300 group-hover:text-[var(--color-primary-500)]">
                {activeValue.description}
              </p>
            </div>

            {/* Scanning line effect */}
            <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent -translate-y-full group-hover:translate-y-[280px] sm:group-hover:translate-y-[320px] transition-transform duration-[1500ms] ease-linear"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabComponent;