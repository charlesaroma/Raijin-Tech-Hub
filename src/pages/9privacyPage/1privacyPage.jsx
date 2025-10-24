import SEO from "../../components/SEO";
import { BreadcrumbStructuredData } from "../../components/StructuredData";
import HeaderSection from "./2headerSection";
import PolicySections from "./3policySections";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Raijin Tech Hub Uganda"
        description="Read our privacy policy to understand how Raijin Tech Hub collects, uses, protects, and manages your personal information in compliance with Ugandan and international data protection standards."
        keywords="privacy policy, data protection, GDPR, Uganda privacy laws, data security, personal information"
      />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />

      <section className="relative w-full min-h-screen py-16 px-4 md:px-6 lg:px-[5%] bg-transparent overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-[var(--color-primary-500)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 -right-20 w-96 h-96 bg-[var(--color-primary-600)]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <HeaderSection />

          {/* Policy Sections */}
          <PolicySections />
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
