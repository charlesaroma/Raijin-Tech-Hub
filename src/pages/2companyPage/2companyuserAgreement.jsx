import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CompanyUserAgreement = () => {
  const companyInfo = [
    {
      title: 'User Agreement',
      paragraphs: [
        'Welcome to Raijin Tech Hub. By accessing or using our website, services, or products, you agree to be bound by these terms and conditions. These terms constitute a legally binding agreement between you and Raijin Tech Hub.',
        'Raijin Tech Hub provides a range of IT services, including software development, IT support, consultancy, and training. You agree to use our services only for lawful purposes and in accordance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of any account information and passwords associated with your use of our services.',
        'All content, trademarks, and intellectual property on our website and in our services are owned by Raijin Tech Hub. You may not reproduce, distribute, or create derivative works from our content without our prior written consent, except as permitted for personal, non-commercial use.',
        'For paid services, you agree to pay all applicable fees as described in our pricing or service agreements. Payment terms and conditions will be specified in individual contracts or invoices.',
        'Raijin Tech Hub shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services. Our liability is limited to the extent permitted by law.',
        'We may terminate or suspend your access to our services at any time for violations of this agreement or for any other reason. You may terminate your use of our services by providing us with written notice.',
        'This agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Raijin Tech Hub reserves the right to modify or update this User Agreement at any time. We will provide notice of significant changes. Your continued use of our services after any changes constitute acceptance of the new terms.',
      ],
    },
    {
      title: 'Privacy Policy',
      paragraphs: [
        'Raijin Tech Hub is committed to protecting your privacy. This policy explains how we handle your personal information.',
        'We may collect personal information such as your name, contact details, and professional information when you use our services or interact with our website. We also collect data on website usage, such as IP addresses, browser type, and pages visited, to improve our website and services.',
        'We use your information to provide and improve our services, communicate with you, process transactions, and personalize your experience. We may also use your information for marketing purposes, but you can opt out of receiving marketing communications.',
        'Raijin Tech Hub implements security measures to protect your data from unauthorized access, use, or disclosure. However, no data transmission over the internet is completely secure, and we cannot guarantee the absolute security of your information.',
        'We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. We will not sell your personal information to third parties.',
        'You have the right to access, correct, or delete your personal information. You may also have the right to restrict processing or object to processing of your data.',
        'Our website may use cookies to enhance your browsing experience. You can control cookies through your browser settings.',
        'Raijin Tech Hub may update this Privacy Policy from time to time. We will notify you of any material changes. Your continued use of our services constitutes acceptance of the updated policy.',
      ],
    },
    {
      title: 'Terms of Service',
      paragraphs: [
        'These terms govern the provision and use of Raijin Tech Hub\'s specific services.',
        'Raijin Tech Hub offers various IT services, including: Custom Software & Website Development, IT Installations & Support, IT Consultancy Services, Training & Capacity Building, and other related services. The specifics of each service will be detailed in individual agreements or proposals.',
        'Clients are expected to provide accurate and complete information required for service delivery. Clients are responsible for their use of the delivered services and must ensure compliance with all applicable laws.',
        'Raijin Tech Hub will make reasonable efforts to deliver services according to agreed timelines and specifications. Delays may occur due to unforeseen circumstances, and we will communicate any such delays to the client.',
        'For software development projects, clients will have an opportunity to review and accept the delivered product. Warranties for our services, if any, will be defined in individual contracts.',
        'Unless otherwise agreed, Raijin Tech Hub retains ownership of any software, tools, or methodologies developed during the provision of services. Clients will own the intellectual property rights to the specific deliverables created for them (e.g., a custom application), as defined in the contract.',
        'Both Raijin Tech Hub and the client agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the service provision.',
        'Either party may terminate a service agreement with written notice if the other party breaches the terms. Specific termination clauses and conditions may vary depending on the service and will be outlined in individual contracts.',
      ],
    },
    {
      title: 'Disclaimer',
      paragraphs: [
        'This statement limits Raijin Tech Hub\'s legal liability.',
        'The information provided by Raijin Tech Hub on our website and in our materials is for general informational purposes only. We strive to provide accurate information but make no warranties or representations about its completeness or accuracy.',
        'While we are committed to delivering high-quality services, Raijin Tech Hub cannot guarantee specific outcomes or results. The success of IT solutions depends on various factors, and results may vary.',
        'Our website may contain links to third-party websites. Raijin Tech Hub is not responsible for the content or privacy practices of these websites.',
        'To the fullest extent permitted by law, Raijin Tech Hub disclaims all liability for any damages arising out of or in connection with the use of our services or information. This includes but is not limited to direct, indirect, incidental, consequential, and punitive damages.',
        'The information provided by Raijin Tech Hub does not constitute professional advice. Consult with a qualified professional for advice tailored to your specific situation.',
        'Raijin Tech Hub may modify this Disclaimer at any time without prior notice.',
      ],
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-[var(--color-accent-100)] to-[var(--color-accent-200)] py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary-500)] mb-4">
            Raijin Tech Hub - Company Information
          </h1>
          <p className="text-[var(--color-primary-600)] text-lg md:text-xl">
            Important legal information and contact details. Please read carefully.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 md:mb-12">
          {companyInfo.map((section, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-2 cursor-pointer rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${
                activeTab === index
                  ? 'bg-[var(--color-primary-500)] text-[var(--color-accent-100)]'
                  : 'bg-[var(--color-accent-)] text-[var(--color-primary-500)] hover:bg-[var(--color-accent-500)]'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--color-accent-400)] rounded-2xl shadow-lg p-8 md:p-10 lg:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary-500)] mb-6">
            {companyInfo[activeTab].title}
          </h2>
          {companyInfo[activeTab].paragraphs.map((para, index) => (
            <p
              key={index}
              className="text-[var(--color-primary-500)] text-base md:text-lg mb-4 leading-relaxed"
            >
              {para}
            </p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyUserAgreement;