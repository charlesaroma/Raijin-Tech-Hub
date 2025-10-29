import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const LightboxModal = ({ selectedImage, currentImages, currentImageIndex, closeLightbox, prevImage, nextImage }) => {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 cursor-pointer w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <Icon icon="mdi:close" className="text-2xl" />
          </button>

          {/* Navigation Buttons */}
          {currentImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 z-10 cursor-pointer"
                aria-label="Previous image"
              >
                <Icon icon="mdi:chevron-left" className="text-2xl" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 z-10 cursor-pointer"
                aria-label="Next image"
              >
                <Icon icon="mdi:chevron-right" className="text-2xl" />
              </button>
            </>
          )}

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full"
          >
            {/* Main Image */}
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/80 text-sm mb-3">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <span className="px-4 py-2 bg-[var(--color-primary-500)] text-white rounded-full text-sm font-semibold">
                  {selectedImage.category}
                </span>
                <span className="text-white/60 text-sm">
                  {currentImageIndex + 1} / {currentImages.length}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Keyboard Hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            Use arrow keys to navigate • ESC to close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LightboxModal;

