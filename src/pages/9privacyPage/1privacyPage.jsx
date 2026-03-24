import SEO from "../../components/SEO";
import { BreadcrumbStructuredData } from "../../components/StructuredData";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(null);
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

• **"Personal Data"** means any information relating to an identified or identifiable natural person ("Data Subject").
• **"Processing"** means any operation performed on Personal Data, including collection, storage, use, disclosure, or deletion.
• **"Data Controller"** means Raijin Tech Hub, which determines the purposes and means of processing Personal Data.
• **"Data Processor"** means any entity that processes Personal Data on behalf of the Data Controller.
• **"Data Subject"** means the individual whose Personal Data is being processed.
• **"Consent"** means any freely given, specific, informed, and unambiguous indication of the Data Subject's wishes.`
    },
    {
      id: "collection",
      icon: "mdi:database",
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "Personal Information You Provide",
          items: [
            "Identity Data: Full name, company name, job title, and professional details",
            "Contact Data: Email address, phone number, postal address, and WhatsApp number",
            "Financial Data: Bank account details, payment card information, and billing addresses",
            "Technical Requirements: Project specifications, system requirements, and business needs",
            "Communications: Records of correspondence, meeting notes, and support tickets",
            "Marketing Preferences: Your preferences for receiving marketing communications"
          ]
        },
        {
          subtitle: "Information Automatically Collected",
          items: [
            "Technical Data: IP address, browser type and version, operating system, device information",
            "Usage Data: Pages visited, time spent on pages, navigation paths, click patterns",
            "Location Data: Approximate geographic location based on IP address",
            "Cookie Data: Information stored in cookies and similar tracking technologies",
            "Error Data: Crash reports, error logs, and performance metrics"
          ]
        },
        {
          subtitle: "Information from Third Parties",
          items: [
            "Analytics Providers: Google Analytics, visitor behavior and website usage statistics",
            "Payment Processors: Transaction confirmation and payment status from mobile money/banks",
            "Business Partners: Referrals and professional networking information",
            "Public Sources: Publicly available business information and professional profiles"
          ]
        }
      ]
    },
    {
      id: "legal-basis",
      icon: "mdi:scale-balance",
      title: "Legal Basis for Processing",
      content: `We process your Personal Data based on the following legal grounds under the Ugandan Data Protection and Privacy Act, 2019, and applicable international standards:

**1. Contractual Necessity**
Processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract. This includes:
• Providing IT services and software development as agreed
• Processing payments and managing billing
• Delivering project deliverables and documentation
• Providing ongoing support and maintenance

**2. Legitimate Interests**
Processing is necessary for our legitimate business interests, provided your rights do not override these interests:
• Improving our services and website functionality
• Network and information security
• Fraud prevention and detection
• Business analytics and reporting
• Marketing to existing clients about related services

**3. Legal Compliance**
Processing is necessary to comply with legal obligations:
• Tax and accounting record-keeping requirements
• Regulatory compliance under Ugandan law
• Law enforcement requests and court orders
• Data retention obligations

**4. Consent**
Where required by law, we obtain your explicit consent for:
• Marketing communications and promotional materials
• Use of non-essential cookies and tracking technologies
• Processing sensitive personal data (if applicable)
• Sharing data with third parties beyond service provision

**5. Vital Interests**
Processing may be necessary to protect your vital interests or those of another person in emergency situations.`
    },
    {
      id: "usage",
      icon: "mdi:cog-transfer",
      title: "How We Use Your Information",
      subsections: [
        {
          subtitle: "Service Provision",
          items: [
            "Deliver software development and IT consultancy services as contracted",
            "Communicate project updates, milestones, and deliverables",
            "Provide technical support and troubleshooting assistance",
            "Manage project timelines, resources, and deliverables",
            "Process payments, invoices, and financial transactions"
          ]
        },
        {
          subtitle: "Business Operations",
          items: [
            "Analyze service usage to improve functionality and user experience",
            "Conduct internal research and statistical analysis",
            "Train staff and improve service quality",
            "Manage our IT infrastructure and security systems",
            "Develop new products, services, and features"
          ]
        },
        {
          subtitle: "Communications",
          items: [
            "Send administrative information about our services",
            "Respond to inquiries, requests, and feedback",
            "Provide information about service changes or updates",
            "Send marketing communications with your consent (which you can opt-out of at any time)"
          ]
        },
        {
          subtitle: "Legal and Security",
          items: [
            "Comply with legal obligations and regulatory requirements",
            "Protect against fraud, unauthorized transactions, and security threats",
            "Enforce our terms of service and legal agreements",
            "Establish, exercise, or defend legal claims",
            "Monitor and ensure network and information security"
          ]
        }
      ]
    },
    {
      id: "sharing",
      icon: "mdi:share-variant",
      title: "Data Sharing & Third Parties",
      content: `We do not sell your Personal Data. We may share your information in the following circumstances:

**Service Providers & Processors**
We engage trusted third-party service providers who assist in our operations:
• Cloud hosting providers (AWS, Google Cloud, Microsoft Azure) for data storage
• Payment processors (MTN Mobile Money, Airtel Money, banks) for transaction processing
• Email service providers (Google Workspace, SendGrid) for communications
• Analytics providers (Google Analytics) for website usage analysis
• Software development tools and version control systems

All service providers are contractually bound to process data only for specified purposes, maintain confidentiality, and implement appropriate security measures.

**Professional Advisers**
We may share data with:
• Legal advisers for contract review and dispute resolution
• Accountants and auditors for financial compliance
• Insurance providers for professional liability coverage

**Legal and Regulatory Disclosures**
We may disclose your information:
• To comply with legal obligations, court orders, or regulatory requirements
• To respond to lawful requests from public authorities
• To protect our rights, property, or safety, and that of our clients or others
• In connection with business transfers, mergers, acquisitions, or asset sales

**With Your Consent**
We may share your information with third parties when you have given explicit consent for specific purposes.

**International Transfers**
Your data may be transferred to and processed in countries outside Uganda. We ensure such transfers comply with applicable data protection laws through:
• Standard Contractual Clauses approved by relevant authorities
• Adequacy decisions where applicable countries provide adequate protection
• Binding Corporate Rules for intra-group transfers`
    },
    {
      id: "security",
      icon: "mdi:lock",
      title: "Data Security Measures",
      content: `We implement comprehensive technical and organizational measures to protect your Personal Data:

**Technical Safeguards**
• **Encryption**: All data transmission uses TLS 1.3 encryption. Sensitive data at rest is encrypted using AES-256.
• **Access Controls**: Role-based access control (RBAC) limiting data access to authorized personnel only.
• **Authentication**: Multi-factor authentication (MFA) for all systems containing client data.
• **Firewalls & Network Security**: Enterprise-grade firewalls, intrusion detection systems, and network monitoring.
• **Regular Security Updates**: Automated security patching and vulnerability management.
• **Secure Development**: Code reviews, security testing, and secure coding practices.

**Organizational Measures**
• **Staff Training**: Regular data protection and security awareness training for all employees.
• **Confidentiality Agreements**: All staff sign confidentiality and data protection agreements.
• **Incident Response Plan**: Documented procedures for detecting, reporting, and responding to data breaches.
• **Data Minimization**: We collect and retain only data necessary for specified purposes.
• **Regular Audits**: Security assessments, penetration testing, and compliance audits.

**Breach Notification**
In the unlikely event of a personal data breach, we will:
• Notify the Personal Data Protection Office of Uganda within 72 hours where required
• Inform affected Data Subjects without undue delay when high risk
• Document all breaches, their effects, and remedial actions taken

While we strive to protect your data using industry-standard measures, no internet transmission or electronic storage is 100% secure. We cannot guarantee absolute security.`
    },
    {
      id: "retention",
      icon: "mdi:clock-outline",
      title: "Data Retention & Deletion",
      content: `We retain your Personal Data only for as long as necessary to fulfill the purposes for which it was collected, including:

**Retention Periods**
• **Client Project Data**: Retained for 7 years after project completion (for legal, tax, and accounting purposes)
• **Financial Records**: Retained for 7 years as required by Ugandan tax law
• **Marketing Data**: Retained until you opt-out or withdraw consent
• **Website Usage Data**: Retained for 26 months (Google Analytics standard)
• **Communication Records**: Retained for 3 years for quality assurance and legal purposes
• **Cookie Data**: Retained per browser settings, typically up to 13 months

**Deletion Criteria**
We will delete or anonymize your data when:
• The retention period expires
• You withdraw consent and no other legal basis applies
• You successfully exercise your right to erasure
• The data is no longer necessary for the original purpose
• Legal obligations no longer require retention

**Data Destruction**
When data is deleted, we ensure:
• Electronic data is permanently erased using secure deletion methods
• Physical records are shredded or destroyed securely
• Backup data is deleted in accordance with backup retention schedules
• Third-party processors are instructed to delete shared data`
    },
    {
      id: "cookies",
      icon: "mdi:cookie",
      title: "Cookies & Tracking Technologies",
      content: `Our website uses cookies and similar technologies to enhance user experience and analyze usage:

**Types of Cookies We Use**

**Essential Cookies (Required)**
These cookies are necessary for the website to function and cannot be disabled:
• Session management and authentication
• Security features and fraud prevention
• Load balancing and performance optimization
• User preferences (language, region)

**Analytics Cookies**
Help us understand how visitors interact with our website:
• Google Analytics: Page views, session duration, traffic sources
• Hotjar: User behavior, heatmaps, and feedback
• Page performance and error tracking

**Marketing Cookies**
Used to deliver relevant advertisements and track campaign effectiveness:
• Social media pixels (Facebook, LinkedIn, Twitter)
• Remarketing and retargeting cookies
• Conversion tracking

**Managing Cookies**
You can control cookies through:
• **Browser Settings**: Most browsers allow you to refuse or delete cookies
• **Cookie Consent Banner**: Adjust preferences when first visiting our site
• **Third-Party Tools**: Use opt-out tools provided by analytics and advertising networks

Please note that disabling cookies may affect website functionality and user experience.

**Do Not Track**
We respect "Do Not Track" browser signals and will not track users who have enabled this feature for non-essential purposes.`
    },
    {
      id: "rights",
      icon: "mdi:account-check",
      title: "Your Data Protection Rights",
      content: `Under the Ugandan Data Protection and Privacy Act, 2019, and applicable international standards, you have the following rights regarding your Personal Data:

**1. Right to Access**
You have the right to request confirmation of whether we process your Personal Data and, if so, access to that data including:
• The purposes of processing
• Categories of Personal Data processed
• Recipients or categories of recipients
• Retention period criteria
• Your other rights and how to exercise them

**2. Right to Rectification**
You may request correction of inaccurate or incomplete Personal Data. We will rectify errors within 30 days of verification.

**3. Right to Erasure ("Right to be Forgotten")**
You may request deletion of your Personal Data when:
• The data is no longer necessary for the original purpose
• You withdraw consent and no other legal basis applies
• You object to processing and there are no overriding legitimate grounds
• The data was unlawfully processed
• Deletion is required for legal compliance

**4. Right to Restrict Processing**
You may request limitation of processing in specific circumstances, such as when contesting accuracy of data or objecting to processing.

**5. Right to Data Portability**
You have the right to receive your Personal Data in a structured, commonly used, machine-readable format and transmit it to another controller.

**6. Right to Object**
You may object to processing based on legitimate interests or for direct marketing purposes at any time.

**7. Right to Withdraw Consent**
Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of processing before withdrawal.

**8. Right to Lodge a Complaint**
You have the right to complain to the Personal Data Protection Office of Uganda if you believe your data protection rights have been violated.

**Exercising Your Rights**
To exercise any of these rights, contact us at raijintechug@gmail.com. We will respond within 30 days and may request verification of your identity.`
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

**AI Chatbot**
Our website features an AI-powered chatbot that:
• Provides automated responses to common inquiries
• Collects conversation data for quality improvement
• Offers WhatsApp handoff for complex queries
• Does not make decisions affecting your legal rights

**Data Processing in AI Systems**
• Conversations may be logged and analyzed for training purposes
• Personal Data shared in chat conversations is subject to this Privacy Policy
• You may request deletion of chat history at any time
• Conversations with our chatbot do not constitute legal advice or binding commitments

**Automated Decision-Making**
We do not use automated decision-making processes that produce legal effects or similarly significant effects on you, except:
• Fraud detection and prevention systems
• Spam filtering and security monitoring
• Creditworthiness checks for payment plans (with human review)

**Your Rights Regarding Automated Processing**
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

**Notification of Changes**
• Material changes will be notified via email to registered clients
• A prominent notice will be posted on our website for 30 days
• The "Last Updated" date at the top of this policy will be revised
• For significant changes affecting your rights, we will request renewed consent where required

**Effective Date**
Changes take effect immediately upon posting unless otherwise stated. Continued use of our services after changes constitutes acceptance of the revised policy.

**Previous Versions**
We maintain archived versions of this Privacy Policy. Contact us to request copies of previous versions.`
    },
    {
      id: "contact",
      icon: "mdi:email-outline",
      title: "Contact Information",
      content: `For questions, concerns, or requests regarding this Privacy Policy or our data practices, contact our Data Protection Officer:

**Raijin Tech Hub**
Data Protection Officer
Email: raijintechug@gmail.com
Phone: +256 777 982 066
Address: Kampala, Uganda

**Response Time**
We aim to respond to all inquiries within:
• General questions: 2-3 business days
• Data subject requests: 30 days (as required by law)
• Data breach notifications: Without undue delay

**Regulatory Authority**
If you are unsatisfied with our response, you may contact:

Personal Data Protection Office of Uganda
Address: 3rd Floor, Communications House, Plot 1 Colville Street, Kampala
Email: info@pdpo.go.ug
Phone: +256 414 258 060`
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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sticky Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="p-4 bg-linear-to-r from-(--color-primary-600) to-(--color-secondary-600)">
                    <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                      <Icon icon="mdi:format-list-bulleted" className="w-4 h-4" />
                      Contents
                    </h3>
                  </div>
                  <nav className="p-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                    {sections.map((section, index) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                          setActiveSection(section.id);
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                          activeSection === section.id
                            ? "bg-(--color-primary-50) text-(--color-primary-700) font-medium"
                            : "text-gray-600 hover:bg-gray-50 hover:text-(--color-primary-600)"
                        }`}
                      >
                        <span className="text-xs text-gray-400 w-5">{String(index + 1).padStart(2, "0")}</span>
                        <span className="truncate">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Quick Contact Card */}
                <div className="mt-4 bg-linear-to-br from-(--color-primary-600) to-(--color-secondary-600) rounded-2xl p-4 text-white">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Icon icon="mdi:help-circle" className="w-4 h-4" />
                    Questions?
                  </h4>
                  <p className="text-xs text-white/70 mb-3">
                    Contact our Data Protection Officer for privacy inquiries.
                  </p>
                  <a
                    href="mailto:raijintechug@gmail.com"
                    className="inline-flex items-center gap-2 text-sm bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <Icon icon="mdi:email" className="w-4 h-4" />
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
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
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
