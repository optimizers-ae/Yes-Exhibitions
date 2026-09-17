import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, Play, Gem, Settings, Users } from 'lucide-react';
import hero1 from '../assets/hero_1.png';
import hero2 from '../assets/hero_2.png';
import hero3 from '../assets/hero_3.png';

const carouselImages = [
  {
    id: 1,
    image: hero1,
    title: "Modern Island Stand",
    alt: "YES Exhibition Stands - Custom Modern Island Exhibition Stand with LED Lighting"
  },
  {
    id: 2,
    image: hero2,
    title: "Double Decker Architecture",
    alt: "YES Exhibition Stands - Architectural Double Decker Exhibition Stand"
  },
  {
    id: 3,
    image: hero3,
    title: "Turnkey Brand Pavilion",
    alt: "YES Exhibition Stands - Futuristic Turnkey Pavilion and Meeting Suites"
  }
];

const staticFeatures = [
  {
    icon: Gem,
    line1: "Innovative",
    line2: "Design"
  },
  {
    icon: Settings,
    line1: "End-to-End",
    line2: "Execution"
  },
  {
    icon: Users,
    line1: "Dedicated",
    line2: "Support"
  }
];

const Hero = ({ onOpenQuote, onOpenWork }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play interval for background image carousel only
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Keyboard navigation for image slider
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white font-sansation"
      aria-label="YES Exhibition Stands Hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ========================================================================= */}
      {/* LAYER 0: BASE BACKGROUND & IMAGE CAROUSEL (Desktop Full-Bleed View)        */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gray-950" aria-hidden="true">
        {carouselImages.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover object-center lg:object-[80%_center] xl:object-right"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </div>
        ))}

        {/* Visible Curved Arc ')' Overlay with Lowered White Opacity */}
        <div
          className="hidden lg:block absolute inset-0 z-20 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 62% 115% at 0% 50%, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.82) 42%, rgba(255, 255, 255, 0.48) 58%, rgba(255, 255, 255, 0.12) 72%, rgba(255, 255, 255, 0) 82%),
              linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 28%, rgba(255, 255, 255, 0.35) 44%, rgba(255, 255, 255, 0.05) 56%, transparent 66%)
            `
          }}
        />

        {/* Mobile Soft Background Tint with Lower Opacity */}
        <div
          className="lg:hidden absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.65) 100%)'
          }}
        />

        {/* Subtle Ambient Vignette */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-white/20 via-transparent to-white/10" />
      </div>

      {/* Floating Right Vertical Tagline */}
      <div className="hidden xl:flex flex-col items-end absolute top-28 right-8 z-20 pointer-events-none select-none">
        <div className="text-right space-y-1.5 font-bold uppercase tracking-[0.25em] text-[11px] text-gray-500/90 leading-tight">
          <p>IDEAS</p>
          <p>SPACES</p>
          <p>BRANDS</p>
          <p>RESULTS</p>
        </div>
        <div className="w-8 h-[2px] bg-[#D49942] mt-2.5"></div>
      </div>

      {/* ========================================================================= */}
      {/* LAYER 2: STATIC HERO CONTENT (Selectable text, fully clickable buttons)   */}
      {/* ========================================================================= */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-20 lg:pb-0 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content Column (STATIC CONTENT) */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
            
            {/* Top Sub-tagline with Gold Accent Bar */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-gray-600">
                CUSTOM EXHIBITION STANDS
              </span>
              <span className="inline-block w-12 sm:w-16 h-[2px] bg-[#D49942] rounded-full"></span>
            </div>

            {/* Main Headline (Static) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-bold text-gray-900 tracking-tight leading-[1.06] mb-4 sm:mb-5">
              <span className="block text-gray-950 font-bold">
                From Ideas
              </span>
              <span className="block text-[#D49942] gold-gradient-text font-bold">
                to Impact.
              </span>
            </h1>

            {/* Subtitle / Paragraph (Static) */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
              Custom exhibition stands that help you stand out, connect with your audience and create lasting brand experiences at events worldwide.
            </p>

            {/* Call to Action Buttons (Static) */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8">
              {/* Primary Gold CTA */}
              <button
                type="button"
                onClick={onOpenQuote}
                className="group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D49942] relative z-40"
                aria-label="Request a custom exhibition stand quote"
              >
                <span>GET A QUOTE</span>
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* Secondary Transparent / Bordered CTA */}
              <button
                type="button"
                onClick={onOpenWork}
                className="group px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg border-2 border-gray-900 text-gray-900 font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/70 hover:bg-white backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-gray-900 relative z-40"
                aria-label="View our portfolio of completed exhibition stands"
              >
                <span>OUR WORK</span>
                <Play
                  size={13}
                  className="fill-gray-900 text-gray-900 group-hover:scale-110 transition-transform"
                />
              </button>
            </div>

            {/* ========================================================================= */}
            {/* MOBILE IMAGE PREVIEW (Shows clear, vibrant booth render on small screens)  */}
            {/* ========================================================================= */}
            <div className="block lg:hidden my-6 relative w-full aspect-[16/10] sm:h-72 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-900">
              {carouselImages.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E6AA4D] block">
                  Exhibition Showcase
                </span>
                <span className="text-xs font-semibold">
                  {carouselImages[currentSlide].title}
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-[#E6AA4D] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {currentSlide + 1} / {carouselImages.length}
              </div>
            </div>

            {/* Feature Highlights / Badges Row (3 Static Items) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-gray-200/70 max-w-lg">
              {staticFeatures.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3 group">
                    <div className="shrink-0 text-[#D49942] p-1.5 sm:p-2 rounded-lg bg-amber-50/80 border border-[#D49942]/20 group-hover:bg-[#D49942] group-hover:text-white transition-colors">
                      <IconComponent size={20} className="sm:w-[22px] sm:h-[22px]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 text-xs sm:text-sm leading-tight">
                        {feature.line1}
                      </span>
                      <span className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-0.5">
                        {feature.line2}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Left Accent Tagline (Static) */}
            <div className="mt-8 sm:mt-10 pt-4 hidden sm:block">
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-gray-400 space-y-0.5 leading-tight">
                <p>BUILDING</p>
                <p>BRANDS BEYOND</p>
                <p>BOUNDARIES</p>
              </div>
              <div className="w-10 sm:w-12 h-[2px] bg-[#D49942] mt-2"></div>
            </div>

          </div>

          {/* Right Column Spacer for Desktop */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 h-full"></div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* LAYER 3: CAROUSEL DOTS INDICATORS (Positioned Right, No Background Box)   */}
      {/* ========================================================================= */}
      <div
        className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 lg:right-16 z-40 flex items-center gap-2.5 pointer-events-auto"
        role="tablist"
        aria-label="Exhibition Stand Image Carousel Dots"
      >
        {carouselImages.map((item, index) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`View booth render ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D49942] focus-visible:outline-none ${
              index === currentSlide
                ? 'w-8 h-2.5 bg-[#D49942] shadow-md shadow-amber-500/30'
                : 'w-2.5 h-2.5 bg-gray-400/80 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;