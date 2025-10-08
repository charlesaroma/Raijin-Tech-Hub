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
    <div className="py-8 px-5 lg:px-[8%] bg-gradient-to-br from-[var(--color-primary-50)] to-white min-h-[90vh] flex flex-col justify-center">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[var(--color-primary-500)] mb-2">
          Our Purpose & Values
        </h2>
        <div className="w-20 h-1 bg-[var(--color-accent-500)] mx-auto rounded-full"></div>
        <p className="text-[var(--color-primary-400)] mt-3 max-w-2xl mx-auto text-sm">
          Discover what drives us forward and defines our commitment to excellence
        </p>
      </div>

      {/* Vertical Tabs Layout */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-[290px_1fr] gap-4">
        {/* Left Side - Vertical Tabs */}
        <div className="flex flex-col space-y-2">
          {VALUES.map((value, index) => (
            <button
              key={value.title}
              onClick={() => setActiveTab(value.title)}
              className={`
                group relative px-5 py-3 rounded-xl text-left transition-all duration-300 transform cursor-pointer
                ${activeTab === value.title
                  ? "bg-[var(--color-primary-500)] text-white shadow-lg scale-105"
                  : "bg-white text-[var(--color-primary-500)] hover:bg-[var(--color-primary-100)] hover:scale-102 shadow-md hover:shadow-lg"}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Active Indicator Bar */}
              {activeTab === value.title && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--color-accent-500)] rounded-l-xl"></div>
              )}
              
              <div className="flex items-center space-x-4">
                {/* Icon Container */}
                <div className={`
                  flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300
                  ${activeTab === value.title
                    ? "bg-[var(--color-accent-500)] text-white"
                    : "bg-[var(--color-primary-100)] text-[var(--color-primary-500)] group-hover:bg-[var(--color-primary-200)]"}
                `}>
                  {React.cloneElement(value.icon, { size: 20 })}
                </div>
                
                {/* Title */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                </div>

                {/* Arrow Indicator */}
                <div className={`
                  transition-all duration-300
                  ${activeTab === value.title ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
                `}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Right Side - Content Display */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 min-h-[350px] flex flex-col justify-center border border-[var(--color-primary-100)]">
            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-accent-500)] to-transparent opacity-10 rounded-2xl"></div>
            
            {/* Icon Display */}
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white mb-4 shadow-lg">
              {React.cloneElement(activeValue.icon, { size: 28 })}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[var(--color-primary-500)] mb-3">
              {activeValue.title}
            </h3>

            {/* Divider */}
            <div className="w-14 h-1 bg-[var(--color-accent-500)] rounded-full mb-4"></div>

            {/* Description */}
            <p className="text-base text-[var(--color-primary-400)] leading-relaxed">
              {activeValue.description}
            </p>

            {/* Decorative Quote Mark */}
            <div className="absolute bottom-8 right-8 text-[var(--color-primary-100)] opacity-30">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;