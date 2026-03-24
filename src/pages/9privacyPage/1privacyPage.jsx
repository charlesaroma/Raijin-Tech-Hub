import SEO from "../../components/SEO";
import { BreadcrumbStructuredData } from "../../components/StructuredData";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const PrivacyPolicyPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const lastUpdated = "March 24, 2026";
  const effectiveDate = "March 24, 2026";

  const sections = [
    {
      id: "introduction",
      icon: "mdi:shield-check",
      title: "Introduction & Scope",
      content: `Raijin Tech Hub ("Company," "we," "us," or "our") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you:

• Visit our website at raijintechhub.com
• Use our IT services, software development, or consultancy services
• Communicate with us via email, phone, WhatsApp, or contact forms
• Engage with our AI chatbot or automated systems
• Subscribe to our newsletters or marketing communications

This policy applies to all data processing activities conducted by Raijin Tech Hub, whether you are a client, prospective client, website visitor, or third-party service provider. By accessing our services, you consent to the practices described in this Privacy Policy.`
    },
    {
      id: "definitions",
      icon: "mdi:book-open-variant",
      title: "Definitions",
      content: `For the purposes of this Privacy Policy:

• <b>"Personal Data"</b> means any information relating to an identified or identifiable natural person ("Data Subject").
• <b>"Processing"</b> means any operation performed on Personal Data, including collection, storage, use, disclosure, or deletion.
• <b>"Data Controller"</b> means Raijin Tech Hub, which determines the purposes and means of processing Personal Data.
• <b>"Data Processor"</b> means any entity that processes Personal Data on behalf of the Data Controller.
• <b>"Data Subject"</b> means the individual whose Personal Data is being processed.
• <b>"Consent"</b> means any freely given, specific, informed, and unambiguous indication of the Data Subject's wishes.`
    },
    {
      id: "collection",
      icon: "mdi:database-import",
      title: "Information We Collect",
      content: `<b>Direct Information</b>
• Name, email, phone number, company details
• Project specifications and requirements
• Business correspondence and communications
• Payment information and billing addresses

<b>Technical Information</b>
• IP address and device information
• Browser type and operating system
• Service usage patterns and analytics
• Error logs and performance data

<b>Why We Collect This</b>
• To provide and improve our services
• For billing and administrative purposes
• To ensure security and prevent fraud
• To communicate with you effectively`
    },
    {
      id: "usage",
      icon: "mdi:cog-transfer",
      title: "How We Use Your Information",
      content: `<b>Service Delivery</b>
• Develop and deliver software solutions
• Provide IT consultancy and technical support
• Manage project timelines and deliverables
• Process payments and handle billing

<b>Communication</b>
• Send project updates and progress reports
• Respond to your inquiries and requests
• Provide technical support and troubleshooting
• Share service announcements (with consent)

<b>Improvement & Security</b>
• Analyze usage to improve our services
• Train our team to serve you better
• Protect against fraud and security threats
• Comply with legal requirements`
    },
    {
      id: "sharing",
      icon: "mdi:share-variant",
      title: "Data Sharing",
      content: `<b>We Never Sell Your Data</b>

<b>Service Providers</b>
• Cloud hosting (AWS, Google Cloud) for secure storage
• Payment processors (Mobile Money, banks) for transactions
• Email services for professional communications

<b>Legal Requirements</b>
• When required by law or court order
• To protect our rights and prevent fraud
• In connection with business transfers (with proper safeguards)

<b>Your Consent</b>
• Only when you explicitly agree to specific sharing`
    },
    {
      id: "security",
      icon: "mdi:shield-lock",
      title: "Data Security Measures",
      content: `<b>Technical Protection</b>
• End-to-end encryption for sensitive data
• Secure servers with regular backups
• Firewall protection and intrusion detection
• Regular security updates and patches

<b>Access Control</b>
• Limited access to authorized personnel only
• Strong password policies and 2FA
• Regular security training for our team
• Audit logs for all data access

<b>Compliance</b>
• Ugandan Data Protection Act, 2019
• International security standards (ISO 27001)
• Regular security audits and assessments`
    },
    {
      id: "retention",
      icon: "mdi:clock-outline",
      title: "Data Retention & Deletion",
      content: `<b>How Long We Keep Data</b>
• Project data: 7 years after completion
• Financial records: 7 years (legal requirement)
• Marketing data: Until you opt out
• Website analytics: 26 months

<b>When We Delete Data</b>
• When retention period expires
• When you withdraw consent
• When data is no longer needed
• When legally required`
    },
    {
      id: "cookies",
      icon: "mdi:cookie",
      title: "Cookies & Tracking",
      content: `<b>Essential Cookies</b>
• Required for website functionality
• Maintain login sessions
• Enable security features

<b>Analytics Cookies</b>
• Help us understand website usage
• Improve user experience
• Anonymous usage statistics

<b>Your Choices</b>
• Accept or reject non-essential cookies
• Clear cookies from your browser settings
• Continue using our site with essential cookies only`
    },
    {
      id: "rights",
      icon: "mdi:account-key",
      title: "Your Privacy Rights",
      content: `<b>Access & Correction</b>
• Request access to your personal data
• Correct inaccurate or incomplete information
• Update your contact preferences

<b>Control & Choices</b>
• Opt out of marketing communications
• Request data deletion when legally permitted
• Restrict processing of sensitive information
• Withdraw consent where applicable

<b>How to Exercise Rights</b>
Email: raijintechug@gmail.com
Phone: +256 777 982 066
We respond within 30 days as required by law.`
    },
    {
      id: "children",
      icon: "mdi:account-child",
      title: "Children's Privacy",
      content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect Personal Data from children.

If you are a parent or guardian and believe that your child has provided us with Personal Data without your consent, please contact us immediately at raijintechug@gmail.com.

Upon becoming aware that we have collected Personal Data from a child without verification of parental consent, we will take steps to:
• Delete that information from our servers
• Notify any third-party processors to delete the data
• Review and improve our age verification processes

We encourage parents and guardians to monitor their children's online activities and teach them about safe internet practices.`
    },
    {
      id: "automated",
      icon: "mdi:robot",
      title: "Automated Decision-Making & AI",
      content: `We use automated technologies including AI chatbots and machine learning systems:

<b>AI Chatbot</b>
Our website features an AI-powered chatbot that:
• Provides automated responses to common inquiries
• Collects conversation data for quality improvement
• Offers WhatsApp handoff for complex queries
• Does not make decisions affecting your legal rights

<b>Data Processing in AI Systems</b>
• Conversations may be logged and analyzed for training purposes
• Personal Data shared in chat conversations is subject to this Privacy Policy
• You may request deletion of chat history at any time
• Conversations with our chatbot do not constitute legal advice or binding commitments

<b>Automated Decision-Making</b>
We do not use automated decision-making processes that produce legal effects or similarly significant effects on you, except:
• Fraud detection and prevention systems
• Spam filtering and security monitoring
• Creditworthiness checks for payment plans (with human review)

<b>Your Rights Regarding Automated Processing</b>
You have the right to:
• Be informed about automated processing
• Obtain human intervention in automated decisions
• Express your point of view and contest decisions`
    },
    {
      id: "changes",
      icon: "mdi:update",
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy periodically to reflect changes in:
• Our business practices and service offerings
• Legal and regulatory requirements
• Technology and security standards
• Industry best practices

<b>Notification of Changes</b>
• Material changes will be notified via email to registered clients
• A prominent notice will be posted on our website for 30 days
• The "Last Updated" date at the top of this policy will be revised
• For significant changes affecting your rights, we will request renewed consent where required

<b>Effective Date</b>
Changes take effect immediately upon posting unless otherwise stated. Continued use of our services after changes constitutes acceptance of the revised policy.

<b>Previous Versions</b>
We maintain archived versions of this Privacy Policy. Contact us to request copies of previous versions.`
    },
    {
      id: "contact",
      icon: "mdi:contact-mail",
      title: "Contact & Questions",
      content: `<b>Privacy Contact</b>
<b>Raijin Tech Hub</b>
Email: raijintechug@gmail.com
Phone: +256 777 982 066
Address: Kampala, Uganda

<b>Response Times</b>
• Privacy inquiries: Within 7 days
• Data access requests: Within 30 days
• Emergency requests: Within 24 hours

<b>Complaints</b>
If you have concerns about our privacy practices, contact us first. If unresolved, you may complain to the Uganda Personal Data Protection Office.`
    }
  ];

  const faqs = [
    {
      question: "Is my data shared with other companies?",
      answer: "We do not sell your data. We only share information with trusted service providers necessary for service delivery (hosting, payment processing) and when legally required. All third parties are contractually bound to protect your data."
    },
    {
      question: "How can I delete my account and data?",
      answer: "Contact us at raijintechug@gmail.com with your deletion request. We'll process it within 30 days, though some data may be retained for legal compliance (financial records for 7 years per tax law)."
    },
    {
      question: "Do you comply with GDPR?",
      answer: "Yes, we align our practices with GDPR principles including lawful basis for processing, data minimization, purpose limitation, and individual rights. We process data under Ugandan law while maintaining international standards."
    },
    {
      question: "What happens to my data after a project ends?",
      answer: "Project data is retained for 7 years for legal, tax, and support purposes. After this period, it's securely deleted. You may request earlier deletion, though this may affect warranty claims and future support."
    },
    {
      question: "Are my conversations with the AI chatbot private?",
      answer: "Chat conversations are logged for quality improvement but are not shared with third parties. You can request deletion of your chat history at any time by contacting us."
    }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy | Raijin Tech Hub Uganda"
        description="Comprehensive privacy policy detailing how Raijin Tech Hub collects, uses, protects, and manages your personal data in compliance with Ugandan and international data protection standards."
        keywords="privacy policy, data protection, GDPR, Uganda privacy laws, data security, personal information, Raijin Tech Hub"
      />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-(--color-primary-900) via-(--color-primary-800) to-(--color-secondary-900)">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-(--color-secondary-500)/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--color-accent-500)/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6">
              <Icon icon="mdi:shield-check" className="w-4 h-4" />
              <span>Your Data, Your Rights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              We are committed to protecting your privacy and ensuring your personal data is handled securely and transparently.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <Icon icon="mdi:calendar" className="w-4 h-4" />
                Last Updated: {lastUpdated}
              </span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="flex items-center gap-2">
                <Icon icon="mdi:file-document-check" className="w-4 h-4" />
                Effective: {effectiveDate}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-(--color-bg-primary)">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Area */}
          <div className="space-y-8">
              {/* Introduction Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-(--color-primary-50) to-white rounded-3xl p-8 border border-(--color-primary-100) shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-(--color-primary-600) flex items-center justify-center shrink-0">
                    <Icon icon="mdi:information" className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-(--color-primary-900) mb-2">Important Notice</h2>
                    <p className="text-(--color-text-secondary) leading-relaxed">
                      This Privacy Policy is a legally binding document that governs how Raijin Tech Hub collects, processes, and protects your personal data. By using our services, you acknowledge that you have read and understood this policy. We recommend reviewing this document periodically as it may be updated to reflect changes in our practices or legal requirements.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Policy Sections */}
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden scroll-mt-28"
                >
                  {/* Section Header */}
                  <div className="p-6 sm:p-8 border-b border-gray-100 bg-linear-to-r from-gray-50/50 to-white">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--color-primary-500) to-(--color-secondary-500) flex items-center justify-center shrink-0 shadow-lg">
                        <Icon icon={section.icon} className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-semibold text-(--color-secondary-600) bg-(--color-secondary-50) px-2 py-1 rounded-full">
                            Section {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-(--color-primary-900)">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-6 sm:p-8">
                    {section.subsections ? (
                      <div className="space-y-6">
                        {section.subsections.map((sub, subIndex) => (
                          <div key={subIndex} className="bg-gray-50 rounded-2xl p-5">
                            <h3 className="font-semibold text-(--color-primary-800) mb-3 flex items-center gap-2">
                              <Icon icon="mdi:chevron-right" className="w-5 h-5 text-(--color-secondary-500)" />
                              {sub.subtitle}
                            </h3>
                            {sub.items ? (
                              <ul className="space-y-2">
                                {sub.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-3 text-(--color-text-secondary)">
                                    <span className="w-1.5 h-1.5 rounded-full bg-(--color-secondary-500) mt-2 shrink-0"></span>
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-(--color-text-secondary) leading-relaxed whitespace-pre-line">{sub.content}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="prose prose-gray max-w-none">
                        <p className="text-(--color-text-secondary) leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="p-6 sm:p-8 border-b border-gray-100 bg-linear-to-r from-(--color-secondary-50) to-white">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--color-secondary-500) to-(--color-accent-500) flex items-center justify-center shrink-0 shadow-lg">
                      <Icon icon="mdi:frequently-asked-questions" className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-(--color-primary-900)">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <span className="font-medium text-(--color-primary-800) pr-4">{faq.question}</span>
                          <Icon
                            icon={expandedFaq === index ? "mdi:chevron-up" : "mdi:chevron-down"}
                            className="w-5 h-5 text-(--color-secondary-500) shrink-0"
                          />
                        </button>
                        {expandedFaq === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="px-4 pb-4"
                          >
                            <p className="text-(--color-text-secondary) leading-relaxed pt-2 border-t border-gray-100">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-(--color-primary-600) via-(--color-primary-700) to-(--color-secondary-600) rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                    <Icon icon="mdi:message-question" className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Have Questions About Your Privacy?
                  </h2>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Our Data Protection Officer is available to assist you with any privacy-related inquiries or to help you exercise your data rights.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="mailto:raijintechug@gmail.com"
                      className="inline-flex items-center gap-2 bg-white text-(--color-primary-700) px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors cursor-pointer shadow-lg"
                    >
                      <Icon icon="mdi:email" className="w-5 h-5" />
                      Email DPO
                    </a>
                    <a
                      href="tel:+256777982066"
                      className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      <Icon icon="mdi:phone" className="w-5 h-5" />
                      +256 777 982 066
                    </a>
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
