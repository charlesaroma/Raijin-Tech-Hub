import React from 'react';
import feature from "../../assets/feature.png"; // Correct relative path

const ImageSection = () => {
  return (
    <section className="w-full h-[30vh] sm:h-[40vh] relative overflow-hidden">
      <img
        src={feature}
        alt="Descriptive alt text"
        className="w-full h-full object-cover absolute top-0 right-0"
        style={{ objectPosition: 'right' }}  // Ensures the right side of the image is visible
      />
    </section>
  );
};

export default ImageSection;
