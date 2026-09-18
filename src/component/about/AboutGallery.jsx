import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Maximize2, X } from 'lucide-react';

const rawEventImages = import.meta.glob('../../assets/evet_images/*.jpeg', { eager: true, import: 'default' });
const eventImageList = Object.values(rawEventImages);

const galleryCategories = [
  'All Concepts',
  'Double Decker',
  'Custom Bespoke',
  'Open Island',
  'Modern Technology'
];

const AboutGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All Concepts');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = eventImageList.slice(0, 16);

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block mb-1">
              SELECTED CONCEPTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950">
              STAND GALLERY
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Turnkey exhibition stands designed, fabricated, and handed over across global trade venues.
            </p>
          </div>

          {/* Gallery Filters */}
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D49942] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-50 hover:text-[#D49942]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((imgSrc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
              onClick={() => setSelectedImage(imgSrc)}
              className="relative group rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
            >
              <img
                src={imgSrc}
                alt={`YES Exhibition Stand Project ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex items-center justify-between w-full text-white">
                  <span className="text-xs font-bold uppercase tracking-wider">View Stand</span>
                  <Maximize2 size={16} className="text-[#E2A243]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] transition-all"
          >
            <span>Book Your Custom Stand for Next Expo</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#E2A243] p-2 transition-colors cursor-pointer"
              >
                <X size={28} />
              </button>
              <img
                src={selectedImage}
                alt="YES Exhibition Stand Project"
                className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/20"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutGallery;
