import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  X,
} from 'lucide-react';

// Import every gallery image from this folder.
// IMPORTANT: keep the file names stable because the classification below uses them.
const rawEventImages = import.meta.glob('../../assets/evet_images/*.jpeg', {
  eager: true,
  import: 'default',
});

/* -------------------------------------------------------------------------- */
/*                         GALLERY CLASSIFICATION DATA                         */
/* -------------------------------------------------------------------------- */

// I reviewed the 61 images in your ZIP.
// Images from 18 Sep are workshop / fabrication photos, not completed stands.
const PRODUCTION_FILES = new Set([
  'WhatsApp Image 2026-09-18 at 11.13.09 AM.jpeg',
  'WhatsApp Image 2026-09-18 at 11.13.10 AM (1).jpeg',
  'WhatsApp Image 2026-09-18 at 11.13.10 AM.jpeg',
  'WhatsApp Image 2026-09-18 at 11.13.34 AM.jpeg',
  'WhatsApp Image 2026-09-18 at 11.13.55 AM.jpeg',
  'WhatsApp Image 2026-09-18 at 11.14.15 AM.jpeg',
  'WhatsApp Image 2026-09-18 at 11.14.25 AM.jpeg',
  'WhatsApp Image 2026-09-18 at 11.15.06 AM.jpeg',
  'WhatsApp Image 2026-09-18 at 11.16.00 AM (1).jpeg',
  'WhatsApp Image 2026-09-18 at 11.16.00 AM.jpeg',
  'WhatsApp Image 2026-09-18 at 11.16.01 AM.jpeg',
]);

// IMPORTANT:
// I did not find a clear TRUE double-decker stand in the 61 supplied photos.
// A tall fascia / hanging sign / truss is NOT a double decker.
// When you add real two-storey stand photos, add their exact filenames here.
const DOUBLE_DECKER_FILES = new Set([
  // Example:
  // 'my-real-double-decker-stand.jpeg',
]);

const CATEGORY_CONFIG = [
  { key: 'All Projects', label: 'All Projects' },
  { key: 'Exhibition Stands', label: 'Exhibition Stands' },
  { key: 'Double Decker', label: 'Double Decker' },
  { key: 'Production & Fabrication', label: 'Production & Fabrication' },
];

const INITIAL_VISIBLE_COUNT = 24;
const LOAD_MORE_COUNT = 16;

const getFilename = (path) => path.split('/').pop() || path;

const getCategoriesForFile = (filename) => {
  if (PRODUCTION_FILES.has(filename)) {
    return ['Production & Fabrication'];
  }

  const categories = ['Exhibition Stands'];


  if (DOUBLE_DECKER_FILES.has(filename)) {
    categories.push('Double Decker');
  }

  return categories;
};

const getProjectTitle = (filename, standNumber, productionNumber) => {
  if (PRODUCTION_FILES.has(filename)) {
    return `In-House Production & Fabrication #${productionNumber}`;
  }

  if (DOUBLE_DECKER_FILES.has(filename)) {
    return `Double Decker Exhibition Stand #${standNumber}`;
  }


  return `Custom Exhibition Stand #${standNumber}`;
};

const getPrimaryTag = (filename) => {
  if (PRODUCTION_FILES.has(filename)) return 'Production';
  if (DOUBLE_DECKER_FILES.has(filename)) return 'Double Decker';
  return 'Exhibition Stand';
};

// Build a deterministic gallery list.
// Sorting the paths means the order does not change unexpectedly between builds.
const sortedEventImages = Object.entries(rawEventImages).sort(([pathA], [pathB]) =>
  pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' })
);

let standCounter = 0;
let productionCounter = 0;

const allStandItems = sortedEventImages.map(([path, src], index) => {
  const filename = getFilename(path);
  const isProduction = PRODUCTION_FILES.has(filename);

  if (isProduction) productionCounter += 1;
  else standCounter += 1;

  const categories = getCategoriesForFile(filename);

  return {
    id: `${filename}-${index}`,
    src,
    filename,
    categories,
    tag: getPrimaryTag(filename),
    title: getProjectTitle(filename, standCounter, productionCounter),
  };
});

const AboutGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const categoryCounts = useMemo(() => {
    const counts = { 'All Projects': allStandItems.length };

    CATEGORY_CONFIG.forEach(({ key }) => {
      if (key === 'All Projects') return;

      counts[key] = allStandItems.filter((item) =>
        item.categories.includes(key)
      ).length;
    });

    return counts;
  }, []);

  // Hide empty filters.
  // Because there are no true double-decker photos in the supplied ZIP,
  // "Double Decker" will not appear until a filename is added above.
  const visibleCategories = useMemo(
    () =>
      CATEGORY_CONFIG.filter(
        ({ key }) => key === 'All Projects' || (categoryCounts[key] || 0) > 0
      ),
    [categoryCounts]
  );

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All Projects') return allStandItems;

    return allStandItems.filter((item) =>
      item.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    setLightboxIndex(null);
  }, [activeCategory]);

  const displayedItems = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return filteredItems.slice(0, visibleCount);
    }

    return filteredItems;
  }, [activeCategory, filteredItems, visibleCount]);

  const currentLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = (e) => {
    e?.stopPropagation();

    if (lightboxIndex === null || filteredItems.length === 0) return;

    setLightboxIndex((prev) =>
      prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  };

  const handleNext = (e) => {
    e?.stopPropagation();

    if (lightboxIndex === null || filteredItems.length === 0) return;

    setLightboxIndex((prev) =>
      prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  };

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  // Prevent the page behind the lightbox from scrolling.
  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxIndex]);

  const openLightbox = (item) => {
    const indexInFilteredList = filteredItems.findIndex(
      (filteredItem) => filteredItem.id === item.id
    );

    if (indexInFilteredList !== -1) {
      setLightboxIndex(indexInFilteredList);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-16 sm:py-24">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(212,153,66,0.06)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(212,153,66,0.06)_0%,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Filters */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:flex-row lg:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D49942]/25 bg-[#D49942]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#D49942] sm:text-xs">
                <Sparkles size={12} />
                Selected Projects
              </span>
            </div>

            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Stand <span className="gold-gradient-text">Gallery</span>
            </h2>

            <p className="mt-2 max-w-xl text-xs text-gray-600 sm:text-sm">
              Explore YES exhibition stands, custom projects and our in-house production process.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {visibleCategories.map(({ key, label }) => {
              const isActive = activeCategory === key;
              const count = categoryCounts[key] || 0;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveCategory(key)}
                  className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'scale-[1.02] bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-white shadow-md shadow-amber-500/25'
                      : 'border border-gray-200/70 bg-gray-100/90 text-gray-700 hover:bg-amber-50 hover:text-[#D49942]'
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
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

        {/* Count */}
        <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-3 text-xs text-gray-500">
          <span>
            Showing{' '}
            <strong className="text-gray-900">{displayedItems.length}</strong>{' '}
            of <strong className="text-gray-900">{filteredItems.length}</strong>{' '}
            projects in{' '}
            <span className="font-semibold text-[#D49942]">
              &quot;{activeCategory}&quot;
            </span>
          </span>

          {activeCategory !== 'All Projects' && (
            <button
              type="button"
              onClick={() => setActiveCategory('All Projects')}
              className="cursor-pointer text-xs font-bold text-[#D49942] underline hover:text-[#B2771D]"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, idx) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.35, delay: (idx % 8) * 0.03 }}
                onClick={() => openLightbox(item)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-gray-200/90 bg-gray-900 shadow-sm transition-all duration-300 hover:border-[#D49942]/50 hover:shadow-xl"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Primary category badge */}
                <div className="absolute left-3 top-3 z-10">
                  <span className="rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-amber-200 backdrop-blur-md">
                    {item.tag}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex w-full items-end justify-between text-white">
                    <div className="min-w-0 pr-3">
                      <p className="truncate text-[10px] font-bold uppercase tracking-wider text-[#E6AA4D]">
                        {item.categories.join(' • ')}
                      </p>
                      <h3 className="mt-0.5 truncate text-xs font-bold text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div className="rounded-xl border border-white/20 bg-white/10 p-2 text-[#E6AA4D] backdrop-blur-md transition-transform group-hover:scale-110">
                      <Maximize2 size={15} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state - useful if you later manually enable a category with no files */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm font-semibold text-gray-700">
              No projects are assigned to this category yet.
            </p>
          </div>
        )}

        {/* Load More */}
        {activeCategory === 'All Projects' &&
          visibleCount < filteredItems.length && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + LOAD_MORE_COUNT, filteredItems.length)
                  )
                }
                className="cursor-pointer rounded-xl border border-gray-800 bg-gray-900 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-black hover:shadow-lg"
              >
                Load More Projects ({filteredItems.length - visibleCount} remaining)
              </button>
            </div>
          )}

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#D49942]/30 bg-gradient-to-br from-gray-950 via-slate-900 to-black p-8 text-white shadow-2xl sm:mt-20 sm:p-12 md:flex-row">
          <div className="text-center md:text-left">
            <span className="mb-1 block text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#D49942] sm:text-xs">
              Ready to Stand Out?
            </span>

            <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Request Your Custom Exhibition Concept
            </h3>

            <p className="mt-1 max-w-lg text-xs text-gray-300 sm:text-sm">
              Get a custom 3D architectural proposal and turnkey cost breakdown tailored to your upcoming exhibition.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] hover:from-[#EBB257] hover:to-[#D18F33] hover:shadow-amber-500/35 active:scale-[0.98] sm:text-sm"
          >
            <span>Book Your Custom Stand</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex cursor-zoom-out select-none items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
          >
            {/* Top toolbar */}
            <div
              className="pointer-events-auto absolute left-4 right-4 top-4 z-50 flex items-center justify-between sm:left-8 sm:right-8 sm:top-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="shrink-0 rounded-full border border-[#D49942]/40 bg-[#D49942]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E6AA4D]">
                  {currentLightboxItem.tag}
                </span>

                <span className="hidden truncate text-xs font-semibold text-gray-300 sm:inline sm:text-sm">
                  {currentLightboxItem.title}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-gray-400">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>

                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="cursor-pointer rounded-full border border-white/15 bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 hover:text-[#E6AA4D]"
                  aria-label="Close lightbox"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Previous */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 z-50 -translate-y-1/2 cursor-pointer rounded-full border border-white/20 bg-black/60 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/90 hover:text-[#E6AA4D] sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 z-50 -translate-y-1/2 cursor-pointer rounded-full border border-white/20 bg-black/60 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/90 hover:text-[#E6AA4D] sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <div
              className="pointer-events-none relative flex max-h-[82vh] w-full max-w-5xl items-center justify-center"
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
                className="pointer-events-auto max-h-[80vh] max-w-full rounded-2xl border border-white/15 object-contain shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutGallery;
