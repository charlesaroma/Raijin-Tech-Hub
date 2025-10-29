import { useState } from "react";
import { Icon } from '@iconify/react';

const VALUES = [
  {
    title: "Vision",
    description:
      "To be a global leader in providing innovative and sustainable digital solutions, shaping the future of technology and empowering businesses worldwide.",
    icon: "mdi:eye",
  },
  {
    title: "Mission",
    description:
      "To deliver cutting-edge technology solutions with excellence in software development, fostering strong client relationships and driving their success through our technical expertise.",
    icon: "mdi:clipboard-check",
  },
  {
    title: "Objectives",
    description:
      "To drive business growth through tailored software solutions, focusing on efficiency, scalability, and user-centric design to meet the evolving needs of our clients.",
    icon: "mdi:chart-line",
  },
  {
    title: "Core Values",
    description:
      "We embrace integrity, innovation, collaboration, and a customer-first mindset, ensuring transparency, creativity, teamwork, and client satisfaction in all our endeavors.",
    icon: "mdi:account-group",
  },
  {
    title: "Strategic Goals",
    description:
      "To expand into new markets, enhance operational efficiency, and continuously invest in research and development to stay at the forefront of technological advancements and deliver exceptional value.",
    icon: "mdi:bullseye-arrow",
  },
  {
    title: "Unique Strengths",
    description:
      "Our expertise in emerging technologies, customer-centric approach, and commitment to quality distinguish us in the industry, allowing us to provide unique and effective solutions for our clients.",
    icon: "mdi:star",
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary-600)] mb-4 relative px-2">
          Our Purpose & Values
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent"></div>
        </h2>
        </div>
        <p className="mt-6 text-sm sm:text-sm text-[var(--color-primary-600)] max-w-2xl mx-auto px-4">
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
                group relative flex items-center gap-2 px-4 py-2 rounded-full text-left transition-all duration-300 whitespace-nowrap cursor-pointer
                  ${activeTab === value.title
                    ? "bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]"
                    : "bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]"}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <Icon icon={value.icon} className="text-sm text-[var(--color-primary-500)] flex-shrink-0" />
                
                {/* Title */}
                <span className="font-semibold text-sm">{value.title}</span>
                
                {/* Active indicator dot */}
                {activeTab === value.title && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-500)] ml-1"></div>
                )}
              </button>
            ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout: Side-by-Side */}
        <div className="hidden lg:grid lg:grid-cols-[240px_400px] lg:gap-5 justify-center mx-auto">
        {/* Left Side - Vertical Tabs */}
        <div className="flex flex-col space-y-2">
          {VALUES.map((value, index) => (
            <button
              key={value.title}
              onClick={() => setActiveTab(value.title)}
              className={`
                group relative px-4 py-2.5 rounded-full text-left transition-all duration-300 transform cursor-pointer
                ${activeTab === value.title
                  ? "bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]"
                  : "bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]"}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3">
                {/* Icon */}
                <Icon icon={value.icon} className="text-base text-[var(--color-primary-500)] flex-shrink-0" />
                
                {/* Title */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{value.title}</h3>
                </div>

                {/* Arrow Indicator */}
                {activeTab === value.title && (
                  <div className="transition-all duration-300 flex-shrink-0">
                    <Icon icon="mdi:chevron-right" className="text-base text-[var(--color-primary-500)]" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

          {/* Right Side - Content Display (Desktop) */}
          <div className="relative group">
            <div className="relative rounded-2xl p-6 h-full flex flex-col justify-center bg-[var(--color-bg-card)] transition-all duration-300 overflow-hidden cursor-pointer shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)] hover:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] hover:translate-y-1">
              {/* Content */}
              <div className="relative z-10">
                {/* Icon Display */}
                <div className="relative mb-3 w-fit">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-bg-primary)] shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)] transform transition-all duration-300 group-hover:scale-105">
                    <Icon icon={activeValue.icon} className="text-xl text-[var(--color-primary-500)]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[var(--color-primary-600)] mb-2 transition-all duration-300">
                  {activeValue.title}
                </h3>

                {/* Divider */}
                <div className="w-10 h-0.5 bg-[var(--color-primary-500)]/30 rounded-full mb-2"></div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--color-primary-600)]">
                  {activeValue.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet - Content Display (Below Tabs) */}
        <div className="relative group lg:hidden max-w-md mx-auto">
          <div className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-center bg-[var(--color-bg-card)] transition-all duration-300 overflow-hidden cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_12px_var(--shadow-dark),-4px_-4px_12px_var(--shadow-light)] hover:translate-y-1">
            {/* Content */}
            <div className="relative z-10">
              {/* Icon Display */}
              <div className="relative mb-3 w-fit">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--color-bg-primary)] shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)] transform transition-all duration-300 group-hover:scale-105">
                  <Icon icon={activeValue.icon} className="text-lg text-[var(--color-primary-500)]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-[var(--color-primary-600)] mb-2 transition-all duration-300">
                {activeValue.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-[var(--color-primary-500)]/30 rounded-full mb-2"></div>

              {/* Description */}
              <p className="text-sm text-[var(--color-primary-600)] leading-relaxed">
                {activeValue.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabComponent;