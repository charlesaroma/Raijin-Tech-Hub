import SEO from "../../components/SEO";
import { BreadcrumbStructuredData } from "../../components/StructuredData";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const TermsOfServicePage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const lastUpdated = "March 24, 2026";
  const effectiveDate = "March 24, 2026";

  const sections = [
    {
      id: "acceptance",
      icon: "mdi:handshake",
      title: "Acceptance of Terms",
      content: `These Terms of Service ("Terms," "Agreement") constitute a legally binding agreement between Raijin Tech Hub ("Company," "we," "us," or "our") and you ("Client," "you," or "your").

By accessing our website, using our services, or engaging in any business relationship with Raijin Tech Hub, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations.

If you do not agree to these Terms, you must not access our website or use our services. These Terms apply to all users, clients, and visitors of Raijin Tech Hub without exception or limitation.

**Eligibility**: You must be at least 18 years old and have the legal capacity to enter into contracts under Ugandan law. By using our services, you represent and warrant that you meet these requirements.`
    },
    {
      id: "services",
      icon: "mdi:application-cog",
      title: "Services & Deliverables",
      subsections: [
        {
          subtitle: "Core Services",
          items: [
            "Custom Software Development: Web applications, mobile apps, enterprise software solutions",
            "IT Consultancy: Technology strategy, system architecture, digital transformation advisory",
            "AI Integration & Chatbot Solutions: Custom AI implementations, intelligent automation systems",
            "UI/UX Design & Development: User interface design, user experience optimization",
            "Support & Maintenance: Ongoing technical support, system maintenance, and updates"
          ]
        },
        {
          subtitle: "Service Process",
          items: [
            "Initial consultation and requirement gathering",
            "Project proposal with detailed scope, timeline, and pricing",
            "Mutual agreement on deliverables and acceptance criteria",
            "Development, testing, and quality assurance phases",
            "Delivery, deployment, and handover of completed work",
            "Post-delivery support and warranty period"
          ]
        },
        {
          subtitle: "Client Responsibilities",
          items: [
            "Provide accurate, complete, and timely information and requirements",
            "Ensure availability for feedback, reviews, and approvals",
            "Provide necessary access to systems, data, and resources",
            "Make timely payments as agreed in project contracts",
            "Test deliverables and provide acceptance within agreed timeframes"
          ]
        }
      ]
    },
    {
      id: "payment",
      icon: "mdi:cash-multiple",
      title: "Payment Terms & Pricing",
      content: `**Payment Structure**
• **Initial Deposit**: 30% of total project fee due upon contract signing
• **Milestone Payment**: 40% due upon completion of agreed project milestones
• **Final Payment**: 30% due upon project completion and client acceptance
• **Custom Plans**: Alternative payment schedules may be arranged for large projects

**Payment Methods**
• Bank transfers to our corporate accounts in Uganda
• Mobile money: MTN Mobile Money, Airtel Money
• Credit/debit cards (secure online payment gateway)
• International wire transfers for foreign clients
• Cash payments for in-person services (with receipt)

**Pricing & Invoicing**
• All prices are quoted in Ugandan Shillings (UGX) or US Dollars (USD) as agreed
• Prices are valid for 30 days from quote date unless otherwise specified
• Invoices are due within 14 days of issuance
• Late payments incur 5% monthly interest on outstanding amounts

**Refund Policy**
• Deposits are non-refundable once work has commenced
• Partial refunds may be considered for undelivered services
• All refund requests must be submitted in writing within 7 days of service termination
• Processing time for approved refunds is 30 days

**Additional Costs**
• Third-party licenses, hosting services, or hardware are billed separately
• Client-requested changes outside original scope will be billed at agreed rates
• Travel and accommodation expenses for on-site work (if applicable)
• Taxes and regulatory fees as required by law`
    },
    {
      id: "intellectual-property",
      icon: "mdi:copyright",
      title: "Intellectual Property Rights",
      content: `**Client Ownership**
Upon full payment of all agreed fees, you own all custom code, designs, documentation, and deliverables created specifically for your project. This includes:
• Complete source code for custom-developed software
• Design files, mockups, and user interface elements
• Technical documentation and user manuals
• Database schemas and data migration scripts
• Configuration files and deployment scripts

**Our Intellectual Property**
We retain ownership of:
• Pre-existing code libraries, frameworks, and tools
• Proprietary methodologies and development processes
• General knowledge, skills, and expertise
• Third-party open-source components with their respective licenses
• Our brand, trademarks, and marketing materials

**License Grant**
We grant you a perpetual, worldwide, non-exclusive, royalty-free license to:
• Use, modify, and distribute the custom deliverables
• Sub-license the deliverables to your clients and end-users
• Create derivative works based on the delivered software
• Use the deliverables for your business purposes without restriction

**Third-Party Components**
Some projects may incorporate third-party software subject to separate licenses:
• Open-source software with GPL, MIT, Apache, or similar licenses
• Commercial software with per-user or per-server licensing
• API services with usage-based pricing
• You are responsible for compliance with all third-party license terms

**Portfolio Rights**
We reserve the right to showcase completed projects in our portfolio, marketing materials, and case studies, unless you explicitly request confidentiality in writing. Any confidential information will be removed or anonymized.`
    },
    {
      id: "warranties",
      icon: "mdi:shield-check",
      title: "Warranties & Disclaimers",
      content: `**Service Quality Warranty**
We warrant that all services will be performed:
• In a professional and workmanlike manner
• In accordance with industry standards and best practices
• In compliance with the specifications agreed in project contracts
• Using reasonable care and skill

**Technical Warranty**
• **Bug Fixes**: Free correction of defects and bugs for 30-90 days post-delivery (as specified in project agreement)
• **Compatibility**: Software will function on specified platforms and environments
• **Performance**: System will meet agreed performance benchmarks and requirements
• **Security**: Deliverables will include reasonable security measures as agreed

**Exclusions from Warranty**
The warranty does not cover:
• Issues caused by unauthorized modifications or third-party integrations
• Problems resulting from client-provided hardware, software, or data
• Damage due to viruses, malware, or security breaches beyond our control
• Failures caused by force majeure events or circumstances beyond reasonable control
• Normal wear and tear or expected system degradation over time

**Limitation of Liability**
Our total liability for any claim arising from these Terms shall not exceed the total fees paid for the specific project in question. We shall not be liable for:
• Indirect, incidental, consequential, or special damages
• Lost profits, revenue, or business opportunities
• Data loss, corruption, or unauthorized access
• Downtime, service interruptions, or system unavailability

**No Other Warranties**
Except as expressly stated in these Terms, all services are provided "as is" without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.`
    },
    {
      id: "confidentiality",
      icon: "mdi:lock",
      title: "Confidentiality & Data Protection",
      content: `**Mutual Confidentiality**
Both parties agree to maintain strict confidentiality of all proprietary and sensitive information shared during the course of business. This includes but is not limited to:
• Business strategies, plans, and financial information
• Technical specifications, source code, and system architectures
• Customer lists, pricing information, and marketing strategies
• Trade secrets, proprietary processes, and methodologies
• Any information marked as "Confidential" or disclosed in confidence

**Definition of Confidential Information**
Confidential information includes all information disclosed by either party that:
• Is marked as confidential or identified as such at the time of disclosure
• Would reasonably be considered confidential given the nature of the information
• Is not public knowledge or readily available from public sources
• Is developed or created by the disclosing party

**Exceptions**
Confidentiality obligations do not apply to information that:
• Is or becomes public knowledge through no breach of this agreement
• Is lawfully obtained from a third party without restriction
• Is independently developed without reference to confidential information
• Is required to be disclosed by law, court order, or regulatory authority

**Data Protection**
We process all personal data in accordance with our Privacy Policy and applicable data protection laws, including:
• Ugandan Data Protection and Privacy Act, 2019
• General Data Protection Regulation (GDPR) principles for international clients
• Industry-specific compliance requirements (e.g., financial, healthcare)

**Security Measures**
We implement appropriate technical and organizational measures to protect your data:
• Encryption of data in transit and at rest
• Access controls and authentication systems
• Regular security audits and vulnerability assessments
• Staff training on data protection and confidentiality`
    },
    {
      id: "termination",
      icon: "mdi:stop-circle",
      title: "Termination & Suspension",
      content: `**Termination by Client**
You may terminate our services:
• With 30 days written notice for convenience
• Immediately if we materially breach these Terms and fail to cure within 14 days
• If we become insolvent, bankrupt, or cease business operations

**Termination by Company**
We may terminate services:
• With 30 days written notice for convenience
• Immediately if you breach payment terms or fail to pay when due
• If you provide false, misleading, or fraudulent information
• If you engage in illegal activities or violate applicable laws
• If you breach confidentiality obligations or intellectual property rights

**Suspension of Services**
We may suspend services without notice:
• For non-payment of invoices beyond due dates
• If you breach material terms of the agreement
• For security concerns or suspected fraudulent activity
• As required by law or regulatory authorities

**Effects of Termination**
Upon termination:
• You must pay all fees for work completed up to termination date
• We will provide all completed work and deliverables paid for to date
• Both parties return or destroy confidential information
• License rights for completed work remain in effect as agreed
• All outstanding obligations survive termination

**Post-Termination Obligations**
After termination, both parties must:
• Return or destroy all confidential information and materials
• Cooperate in transitioning services to new providers
• Fulfill any remaining payment or delivery obligations
• Maintain confidentiality of information disclosed during engagement`
    },
    {
      id: "dispute-resolution",
      icon: "mdi:scale-balance",
      title: "Dispute Resolution & Governing Law",
      content: `**Governing Law**
These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Uganda, without regard to conflict of law principles. Any disputes arising from these Terms shall be subject to Ugandan jurisdiction.

**Dispute Resolution Process**
In the event of any dispute, controversy, or claim arising from or relating to these Terms:

**1. Good Faith Negotiation**
Both parties agree to first attempt resolution through direct good faith negotiations. The initiating party shall provide written notice of the dispute, and both parties shall have 30 days to resolve the matter amicably.

**2. Mediation**
If negotiations fail, disputes shall be submitted to mediation in Kampala, Uganda:
• Mediator shall be mutually agreed upon or appointed by the Centre for Arbitration and Dispute Resolution (CADER)
• Mediation costs shall be shared equally between parties
• Each party shall bear their own legal costs
• Mediation sessions shall be confidential and without prejudice

**3. Arbitration**
If mediation is unsuccessful within 30 days:
• Disputes shall be resolved through binding arbitration under the Arbitration and Conciliation Act, Cap 7
• Arbitration shall be conducted in Kampala, Uganda
• A single arbitrator shall be appointed by mutual agreement or CADER
• Arbitration award shall be final and binding on both parties
• Arbitration costs shall be borne by the losing party unless otherwise determined

**Court Jurisdiction**
If arbitration is not appropriate for the dispute, parties agree to submit to the exclusive jurisdiction of the courts of Uganda, specifically the Commercial Division of the High Court of Uganda.

**Interim Relief**
Nothing in this clause shall prevent either party from seeking interim relief from courts of competent jurisdiction to preserve their rights or prevent irreparable harm.`
    },
    {
      id: "indemnification",
      icon: "mdi:shield-outline",
      title: "Indemnification & Liability",
      content: `**Client Indemnification**
You agree to indemnify, defend, and hold harmless Raijin Tech Hub, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from:

• Your use of our services and deliverables
• Your breach of any term or condition of these Terms
• Your violation of any law, regulation, or third-party rights
• Any content, information, or materials you provide to us
• Your infringement of intellectual property rights of others
• Any fraudulent, illegal, or unethical activities

**Company Indemnification**
We shall indemnify you against claims arising from:
• Our material breach of these Terms
• Our willful misconduct or gross negligence
• Our infringement of your intellectual property rights
• Our failure to deliver services as specified in agreements

**Limitation of Indemnification**
Indemnification obligations shall not apply to:
• Claims arising from the indemnified party's negligence or willful misconduct
• Matters settled without the indemnifying party's prior written consent
• Claims resulting from modifications made by third parties
• Issues caused by force majeure events or circumstances beyond reasonable control

**Insurance Coverage**
Both parties shall maintain appropriate insurance coverage:
• We maintain professional liability insurance coverage of at least UGX 500,000,000
• We maintain general liability insurance as required by law
• You maintain appropriate insurance for your business operations
• Both parties provide proof of insurance upon request

**Procedure for Claims**
The indemnified party must:
• Provide prompt written notice of any claim
• Allow the indemnifying party to control the defense and settlement
• Cooperate in the defense of the claim
• Not settle any claim without the indemnifying party's consent`
    },
    {
      id: "force-majeure",
      icon: "mdi:weather-lightning",
      title: "Force Majeure",
      content: `**Definition**
Neither party shall be liable for any failure or delay in performance of their obligations under these Terms if such failure or delay is due to circumstances beyond their reasonable control ("Force Majeure Events").

**Force Majeure Events Include**
• Natural disasters: earthquakes, floods, hurricanes, storms, fires
• War, terrorism, civil unrest, riots, or public health emergencies
• Government actions: new laws, regulations, orders, or restrictions
• Infrastructure failures: power outages, internet disruptions, utility failures
• Labor disputes: strikes, lockouts, or other industrial actions
• Supplier failures: unavailability of third-party services or components
• Pandemics, epidemics, or similar health crises

**Obligations During Force Majeure**
• The affected party must notify the other party in writing within 7 days
• The party must use reasonable efforts to mitigate the impact of the event
• The party must resume performance as soon as reasonably practicable
• Both parties shall cooperate in finding alternative solutions

**Effects on Performance**
• Performance obligations are suspended during the Force Majeure event
• Time for performance shall be extended by the duration of the event
• Neither party shall be liable for delays or failures during this period
• Either party may terminate the agreement if the event continues for more than 60 days

**Exclusions**
The following are not considered Force Majeure events:
• Financial difficulties or economic conditions
• Changes in market conditions or customer demand
• Normal business risks or competitive pressures
• Events that could have been reasonably anticipated or avoided`
    },
    {
      id: "general-provisions",
      icon: "mdi:file-document",
      title: "General Provisions",
      content: `**Severability**
If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions shall remain in full force and effect.

**Entire Agreement**
These Terms of Service, together with any project-specific agreements, statements of work, and our Privacy Policy, constitute the entire agreement between you and Raijin Tech Hub regarding our services. These Terms supersede all prior agreements, understandings, and communications, whether written or oral.

** Amendments**
We may amend these Terms at any time by posting the revised Terms on our website. Material changes will be notified to clients via email at least 30 days before they take effect. Your continued use of our services after such changes constitutes acceptance of the amended Terms.

**Waiver**
No waiver of any provision of these Terms shall be effective unless in writing and signed by both parties. A waiver of any breach shall not constitute a waiver of any subsequent breach.

**Assignment**
You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations to affiliates or successors in connection with a merger, acquisition, or sale of assets.

**Notices**
All notices under these Terms shall be in writing and delivered:
• By email to the addresses specified in project agreements
• By registered mail to our business address in Kampala, Uganda
• By personal delivery with receipt confirmation
• Notices are deemed received upon successful email transmission or delivery

**Relationship of Parties**
These Terms do not create any partnership, joint venture, agency, or employment relationship between the parties. You are an independent client, and we are an independent service provider.

**Survival**
Provisions that by their nature should survive termination of these Terms shall continue in effect, including confidentiality, indemnification, intellectual property, and dispute resolution provisions.`
    },
    {
      id: "contact",
      icon: "mdi:contact-mail",
      title: "Contact Information & Support",
      content: `For questions, concerns, or assistance regarding these Terms of Service, please contact:

**Raijin Tech Hub**
Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EAT
Email: raijintechug@gmail.com
Phone: +256 777 982 066
WhatsApp: +256 777 982 066
Address: Kampala, Uganda

**Emergency Support**
For urgent technical issues or service interruptions:
• Emergency Hotline: Available 24/7 for critical system failures
• Response Time: Within 2 hours for emergency requests
• Email: emergency@raijintechhub.com (for critical issues only)

**General Inquiries**
• Sales and new projects: sales@raijintechhub.com
• Technical support: support@raijintechhub.com
• Billing and payments: finance@raijintechhub.com
• Legal and compliance: legal@raijintechhub.com

**Response Times**
• General inquiries: Within 24 business hours
• Technical support: Within 8 business hours
• Emergency requests: Within 2 hours
• Legal matters: Within 3 business days

**Social Media**
Follow us for updates and announcements:
• LinkedIn: /company/raijin-technologies-ug
• Instagram: @raijin_tech_hub
• Facebook: /GVNG8
• Twitter: @RaijinTechUG

**Website**
Visit our website at www.raijintechhub.com for:
• Service portfolio and case studies
• Client testimonials and reviews
• Blog with technical insights and industry news
• Online quote request and project inquiry forms`
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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sticky Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="p-4 bg-linear-to-r from-(--color-secondary-600) to-(--color-primary-600)">
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
                            ? "bg-(--color-secondary-50) text-(--color-secondary-700) font-medium"
                            : "text-gray-600 hover:bg-gray-50 hover:text-(--color-secondary-600)"
                        }`}
                      >
                        <span className="text-xs text-gray-400 w-5">{String(index + 1).padStart(2, "0")}</span>
                        <span className="truncate">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Quick Actions Card */}
                <div className="mt-4 bg-linear-to-br from-(--color-secondary-600) to-(--color-primary-600) rounded-2xl p-4 text-white">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Icon icon="mdi:rocket-launch" className="w-4 h-4" />
                    Get Started
                  </h4>
                  <p className="text-xs text-white/70 mb-3">
                    Ready to start your project? Contact us for a free consultation.
                  </p>
                  <a
                    href="mailto:raijintechug@gmail.com"
                    className="inline-flex items-center gap-2 text-sm bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <Icon icon="mdi:email" className="w-4 h-4" />
                    Start Project
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
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;
