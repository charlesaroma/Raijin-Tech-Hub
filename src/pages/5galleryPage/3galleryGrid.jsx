import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import galleryData from '../../data/galleryData.json';

const GalleryGrid = ({ activeCategory, setActiveCategory, currentCategory, currentImages, imagesRef, openLightbox }) => {
  return (
    <>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {galleryData.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`group relative px-5 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              activeCategory === category.id
                ? 'bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]'
                : 'bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]'
            }`}
          >
            <Icon icon="mdi:image" className="text-sm" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Category Description */}
      <p className="text-center text-[var(--color-primary-600)] text-xs mb-8">
        {currentCategory?.description}
      </p>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentImages && currentImages.length > 0 ? (
          currentImages.map((image, index) => (
            <motion.div
              key={`${activeCategory}-${image.id}`}
              ref={(el) => {
                if (imagesRef.current) {
                  imagesRef.current[index] = el;
                }
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 border-[var(--color-primary-500)]/20 hover:border-[var(--color-primary-500)] transition-all duration-300"
              onClick={() => openLightbox(image, index)}
            >
            {/* Image */}
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm mb-1">{image.title}</h3>
                <p className="text-white/80 text-xs mb-2">{image.description}</p>
                <span className="inline-block px-3 py-1 bg-[var(--color-primary-500)] text-white rounded-full text-xs">
                  {image.category}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[var(--color-primary-600)] transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Icon icon="mdi:fullscreen" />
                </div>
              </div>
            </div>
          </motion.div>
        ))
        ) : (
          // No Images Available
          <div className="text-center py-20 col-span-full">
            <Icon icon="mdi:image-off" className="text-6xl text-[var(--color-primary-500)]/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[var(--color-primary-600)] mb-2">
              No images available
            </h3>
            <p className="text-[var(--color-primary-600)] text-sm">
              Please select a different category
            </p>
          </div>
        )}
      </div>

      {/* Empty State for current category */}
      {currentImages.length === 0 && currentCategory && (
        <div className="text-center py-20">
          <Icon icon="mdi:image" className="text-6xl text-[var(--color-primary-500)]/30 mx-auto mb-4" />
          <p className="text-xl text-[var(--color-primary-500)]/60">
            No images available in this category yet.
          </p>
        </div>
      )}
    </>
  );
};

GalleryGrid.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
  currentCategory: PropTypes.object,
  currentImages: PropTypes.array.isRequired,
  imagesRef: PropTypes.object.isRequired,
  openLightbox: PropTypes.func.isRequired
};

export default GalleryGrid;

