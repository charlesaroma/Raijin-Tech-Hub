import SEO from "../../components/SEO";
import { BreadcrumbStructuredData } from "../../components/StructuredData";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const TermsOfServicePage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const lastUpdated = "March 24, 2026";
  const effectiveDate = "March 24, 2026";

  const sections = [
    {
      id: "acceptance",
      icon: "mdi:handshake",
      title: "Acceptance of Terms",
      content: `These Terms of Service constitute a legally binding agreement between Raijin Tech Hub and you. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.

<b>Eligibility</b>
You must be at least 18 years old and have legal capacity to enter into contracts under Ugandan law.`
    },
    {
      id: "services",
      icon: "mdi:application-cog",
      title: "Services & Deliverables",
      content: `<b>Core Services</b>
• Custom Software Development (web, mobile, enterprise)
• IT Consultancy (strategy, architecture, transformation)
• AI Integration & Chatbot Solutions
• UI/UX Design & Development
• Support & Maintenance

<b>Service Process</b>
1. Initial consultation and requirement gathering
2. Project proposal with scope, timeline, and pricing
3. Development, testing, and quality assurance
4. Delivery, deployment, and handover
5. Post-delivery support and warranty

<b>Client Responsibilities</b>
• Provide accurate and timely information
• Ensure availability for feedback and approvals
• Make timely payments as agreed
• Test deliverables and provide acceptance`
    },
    {
      id: "payment",
      icon: "mdi:cash-multiple",
      title: "Payment Terms & Pricing",
      content: `<b>Payment Structure</b>
• <b>Initial Deposit</b>: 30% due upon contract signing
• <b>Milestone Payment</b>: 40% due at agreed milestones
• <b>Final Payment</b>: 30% due upon project completion

<b>Payment Methods</b>
• Bank transfers to our corporate accounts
• Mobile money: MTN Mobile Money, Airtel Money
• Credit/debit cards (secure online payment)
• International wire transfers

<b>Refund Policy</b>
• Deposits are non-refundable once work commences
• Partial refunds for undelivered services
• Processing time: 30 days for approved refunds`
    },
    {
      id: "intellectual-property",
      icon: "mdi:copyright",
      title: "Intellectual Property Rights",
      content: `<b>Client Ownership</b>
Upon full payment, you own:
• Complete source code for custom-developed software
• Design files, mockups, and UI elements
• Technical documentation and user manuals
• Database schemas and migration scripts

<b>Our Intellectual Property</b>
We retain ownership of:
• Pre-existing code libraries and frameworks
• Proprietary methodologies and processes
• Our brand, trademarks, and marketing materials

<b>License Grant</b>
We grant you perpetual, worldwide, non-exclusive, royalty-free license to:
• Use, modify, and distribute custom deliverables
• Create derivative works based on delivered software
• Use deliverables for your business purposes`
    },
    {
      id: "warranties",
      icon: "mdi:shield-check",
      title: "Warranties & Disclaimers",
      content: `<b>Service Quality Warranty</b>
We warrant that services will be performed:
• In a professional and workmanlike manner
• In accordance with industry standards
• In compliance with agreed specifications
• Using reasonable care and skill

<b>Technical Warranty</b>
• <b>Bug Fixes</b>: Free correction for 30-90 days post-delivery
• <b>Compatibility</b>: Software functions on specified platforms
• <b>Performance</b>: Meets agreed performance benchmarks

<b>Limitation of Liability</b>
Our total liability shall not exceed the total fees paid for the specific project. We shall not be liable for indirect, incidental, or consequential damages.`
    },
    {
      id: "confidentiality",
      icon: "mdi:lock",
      title: "Confidentiality & Data Protection",
      content: `<b>Mutual Confidentiality</b>
Both parties agree to maintain confidentiality of:
• Business strategies and financial information
• Technical specifications and source code
• Customer lists and pricing information
• Trade secrets and proprietary processes

<b>Data Protection</b>
We process personal data in accordance with:
• Ugandan Data Protection and Privacy Act, 2019
• GDPR principles for international clients
• Industry-specific compliance requirements

<b>Security Measures</b>
• Encryption of data in transit and at rest
• Access controls and authentication systems
• Regular security audits and assessments`
    },
    {
      id: "termination",
      icon: "mdi:stop-circle",
      title: "Termination & Suspension",
      content: `<b>Termination by Client</b>
• With 30 days written notice for convenience
• Immediately if we materially breach terms and fail to cure within 14 days
• If we become insolvent or cease business operations

<b>Termination by Company</b>
• With 30 days written notice for convenience
• Immediately if you breach payment terms
• If you provide false or fraudulent information
• If you engage in illegal activities

<b>Effects of Termination</b>
• You must pay for all work completed to date
• We provide all completed work and deliverables paid for
• Both parties return or destroy confidential information`
    },
    {
      id: "dispute-resolution",
      icon: "mdi:scale-balance",
      title: "Dispute Resolution & Governing Law",
      content: `<b>Governing Law</b>
These Terms are governed by the laws of the Republic of Uganda.

<b>Dispute Resolution Process</b>
<b>1. Good Faith Negotiation</b>
Both parties attempt direct resolution for 30 days.

<b>2. Mediation</b>
If negotiations fail, disputes go to mediation in Kampala, Uganda.

<b>3. Arbitration</b>
If mediation fails, disputes are resolved through binding arbitration under the Arbitration and Conciliation Act, Cap 7.

<b>Court Jurisdiction</b>
Parties agree to submit to the Commercial Division of the High Court of Uganda.`
    },
    {
      id: "contact",
      icon: "mdi:contact-mail",
      title: "Contact Information & Support",
      content: `<b>Raijin Tech Hub</b>
Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EAT
Email: raijintechug@gmail.com
Phone: +256 777 982 066
WhatsApp: +256 777 982 066
Address: Kampala, Uganda

<b>Emergency Support</b>
• Emergency Hotline: Available 24/7 for critical issues
• Response Time: Within 2 hours for emergencies

<b>General Inquiries</b>
• Sales: sales@raijintechhub.com
• Support: support@raijintechhub.com
• Billing: finance@raijintechhub.com
• Legal: legal@raijintechhub.com`
    }
  ];

  const faqs = [
    {
      question: "Can I cancel a project after it has started?",
      answer: "Yes, you can cancel with 30 days written notice. You'll need to pay for all work completed up to the cancellation date, and we'll provide all deliverables paid for to date."
    },
    {
      question: "What happens if there's a dispute?",
      answer: "We follow a structured process: first good faith negotiations (30 days), then mediation in Kampala, and finally binding arbitration if needed. All disputes are governed by Ugandan law."
    },
    {
      question: "Do I own the source code after payment?",
      answer: "Yes, upon full payment, you own all custom code and deliverables created specifically for your project. We retain ownership of our pre-existing tools and frameworks."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, mobile money (MTN, Airtel), credit/debit cards, and international wire transfers. Payment is typically 30% deposit, 40% at milestones, 30% on completion."
    },
    {
      question: "How long is the warranty period?",
      answer: "We provide free bug fixes for 30-90 days post-delivery as specified in your project agreement. Extended support and maintenance plans are available for ongoing coverage."
    }
  ];

  return (
    <>
      <SEO
        title="Terms of Service | Raijin Tech Hub Uganda"
        description="Comprehensive terms of service governing Raijin Tech Hub's IT services, software development, and consultancy. Professional legal protection for clients and company."
        keywords="terms of service, service agreement, legal terms, Uganda IT services, software development terms, professional services agreement"
      />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms-of-service" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-(--color-secondary-900) via-(--color-secondary-800) to-(--color-primary-900)">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHJlY3QgeD0iMjgiIHk9IjI4IiB3aWR0aD0iNCIgaGVpZ2h0PSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-(--color-primary-500)/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-(--color-accent-500)/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6">
              <Icon icon="mdi:file-document-check" className="w-4 h-4" />
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              Professional terms governing our IT services, software development, and consultancy relationships. Clear, fair, and comprehensive legal protection for all parties.
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
                className="bg-linear-to-br from-(--color-secondary-50) to-white rounded-3xl p-8 border border-(--color-secondary-100) shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-(--color-secondary-600) flex items-center justify-center shrink-0">
                    <Icon icon="mdi:information" className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-(--color-secondary-900) mb-2">Binding Agreement</h2>
                    <p className="text-(--color-text-secondary) leading-relaxed">
                      These Terms of Service constitute a legally binding agreement between you and Raijin Tech Hub. By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these terms. We recommend reviewing this document carefully and consulting legal counsel if you have any questions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Terms Sections */}
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
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--color-secondary-500) to-(--color-primary-500) flex items-center justify-center shrink-0 shadow-lg">
                        <Icon icon={section.icon} className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-semibold text-(--color-primary-600) bg-(--color-primary-50) px-2 py-1 rounded-full">
                            Section {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-(--color-secondary-900)">
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
                            <h3 className="font-semibold text-(--color-secondary-800) mb-3 flex items-center gap-2">
                              <Icon icon="mdi:chevron-right" className="w-5 h-5 text-(--color-primary-500)" />
                              {sub.subtitle}
                            </h3>
                            {sub.items ? (
                              <ul className="space-y-2">
                                {sub.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-3 text-(--color-text-secondary)">
                                    <span className="w-1.5 h-1.5 rounded-full bg-(--color-primary-500) mt-2 shrink-0"></span>
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
                <div className="p-6 sm:p-8 border-b border-gray-100 bg-linear-to-r from-(--color-primary-50) to-white">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--color-primary-500) to-(--color-accent-500) flex items-center justify-center shrink-0 shadow-lg">
                      <Icon icon="mdi:frequently-asked-questions" className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-(--color-secondary-900)">
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
                          <span className="font-medium text-(--color-secondary-800) pr-4">{faq.question}</span>
                          <Icon
                            icon={expandedFaq === index ? "mdi:chevron-up" : "mdi:chevron-down"}
                            className="w-5 h-5 text-(--color-primary-500) shrink-0"
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
                className="bg-linear-to-br from-(--color-secondary-600) via-(--color-secondary-700) to-(--color-primary-600) rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                    <Icon icon="mdi:handshake" className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Ready to Work Together?
                  </h2>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Let&apos;s discuss your project requirements and how we can help bring your vision to life with our professional IT services.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="mailto:raijintechug@gmail.com"
                      className="inline-flex items-center gap-2 bg-white text-(--color-secondary-700) px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors cursor-pointer shadow-lg"
                    >
                      <Icon icon="mdi:email" className="w-5 h-5" />
                      Start Your Project
                    </a>
                    <a
                      href="tel:+256777982066"
                      className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      <Icon icon="mdi:phone" className="w-5 h-5" />
                      Call Us
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

export default TermsOfServicePage;
