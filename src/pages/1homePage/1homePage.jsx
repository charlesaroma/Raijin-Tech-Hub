import React from "react";
import Hero from "./2heroSection";
import About from "./3aboutSection";
import Purpose from "./4purposeSection";
import Services from "./5serviceSection";
import TechScroll from "./6techScrollSection"
// import Feature from "./7featureSection";

const homePage = () => {
  return (
    <div className="relative w-full h-full flex flex-col space-y-0 overflow-x-hidden">
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Purpose Section */}
      <Purpose />
      {/* Service Section */}
      <div className="relative">
        <Services />
      </div>
       {/* techScroll Section */}
       <TechScroll />
       {/* Feature Section */}
       {/* <Feature /> */}
    </div>
  );
};

export default homePage;
