import Hero from "./2heroSection";
import About from "./3aboutSection";
import Purpose from "./4purposeSection";
import Services from "./5serviceSection";
import TechScroll from "./6techScrollSection";

const homePage = () => {
  return (
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
  );
};

export default homePage;
