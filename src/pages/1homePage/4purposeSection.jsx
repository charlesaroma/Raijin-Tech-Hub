import React, { useState } from "react";
import {
  FaEye, // Changed from FaRocket
  FaTasks, // Changed from FaHandshake
  FaChartLine, // Changed from FaLightbulb
  FaUsers,
  FaBullseye,
  FaStar,
  FaGlobe, // Alternative for Vision
  FaRoad, // Alternative for Mission
  FaFlagCheckered, // Alternative for Objectives
} from "react-icons/fa";

const VALUES = [
  {
    title: "Vision",
    description:
      "To be a global leader in providing innovative and sustainable digital solutions, shaping the future of technology and empowering businesses worldwide.",
    icon: <FaEye />, // Or <FaGlobe />
  },
  {
    title: "Mission",
    description:
      "To deliver cutting-edge technology solutions with excellence in software development, fostering strong client relationships and driving their success through our technical expertise.",
    icon: <FaTasks />, // Or <FaRoad />
  },
  {
    title: "Objectives",
    description:
      "To drive business growth through tailored software solutions, focusing on efficiency, scalability, and user-centric design to meet the evolving needs of our clients.",
    icon: <FaChartLine />, // Or <FaFlagCheckered />
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
  const [activeTab, setActiveTab] = useState("Core Values");

  return (
    <div className="text-center py-10 px-5 lg:px-[5%] bg-[var(--color-primary-50)]">
      <h2 className="text-4xl font-bold text-[var(--color-primary-500)]">
        Our Purpose & Values
      </h2>
      <div className="flex justify-center mt-5">
        {VALUES.map((value) => (
          <button
            key={value.title}
            onClick={() => setActiveTab(value.title)}
            className={`
              px-5 py-2 mx-1 rounded-md border-none cursor-pointer flex items-center transition-colors duration-300
              ${activeTab === value.title
                ? "bg-[var(--color-primary-500)] text-[var(--color-accent-500)]"
                : "bg-[var(--color-primary-100)] text-[var(--color-primary-500)] hover:bg-[var(--color-primary-200)]"}
              }
            `}
          >
            {React.cloneElement(value.icon, { className: "mr-2" })}
            {value.title}
          </button>
        ))}
      </div>
      <div className="mt-5">
        {VALUES.find((value) => value.title === activeTab)?.description}
      </div>
    </div>
  );
};

export default TabComponent;