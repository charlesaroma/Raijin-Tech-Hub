import { useState, useEffect, useRef } from 'react';
import SEO from '../../components/SEO';
import { BreadcrumbStructuredData } from '../../components/StructuredData';
import portfolioData from '../../data/portfolioData.json';
import { staggerAnimation } from '../../utils/gsapAnimations';
import HeaderSection from './2headerSection';
import FilterSection from './3filterSection';
import GridSection from './4gridSection';
import ModalSection from './5modalSection';
import CTASection from './6ctaSection';

const PortfolioPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filter, setFilter] = useState('all');
  const cardsRef = useRef([]);
  const { caseStudies } = portfolioData;

  // Reset refs when filter changes
  useEffect(() => {
    cardsRef.current = [];
  }, [filter]);

  const industries = ['all', ...new Set(caseStudies.map((cs) => cs.industry))];

  const filteredCases = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter((cs) => cs.industry === filter);

  // GSAP animations - only run after cards are rendered
  useEffect(() => {
    // Add a small delay to ensure DOM elements are ready
    const timer = setTimeout(() => {
      const validRefs = cardsRef.current.filter(ref => ref !== null);
      if (validRefs.length > 0) {
        staggerAnimation(validRefs, { start: 'top 85%' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [filter, filteredCases.length]);

  const openCaseStudy = (caseStudy) => {
    setSelectedCase(caseStudy);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudy = () => {
    setSelectedCase(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <SEO 
        title="Portfolio & Case Studies | Raijin Tech Hub Uganda"
        description="Explore our successful projects and case studies. From e-commerce platforms to hospital management systems, see how we've helped businesses transform digitally across Uganda and East Africa."
        keywords="portfolio, case studies, projects, success stories, client work, software projects Uganda, IT solutions showcase"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' }
        ]}
      />

      <section className="relative w-full min-h-screen py-16 px-4 md:px-6 lg:px-[5%] bg-transparent overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-[var(--color-primary-500)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[var(--color-primary-600)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <HeaderSection />

          {/* Filter Buttons */}
          <FilterSection industries={industries} filter={filter} setFilter={setFilter} />

          {/* Case Studies Grid */}
          <GridSection 
            filteredCases={filteredCases} 
            cardsRef={cardsRef} 
            openCaseStudy={openCaseStudy} 
          />

          {/* CTA Section */}
          <CTASection />
        </div>
      </section>

      {/* Case Study Modal */}
      <ModalSection selectedCase={selectedCase} closeCaseStudy={closeCaseStudy} />
    </>
  );
};

export default PortfolioPage;
