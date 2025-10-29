import { useState, useEffect, useRef } from 'react';
import SEO from '../../components/SEO';
import { BreadcrumbStructuredData } from '../../components/StructuredData';
import faqData from '../../data/faqData.json';
import { staggerAnimation } from '../../utils/gsapAnimations';
import HeaderSection from './2headerSection';
import SearchSection from './3searchSection';
import AccordionSection from './4accordionSection';
import CTASection from './5ctaSection';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState(faqData.categories[0]?.id || 'general');
  const [openQuestions, setOpenQuestions] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const questionsRef = useRef([]);

  // Reset refs when category or search changes
  useEffect(() => {
    questionsRef.current = [];
  }, [activeCategory, searchQuery]);

  const currentCategory = faqData.categories.find((cat) => cat.id === activeCategory);
  const allQuestions = faqData.categories.flatMap((cat) =>
    cat.questions.map((q) => ({ ...q, categoryName: cat.name, categoryId: cat.id }))
  );

  // Filter questions based on search
  const filteredQuestions = searchQuery
    ? allQuestions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentCategory 
      ? currentCategory.questions.map((q) => ({ 
          ...q, 
          categoryName: currentCategory.name, 
          categoryId: currentCategory.id 
        }))
      : [];

  // GSAP animations - only run after questions are rendered
  useEffect(() => {
    // Add a small delay to ensure DOM elements are ready
    const timer = setTimeout(() => {
      const validRefs = questionsRef.current.filter(ref => ref !== null);
      if (validRefs.length > 0) {
        staggerAnimation(validRefs, { start: 'top 90%' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery, filteredQuestions.length]);

  const toggleQuestion = (questionId) => {
    setOpenQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    const allIds = filteredQuestions.map((q) => q.id);
    setOpenQuestions(new Set(allIds));
  };

  const collapseAll = () => {
    setOpenQuestions(new Set());
  };

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions | Raijin Tech Hub Uganda"
        description="Find answers to common questions about our services, pricing, development process, support, and more. Get instant answers to your IT and software development questions."
        keywords="FAQ, frequently asked questions, IT services questions, software development FAQ, pricing questions, support questions"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' }
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

          {/* Search Bar */}
          <SearchSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {/* Accordion with Tabs */}
          <AccordionSection 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchQuery={searchQuery}
            filteredQuestions={filteredQuestions}
            openQuestions={openQuestions}
            toggleQuestion={toggleQuestion}
            expandAll={expandAll}
            collapseAll={collapseAll}
            questionsRef={questionsRef}
          />

          {/* Still Have Questions CTA */}
          <CTASection />
        </div>
      </section>
    </>
  );
};

export default FAQPage;
