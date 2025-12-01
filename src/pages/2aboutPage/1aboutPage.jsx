import SEO from '../../components/SEO';
import { BreadcrumbStructuredData } from '../../components/StructuredData';
import HeaderSection from './2headerSection';
import StatsSection from './3statsSection';
import MissionVisionSection from './4missionVisionSection';
import ValuesSection from './5valuesSection';
import TimelineSection from './6timelineSection';
import TeamSection from './7teamSection';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us | Raijin Tech Hub Uganda"
        description="Learn about Raijin Tech Hub - Uganda's leading IT solutions provider. Meet our team, discover our mission, vision, and values. We're transforming businesses through innovative technology."
        keywords="about Raijin Tech Hub, IT company Uganda, our team, mission vision values, tech company Kampala, software development team"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' }
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

          {/* Stats Section */}
          <StatsSection />

          {/* Mission, Vision, Goals */}
          <MissionVisionSection />

          {/* Core Values */}
          <ValuesSection />

          {/* Company Timeline */}
          <TimelineSection />

          {/* Team Section */}
          <TeamSection /> 
        </div>
      </section>
    </>
  );
};

export default AboutPage;

