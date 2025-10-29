import SEO from "../../components/SEO";
import { BreadcrumbStructuredData } from "../../components/StructuredData";
import HeaderSection from "./2headerSection";
import ExpertiseSection from "./3expertiseSection";
import ProcessSection from "./4processSection";
import CTASection from "./5ctaSection";

const ServicePage = () => {
  return (
    <>
      <SEO 
        title="Our Services | Raijin Tech Hub Uganda"
        description="Explore our comprehensive IT services including custom software development, cybersecurity, mobile apps, AI chatbot integration, system integration, and UI/UX design. Expert tech solutions for Ugandan businesses."
        keywords="IT services Uganda, software development services, cybersecurity Uganda, mobile app development, AI chatbot solutions Kampala, AI integration Uganda, system integration Uganda, UI/UX design services"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Our Services', path: '/service' }
        ]}
      />
      
      <section className="relative w-full min-h-screen py-16 px-4 md:px-6 lg:px-[5%] bg-transparent overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -left-20 w-72 h-72 bg-[var(--color-primary-500)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 -right-20 w-96 h-96 bg-[var(--color-primary-600)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Header Section */}
          <HeaderSection />

          {/* Expertise Cards Grid */}
          <ExpertiseSection />

          {/* Our Development Process Section */}
          <ProcessSection />

          {/* CTA Section */}
          <CTASection />
        </div>
      </section>
    </>
  );
};

export default ServicePage;

