import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFileContract, FaHandshake, FaDollarSign, FaShieldAlt, FaGavel, FaExclamationTriangle } from 'react-icons/fa';
import { fadeInScrollTrigger } from '../../utils/gsapAnimations';

const TermsSections = () => {
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
      icon: <FaHandshake className="text-4xl" />,
      title: 'Services and Acceptance',
      content: `By accessing or using Raijin Tech Hub's services, you agree to be bound by these Terms of Service. These terms apply to all users, clients, and visitors.

• Service Agreement: When you engage our services, you enter into a binding contract governed by these terms and any additional service-specific agreements.
• Modifications: We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
• Eligibility: You must be at least 18 years old and have the legal capacity to enter into contracts under Ugandan law.
• Business Use: Our services are primarily designed for business and professional use.

If you do not agree with these terms, please do not use our services.`
    },
    {
      icon: <FaFileContract className="text-4xl" />,
      title: 'Service Scope and Deliverables',
      content: `Our services include but are not limited to:

• Custom Software Development: Web applications, mobile apps, and enterprise software solutions.
• IT Consultancy: Technology strategy, system architecture, and digital transformation advice.
• Cloud Solutions: Cloud migration, infrastructure setup, and ongoing management.
• UI/UX Design: User interface and user experience design services.
• Support and Maintenance: Ongoing technical support and system maintenance.

Specific deliverables, timelines, and pricing will be detailed in individual project agreements or statements of work (SOW). All services are subject to mutual agreement and written confirmation.`
    },
    {
      icon: <FaDollarSign className="text-4xl" />,
      title: 'Payment Terms and Pricing',
      content: `Payment terms and conditions:

• Pricing: Service fees are specified in individual project quotes and agreements. Prices are in Ugandan Shillings (UGX) or US Dollars (USD) as agreed.
• Payment Schedule: Typically structured as: 30% upfront deposit, 40% at project midpoint, 30% upon completion. Custom payment plans may be arranged.
• Payment Methods: We accept bank transfers, mobile money (MTN, Airtel), credit cards, and international wire transfers.
• Late Payments: Invoices are due within 14 days of issuance. Late payments may incur a 5% monthly interest charge and may result in service suspension.
• Refunds: Deposits are non-refundable once work has commenced. Refunds for undelivered services will be processed within 30 days.
• Additional Costs: Third-party services, hosting, licenses, or hardware are billed separately and require client approval.`
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Intellectual Property Rights',
      content: `Ownership and licensing of deliverables:

• Client Ownership: Upon full payment, you own all custom code, designs, and documentation created specifically for your project.
• Source Code: Complete source code is provided upon project completion and final payment.
• License Grant: We grant you a perpetual, worldwide, non-exclusive license to use the deliverables.
• Our IP: We retain ownership of our proprietary tools, frameworks, methodologies, and pre-existing code libraries used in projects.
• Third-Party Components: Some projects may incorporate third-party open-source software subject to their respective licenses.
• Portfolio Rights: We reserve the right to showcase completed projects in our portfolio unless otherwise agreed in writing.

All intellectual property transfers are documented in writing and effective upon full payment.`
    },
    {
      icon: <FaGavel className="text-4xl" />,
      title: 'Warranties and Liabilities',
      content: `Service warranties and limitation of liability:

• Service Quality: We warrant that services will be performed in a professional manner consistent with industry standards.
• Warranty Period: Bug fixes and corrections for 30-90 days post-delivery (as specified in project agreement) at no additional cost.
• No Other Warranties: Except as expressly stated, services are provided "as is" without warranties of any kind, express or implied.
• Limitation of Liability: Our total liability shall not exceed the total fees paid for the specific project in question.
• Exclusions: We are not liable for indirect, incidental, consequential, or special damages, including lost profits or data loss.
• Client Responsibilities: You are responsible for providing accurate information, timely feedback, and access to necessary resources.
• Force Majeure: We are not liable for delays or failures caused by circumstances beyond our reasonable control.`
    },
    {
      icon: <FaExclamationTriangle className="text-4xl" />,
      title: 'Confidentiality and Data Protection',
      content: `Protection of confidential information:

• Mutual Confidentiality: Both parties agree to maintain confidentiality of proprietary and sensitive information shared during the engagement.
• Definition: Confidential information includes business strategies, technical data, user information, and any information marked as confidential.
• Exceptions: Information that is publicly available, independently developed, or lawfully obtained from third parties is not confidential.
• Data Protection: We process personal data in accordance with our Privacy Policy and applicable Ugandan data protection laws.
• Security Measures: We implement industry-standard security measures to protect your data and systems.
• Data Breach: In the unlikely event of a data breach, we will notify you within 72 hours and take immediate corrective action.`
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
          Welcome to Raijin Tech Hub. These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (the &quot;Client&quot;) and Raijin Tech Hub (the &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations of Uganda.
        </p>
      </motion.div>

      {/* Terms Sections */}
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
        {/* Termination */}
        <div className="p-8 rounded-3xl bg-[var(--color-bg-card)] shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]">
          <h2 className="text-2xl font-bold text-[var(--color-primary-600)] mb-4">
            Termination
          </h2>
          <p className="text-[var(--color-primary-600)] leading-relaxed">
            Either party may terminate a project agreement with 30 days written notice. Upon termination, you must pay for all work completed up to the termination date. We reserve the right to immediately terminate services for breach of these Terms, non-payment, or illegal activities. Upon termination, we will provide all work completed to date, and you will retain license to use delivered components per the agreed terms.
          </p>
        </div>

        {/* Dispute Resolution */}
        <div className="p-8 rounded-3xl bg-[var(--color-bg-card)] shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]">
          <h2 className="text-2xl font-bold text-[var(--color-primary-600)] mb-4">
            Dispute Resolution and Governing Law
          </h2>
          <p className="text-[var(--color-primary-600)] leading-relaxed mb-4">
            <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the Republic of Uganda, without regard to conflict of law principles.
          </p>
          <p className="text-[var(--color-primary-600)] leading-relaxed mb-4">
            <strong>Dispute Resolution:</strong> In the event of any dispute arising from these Terms or our services, the parties agree to first attempt resolution through good faith negotiations. If unresolved within 30 days, disputes shall be submitted to mediation in Kampala, Uganda.
          </p>
          <p className="text-[var(--color-primary-600)] leading-relaxed">
            <strong>Jurisdiction:</strong> If mediation fails, disputes shall be subject to the exclusive jurisdiction of the courts of Uganda, and both parties consent to the jurisdiction and venue of such courts.
          </p>
        </div>

        {/* Indemnification */}
        <div className="p-8 rounded-3xl bg-[var(--color-bg-card)] shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]">
          <h2 className="text-2xl font-bold text-[var(--color-primary-600)] mb-4">
            Indemnification
          </h2>
          <p className="text-[var(--color-primary-600)] leading-relaxed">
            You agree to indemnify, defend, and hold harmless Raijin Tech Hub, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from: (a) your use of our services, (b) your breach of these Terms, (c) your violation of any law or rights of a third party, or (d) content or information you provide to us.
          </p>
        </div>

        {/* Severability */}
        <div className="p-8 rounded-3xl bg-[var(--color-bg-card)] shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]">
          <h2 className="text-2xl font-bold text-[var(--color-primary-600)] mb-4">
            Severability and Entire Agreement
          </h2>
          <p className="text-[var(--color-primary-600)] leading-relaxed mb-4">
            <strong>Severability:</strong> If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>
          <p className="text-[var(--color-primary-600)] leading-relaxed">
            <strong>Entire Agreement:</strong> These Terms, together with any project-specific agreements and our Privacy Policy, constitute the entire agreement between you and Raijin Tech Hub regarding our services and supersede all prior agreements and understandings, whether written or oral.
          </p>
        </div>

        {/* Contact Information */}
        <div className="p-8 rounded-3xl bg-[var(--color-bg-card)] text-center shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-600)] mb-4">
            Questions About These Terms?
          </h2>
          <p className="text-[var(--color-primary-600)] leading-relaxed mb-6">
            If you have any questions or concerns about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2 text-[var(--color-primary-600)]">
            <p><strong>Email:</strong> raijintechug@gmail.com</p>
            <p><strong>Phone:</strong> +256 777 982 066</p>
            <p><strong>Address:</strong> Kampala, Uganda</p>
          </div>
          <p className="mt-6 text-sm text-[var(--color-primary-500)]/60">
            By using our services, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsSections;

