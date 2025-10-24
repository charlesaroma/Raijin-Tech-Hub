import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserSecret, FaDatabase, FaCookie, FaEnvelopeOpenText } from 'react-icons/fa';
import { fadeInScrollTrigger } from '../../utils/gsapAnimations';

const PolicySections = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        fadeInScrollTrigger(section, section);
      }
    });
  }, []);

  const sections = [
    {
      icon: <FaDatabase className="text-4xl" />,
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:
      
• Personal Information: Name, email address, phone number, company name, and business details when you contact us or request services.
• Technical Information: IP address, browser type, device information, and usage data when you visit our website.
• Communication Data: Records of correspondence when you contact us via email, phone, WhatsApp, or contact forms.
• Project Information: Details about your business, requirements, and preferences when you engage our services.

We collect this information to provide, maintain, and improve our services, and to communicate with you effectively.`
    },
    {
      icon: <FaLock className="text-4xl" />,
      title: 'How We Use Your Information',
      content: `We use the collected information for the following purposes:

• Service Delivery: To provide IT solutions, software development, and consultancy services as requested.
• Communication: To respond to inquiries, send project updates, and provide customer support.
• Improvement: To analyze usage patterns and improve our website, services, and user experience.
• Marketing: To send relevant information about our services, with your consent (you can opt-out anytime).
• Legal Compliance: To comply with legal obligations under Ugandan law and international standards.
• Security: To protect against fraud, unauthorized access, and ensure the security of our systems.

We will never sell your personal information to third parties.`
    },
    {
      icon: <FaUserSecret className="text-4xl" />,
      title: 'Data Sharing and Disclosure',
      content: `We may share your information in the following circumstances:

• Service Providers: With trusted third-party service providers (hosting, email services, analytics) who assist in our operations, bound by confidentiality agreements.
• Legal Requirements: When required by law, court order, or government regulations in Uganda or applicable jurisdictions.
• Business Transfers: In connection with any merger, acquisition, or sale of company assets, with notice to affected users.
• With Your Consent: When you explicitly authorize us to share information with specific third parties.

We ensure that any third parties we work with maintain appropriate data protection standards.`
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Data Security',
      content: `We implement robust security measures to protect your personal information:

• Encryption: We use SSL/TLS encryption for data transmission and secure storage protocols.
• Access Controls: Limited access to personal data, restricted to authorized personnel only.
• Security Audits: Regular security assessments and vulnerability testing of our systems.
• Secure Infrastructure: Industry-standard security practices for servers and databases.
• Staff Training: Our team is trained on data protection and privacy best practices.

While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.`
    },
    {
      icon: <FaCookie className="text-4xl" />,
      title: 'Cookies and Tracking',
      content: `Our website uses cookies and similar tracking technologies:

• Essential Cookies: Required for website functionality and cannot be disabled.
• Analytics Cookies: Help us understand how visitors use our website (Google Analytics).
• Preference Cookies: Remember your settings and preferences for future visits.
• Marketing Cookies: Track your browsing to provide relevant advertisements.

You can control cookies through your browser settings. Disabling cookies may affect website functionality. We respect "Do Not Track" browser signals.`
    },
    {
      icon: <FaEnvelopeOpenText className="text-4xl" />,
      title: 'Your Rights',
      content: `Under Ugandan data protection laws and international standards, you have the right to:

• Access: Request a copy of the personal information we hold about you.
• Correction: Request corrections to inaccurate or incomplete personal data.
• Deletion: Request deletion of your personal information, subject to legal retention requirements.
• Objection: Object to processing of your personal data for specific purposes.
• Portability: Request transfer of your data to another service provider in a structured format.
• Withdraw Consent: Withdraw consent for data processing at any time.

To exercise these rights, contact us at raijintechug@gmail.com. We will respond within 30 days.`
    }
  ];

  return (
    <>
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 p-6 rounded-2xl bg-[var(--color-bg-card)] shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]"
      >
        <p className="text-[var(--color-primary-600)] leading-relaxed">
          Raijin Tech Hub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy complies with the Ugandan Data Protection and Privacy Act and international standards including GDPR principles. By using our services or website, you agree to the collection and use of information in accordance with this policy.
        </p>
      </motion.div>

      {/* Policy Sections */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="group relative rounded-3xl p-8 bg-[var(--color-bg-card)] transition-all duration-300 shadow-[12px_12px_24px_var(--shadow-dark),-12px_-12px_24px_var(--shadow-light)] hover:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]"
          >
            {/* Icon & Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-[var(--color-bg-primary)] text-[var(--color-primary-500)] flex items-center justify-center flex-shrink-0 shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)] group-hover:scale-105 transition-transform">{section.icon}</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-600)] pt-3">
                {section.title}
              </h2>
            </div>

            {/* Content */}
            <div className="pl-20">
              <div className="text-[var(--color-primary-600)] leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Sections */}
      <div className="mt-8 space-y-8">
        {/* Data Retention */}
        <div className="p-8 rounded-3xl bg-[var(--color-bg-card)] shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]">
          <h2 className="text-2xl font-bold text-[var(--color-primary-600)] mb-4">
            Data Retention
          </h2>
          <p className="text-[var(--color-primary-600)] leading-relaxed">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When your data is no longer required, we securely delete or anonymize it in accordance with our data retention policies and legal requirements.
          </p>
        </div>

        {/* International Transfers */}
        <div className="p-8 rounded-3xl bg-[var(--color-bg-card)] shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]">
          <h2 className="text-2xl font-bold text-[var(--color-primary-600)] mb-4">
            International Data Transfers
          </h2>
          <p className="text-[var(--color-primary-600)] leading-relaxed">
            Your information may be transferred to and maintained on servers located outside of Uganda. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place to protect your personal information, including standard contractual clauses approved by relevant authorities.
          </p>
        </div>

        {/* Children's Privacy */}
        <div className="p-8 rounded-3xl bg-[var(--color-bg-card)] shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]">
          <h2 className="text-2xl font-bold text-[var(--color-primary-600)] mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-[var(--color-primary-600)] leading-relaxed">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take steps to delete such information.
          </p>
        </div>

        {/* Changes to Policy */}
        <div className="p-8 rounded-3xl bg-[var(--color-bg-card)] shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]">
          <h2 className="text-2xl font-bold text-[var(--color-primary-600)] mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-[var(--color-primary-600)] leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
          </p>
        </div>

        {/* Contact Information */}
        <div className="p-8 rounded-3xl bg-[var(--color-bg-card)] text-center shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-600)] mb-4">
            Contact Us
          </h2>
          <p className="text-[var(--color-primary-600)] leading-relaxed mb-6">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-2 text-[var(--color-primary-600)]">
            <p><strong>Email:</strong> raijintechug@gmail.com</p>
            <p><strong>Phone:</strong> +256 777 982 066</p>
            <p><strong>Address:</strong> Kampala, Uganda</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicySections;

