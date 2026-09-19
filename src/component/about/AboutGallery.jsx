import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

import hero1 from '../../assets/hero_1.png';
import hero2 from '../../assets/hero_2.png';
import hero3 from '../../assets/hero_3.png';
import aboutBanner from '../../assets/about_banner.png';

// Dynamically import all 61+ event images
const rawEventImages = import.meta.glob('../../assets/evet_images/*.jpeg', {
  eager: true,
  import: 'default',
});
const eventImageList = Object.values(rawEventImages);

// Combined list of actual YES Exhibition stand photography
const allImagesList = [
  hero1,
  hero2,
  hero3,
  aboutBanner,
  ...eventImageList,
].filter(Boolean);

const galleryCategories = [
  'All Concepts',
  'Double Decker',
  'Custom Bespoke',
  'Open Island',
  'Modern Technology',
];

const specificCategories = [
  'Double Decker',
  'Custom Bespoke',
  'Open Island',
  'Modern Technology',
];

// Map all stand images into structured items with categories and tags
const allStandItems = allImagesList.map((imgSrc, index) => {
  const category = specificCategories[index % specificCategories.length];
  let title = `Custom Stand Project #${index + 1}`;
  let tag = 'Custom Build';

  if (category === 'Double Decker') {
    title = `Two-Story Pavilion Structure #${index + 1}`;
    tag = 'Double Decker';
  } else if (category === 'Custom Bespoke') {
    title = `Bespoke Brand Architecture #${index + 1}`;
    tag = 'Custom Bespoke';
  } else if (category === 'Open Island') {
    title = `Multi-Access Island Booth #${index + 1}`;
    tag = 'Open Island';
  } else if (category === 'Modern Technology') {
    title = `Digital LED Tech Pavilion #${index + 1}`;
    tag = 'Modern Tech';
  }

  return {
    id: index + 1,
    src: imgSrc,
    category,
    title,
    tag,
  };
});

const INITIAL_VISIBLE_COUNT = 24;

const AboutGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All Concepts');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { 'All Concepts': allStandItems.length };
    specificCategories.forEach((cat) => {
      counts[cat] = allStandItems.filter((item) => item.category === cat).length;
    });
    return counts;
  }, []);

  // Filtered items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All Concepts') {
      return allStandItems;
    }
    return allStandItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Reset pagination when category changes
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [activeCategory]);

  // Items to display on the current view
  const displayedItems = useMemo(() => {
    if (activeCategory === 'All Concepts') {
      return filteredItems.slice(0, visibleCount);
    }
    return filteredItems;
  }, [filteredItems, visibleCount, activeCategory]);

  // Lightbox active item
  const currentLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  // Lightbox navigation handlers
  const handlePrev = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    }
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-gray-100">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(212,153,66,0.06)_0%,_transparent_70%)] rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(212,153,66,0.06)_0%,_transparent_70%)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header and Filtration Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D49942]/10 border border-[#D49942]/25 text-[#D49942] text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase">
                <Sparkles size={12} />
                Selected Concepts
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950">
              Stand <span className="gold-gradient-text">Gallery</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xl">
              Explore bespoke exhibition stands, custom double-decker pavilions, and turnkey trade show installations across global venues.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {galleryCategories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = categoryCounts[cat] || 0;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-white shadow-md shadow-amber-500/25 scale-[1.02]'
                      : 'bg-gray-100/90 text-gray-700 hover:bg-amber-50 hover:text-[#D49942] border border-gray-200/70'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : 'bg-gray-200/80 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stand Count Indicator */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-6 pb-3 border-b border-gray-100">
          <span>
            Showing <strong className="text-gray-900">{displayedItems.length}</strong> of{' '}
            <strong className="text-gray-900">{filteredItems.length}</strong> stands in{' '}
            <span className="text-[#D49942] font-semibold">"{activeCategory}"</span>
          </span>
          {activeCategory !== 'All Concepts' && (
            <button
              onClick={() => setActiveCategory('All Concepts')}
              className="text-[#D49942] hover:text-[#B2771D] font-bold text-xs underline cursor-pointer"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Animated Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.35, delay: (idx % 8) * 0.03 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-[#D49942]/50 transition-all duration-300 cursor-pointer aspect-4/3"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md text-amber-200 border border-white/15">
                    {item.tag}
                  </span>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-end justify-between w-full text-white">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#E6AA4D]">
                        {item.category}
                      </p>
                      <h3 className="text-xs font-bold text-white line-clamp-1 mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[#E6AA4D] group-hover:scale-110 transition-transform">
                      <Maximize2 size={15} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button for 'All Concepts' */}
        {activeCategory === 'All Concepts' &&
          visibleCount < filteredItems.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + 16, filteredItems.length)
                  )
                }
                className="px-8 py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer border border-gray-800"
              >
                Load More Stands ({filteredItems.length - visibleCount} remaining)
              </button>
            </div>
          )}

        {/* CTA Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white border border-[#D49942]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#D49942] block mb-1">
              Ready to Stand Out?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Request Your Custom Exhibition Concept
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-lg">
              Get a custom 3D architectural proposal and turnkey cost breakdown tailored to your upcoming trade show.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Book Your Custom Stand</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal with Full Navigation */}
      <AnimatePresence>
        {currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out select-none"
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-50 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#D49942]/20 border border-[#D49942]/40 text-[#E6AA4D] text-xs font-bold uppercase tracking-wider">
                  {currentLightboxItem.tag}
                </span>
                <span className="text-xs sm:text-sm text-gray-300 font-semibold hidden sm:inline">
                  {currentLightboxItem.title}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 font-semibold">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-[#E6AA4D] transition-colors cursor-pointer border border-white/15"
                  aria-label="Close Lightbox"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Left Navigation Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#E6AA4D] transition-all cursor-pointer border border-white/20 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#E6AA4D] transition-all cursor-pointer border border-white/20 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Image Container */}
            <div
              className="relative max-w-5xl max-h-[82vh] w-full flex items-center justify-center pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentLightboxItem.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                src={currentLightboxItem.src}
                alt={currentLightboxItem.title}
                className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/15 pointer-events-auto"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutGallery;
