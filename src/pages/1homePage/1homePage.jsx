import SEO from "../../components/SEO";
import Hero from "./2heroSection";
import About from "./3aboutSection";
import Purpose from "./4purposeSection";
import Services from "./5serviceSection";
import TechScroll from "./6techScrollSection";

const homePage = () => {
  return (
    <>
      <SEO 
        title="Raijin Tech Hub Uganda | Custom Software Development & IT Solutions"
        description="Leading IT company in Uganda specializing in custom software development, web applications, mobile apps, IT consultancy, cloud solutions, UI/UX design, and digital transformation. Transform your business with cutting-edge technology solutions."
        keywords="software development Uganda, IT consultancy Uganda, custom software development, web development Uganda, mobile app development Uganda, cloud solutions Uganda, UI/UX design Uganda, digital transformation Uganda, tech company Uganda, IT solutions Uganda, software company Kampala"
      />
      <div className="relative w-screen h-full flex flex-col space-y-0 overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

      {/* About Section */}
      <About />

      {/* Purpose Section */}
      <Purpose />

      {/* Service Section */}
      <Services />

      {/* techScroll Section */}
      <TechScroll />
      </div>
    </>
  );
};

export default homePage;
