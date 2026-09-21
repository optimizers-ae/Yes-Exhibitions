import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData, defaultServiceSlug } from '../data/servicesData';

const ServiceDetail = ({ defaultSlug }) => {
  const { slug } = useParams();

  // Determine current active service key
  const activeSlug = slug || defaultSlug || defaultServiceSlug;
  const currentService = servicesData[activeSlug] || servicesData[defaultServiceSlug];

  // Update document title and scroll to top on change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentService) {
      document.title = `${currentService.title} | YES Exhibitions Stands`;
    }
  }, [activeSlug, currentService]);

  return (
    <div className="text-[#2D3748] font-sansation relative selection:bg-[#C68A2C]/20 selection:text-[#2D3748] bg-black">
      {/* Accessibility Skip Link */}
      <a
        href="#main-service-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#D49942] text-white font-bold rounded-md shadow-lg"
      >
        Skip to service content
      </a>

      {/* ========================================================================= */}
      {/*  HERO / BANNER SECTION (FULL SCREEN HEIGHT & CLEAR VISIBLE EVENT PHOTO)    */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen lg:min-h-[100dvh] pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-black">
        {/* Dynamic Background Banner Image from assets/evet_images with Clear Visibility */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.slug}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0"
          >
            <img
              src={currentService.bannerImage}
              alt={`${currentService.title} - YES Exhibitions Stands`}
              className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
            />

            {/* Light Balanced Warm Dark Gradient Overlays - Photo Is Clearly Visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />

            {/* Bottom Golden Line Accent */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C68A2C] to-transparent opacity-80" />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Subtle Golden Lighting (Warm Amber only, No Blue) */}
        <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-[#C68A2C]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D49942]/10 rounded-full blur-[160px] pointer-events-none" />

        <div id="main-service-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-2 mb-6 flex-wrap drop-shadow-md"
            >
              <Link to="/" className="text-xs font-semibold text-gray-200 hover:text-[#D49942] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <a href="/#services" className="text-xs font-semibold text-gray-200 hover:text-[#D49942] transition-colors">
                Services
              </a>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <span className="text-xs font-bold text-[#1A1512] tracking-wider uppercase bg-gradient-to-r from-[#D49942] to-[#C68A2C] px-3.5 py-1.5 rounded-full shadow-lg shadow-[#C68A2C]/30">
                {currentService.category}
              </span>
            </motion.div>

            {/* Dynamic Large Hero Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.slug}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                  {currentService.title.replace(currentService.highlightTitle || '', '')} <br className="hidden sm:inline" />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D49942] via-[#F0C674] to-[#D49942] mt-2">
                    {currentService.highlightTitle || currentService.title}
                    <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-gradient-to-r from-[#C68A2C] via-[#F0C674] to-[#C68A2C] rounded-full opacity-90 shadow-lg shadow-[#C68A2C]/50" />
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-base sm:text-lg text-gray-100 font-medium leading-relaxed max-w-2xl border-l-4 border-[#C68A2C] pl-5 italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  "{currentService.subtitle}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Key Dynamic Feature Highlights / Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-gray-200"
            >
              {currentService.tags?.map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C68A2C]/40 shadow-lg shadow-black/30 hover:border-[#C68A2C]/80 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D49942]" />
                  <span className="font-semibold text-white drop-shadow-xs">{tag}</span>
                </div>
              ))}
            </motion.div>

            {/* Hero CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact-us"
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-br from-[#D49942] via-[#C68A2C] to-[#B2771D] text-white font-bold text-sm tracking-wider uppercase flex items-center gap-3 shadow-xl shadow-[#C68A2C]/40 hover:shadow-2xl hover:shadow-[#C68A2C]/60 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/#services"
                className="px-6 py-4 rounded-xl bg-black/40 hover:bg-black/60 text-white font-semibold text-sm transition-all border border-white/20 hover:border-[#C68A2C]/60 flex items-center gap-2 backdrop-blur-md shadow-lg shadow-black/30"
              >
                <span>All Services</span>
                <ChevronRight className="w-4 h-4 text-[#D49942]" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;