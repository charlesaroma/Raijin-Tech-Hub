import { useState, useEffect, useRef } from 'react';
import SEO from '../../components/SEO';
import { BreadcrumbStructuredData } from '../../components/StructuredData';
import galleryData from '../../data/galleryData.json';
import { staggerAnimation } from '../../utils/gsapAnimations';
import HeaderSection from './2headerSection';
import GalleryGrid from './3galleryGrid';
import LightboxModal from './4lightboxModal';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState(galleryData.categories[0]?.id || 'office');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesRef = useRef([]);

  // Reset refs when category changes
  useEffect(() => {
    imagesRef.current = [];
  }, [activeCategory]);

  const currentCategory = galleryData.categories.find((cat) => cat.id === activeCategory);
  const currentImages = currentCategory?.images || [];

  // GSAP animations - only run after images are rendered
  useEffect(() => {
    // Add a small delay to ensure DOM elements are ready
    const timer = setTimeout(() => {
      const validRefs = imagesRef.current.filter(ref => ref !== null);
      if (validRefs.length > 0) {
        staggerAnimation(validRefs, { start: 'top 85%' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory, currentImages.length]);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % currentImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(currentImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(currentImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage, currentImageIndex]);

  return (
    <>
      <SEO 
        title="Gallery | Raijin Tech Hub Uganda"
        description="Explore our project gallery showcasing our work environment, completed projects, and team culture at Raijin Tech Hub. See our office, team, and successful IT solutions."
        keywords="gallery, projects gallery, office photos, team photos, work environment, Raijin Tech Hub workspace"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' }
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

          {/* Gallery Grid with Tabs */}
          <GalleryGrid 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            currentCategory={currentCategory}
            currentImages={currentImages}
            imagesRef={imagesRef}
            openLightbox={openLightbox}
          />
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal 
        selectedImage={selectedImage}
        currentImages={currentImages}
        currentImageIndex={currentImageIndex}
        closeLightbox={closeLightbox}
        prevImage={prevImage}
        nextImage={nextImage}
      />
    </>
  );
};

export default GalleryPage;
