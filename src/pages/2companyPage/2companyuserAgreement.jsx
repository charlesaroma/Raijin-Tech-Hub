import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookText, ShieldCheck, FileText, AlertCircle } from "lucide-react";
import companyInfoData from "./companyInfoData";

const iconMap = {
  "User Agreement": <BookText className="text-blue-500 w-6 h-6" />,
  "Privacy Policy": <ShieldCheck className="text-green-500 w-6 h-6" />,
  "Terms of Service": <FileText className="text-yellow-500 w-6 h-6" />,
  "Disclaimer": <AlertCircle className="text-red-500 w-6 h-6" />,
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const CompanyUserAgreement = () => {
  const [activeTab, setActiveTab] = useState(companyInfoData[0].title);
  const activeSection = companyInfoData.find((section) => section.title === activeTab);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-[var(--color-accent-100)] to-[var(--color-accent-200)] py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary-500)] mb-4">
            Raijin Tech Hub
          </h1>
          <p className="text-[var(--color-primary-600)] text-lg md:text-xl max-w-2xl mx-auto">
            Important legal information. Please read carefully.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {companyInfoData.map(({ title }) => (
            <button
              key={title}
              onClick={() => setActiveTab(title)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
              ${
                activeTab === title
                  ? "bg-[var(--color-primary-500)] text-white shadow-lg scale-105"
                  : "bg-white text-[var(--color-primary-500)] hover:bg-[var(--color-primary-100)]"
              }`}
            >
              {iconMap[title]}
              {title}
            </button>
          ))}
        </div>

        {/* Animated Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            {...fadeInUp}
            className="relative bg-white/80 backdrop-blur-xl border border-[var(--color-primary-200)] rounded-3xl shadow-2xl p-10"
          >
            <div className="text-center mb-10">
              <div className="flex justify-center mb-3">{iconMap[activeTab]}</div>
              <h2 className="text-3xl font-semibold text-[var(--color-primary-500)]">{activeTab}</h2>
            </div>

            <div className="relative space-y-8 border-l-4 border-[var(--color-primary-300)] pl-6">
              {activeSection.paragraphs.map((para, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative bg-white shadow-md rounded-xl p-5"
                >
                  <span className="absolute -left-3 top-4 w-6 h-6 bg-[var(--color-primary-500)] rounded-full border-4 border-white"></span>
                  <p className="text-[var(--color-primary-700)] text-base md:text-lg">{para}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CompanyUserAgreement;
