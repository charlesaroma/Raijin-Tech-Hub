import SEO from '../../components/SEO';
import { BreadcrumbStructuredData } from '../../components/StructuredData';
import HeaderSection from './2headerSection';
import TermsSections from './3termsSections';

const TermsOfServicePage = () => {
  return (
    <>
      <SEO 
        title="Terms of Service | Raijin Tech Hub Uganda"
        description="Read our terms of service governing the use of Raijin Tech Hub's IT services, software development, consultancy, and digital solutions in Uganda and East Africa."
        keywords="terms of service, service agreement, legal terms, Uganda IT services, software development terms"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms-of-service' }
        ]}
      />

      <section className="relative min-h-screen py-16 px-4 md:px-6 lg:px-[5%] bg-transparent overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-[var(--color-primary-500)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[var(--color-primary-600)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <HeaderSection />

          {/* Terms Sections */}
          <TermsSections />
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;
