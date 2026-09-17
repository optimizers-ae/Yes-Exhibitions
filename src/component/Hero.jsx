import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, Play, Gem, Settings, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import GlowCursor from './GlowCursor';
import hero1 from '../assets/hero_1.png';
import hero2 from '../assets/hero_2.png';
import hero3 from '../assets/hero_3.png';

const slides = [
  {
    id: 1,
    image: hero1,
    alt: "YES Exhibition Stands - Modern Bespoke Island Exhibition Booth with illuminated branding and hospitality counter",
    tagline: "CUSTOM EXHIBITION STANDS",
    titlePart1: "From Ideas",
    titlePart2: "to Impact.",
    description: "Custom exhibition stands that help you stand out, connect with your audience and create lasting brand experiences at events worldwide.",
    features: [
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
    ],
    cornerTagline: ["BUILDING", "BRANDS BEYOND", "BOUNDARIES"]
  },
  {
    id: 2,
    image: hero2,
    alt: "YES Exhibition Stands - Architectural Double Decker Exhibition Stand with VIP Upper Deck Lounge",
    tagline: "DOUBLE DECKER & BESPOKE BOOTHS",
    titlePart1: "Elevate Your",
    titlePart2: "Brand Globally.",
    description: "Award-winning multi-level exhibition architectures engineered to command attention on global trade show floors and impress high-value visitors.",
    features: [
      {
        icon: Gem,
        line1: "Architectural",
        line2: "Excellence"
      },
      {
        icon: Settings,
        line1: "Precision",
        line2: "Fabrication"
      },
      {
        icon: Users,
        line1: "Worldwide",
        line2: "Delivery"
      }
    ],
    cornerTagline: ["DOMINATING", "TRADE SHOW", "EXCELLENCE"]
  },
  {
    id: 3,
    image: hero3,
    alt: "YES Exhibition Stands - Futuristic Turnkey Pavilion with Dynamic LED Accent Illumination and Meeting Suites",
    tagline: "INNOVATIVE EXPERIENTIAL SPACES",
    titlePart1: "Bigger Ideas,",
    titlePart2: "Brighter Tomorrows.",
    description: "Turnkey immersive booth environments designed with smart lighting, sustainable materials, and maximum audience engagement at every touchpoint.",
    features: [
      {
        icon: Gem,
        line1: "Experiential",
        line2: "Spaces"
      },
      {
        icon: Settings,
        line1: "Smart Lighting",
        line2: "& AV Tech"
      },
      {
        icon: Users,
        line1: "24/7 On-Site",
        line2: "Assistance"
      }
    ],
    cornerTagline: ["CRAFTING", "ICONIC BRAND", "EXPERIENCES"]
  }
];

const Hero = ({ onOpenQuote, onOpenWork }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play interval
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const activeSlideData = slides[currentSlide];

  return (
    <section
      className="relative min-h-[95vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-white select-none font-sansation"
      aria-roledescription="carousel"
      aria-label="YES Exhibition Stands Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <GlowCursor
        color="#F6CE72"
        secondaryColor="#C78326"
        trailLength={42}
        trailWidth={8}
        trailTaper={0.8}
        followSpeed={0.18}
        glowIntensity={2.1}
        glowSpread={1.3}
        hotspot={0.75}
        brightness={1.35}
        opacity={1}
        pulseSpeed={1.2}
        noiseStrength={0.035}
        idleFade={true}
        idleTimeout={700}
        fadeDuration={900}
        blendMode="normal"
        className="w-full min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-20 lg:pb-0"
      >
        {/* Background Carousel Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={index !== currentSlide}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center lg:object-right transform transition-transform duration-10000 ease-out ${
                  index === currentSlide ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </div>
          ))}

          {/* Sophisticated White/Light Gradient Overlay matching the design mockup */}
          {/* On Desktop: Heavy white on left 45%, feathering smoothly toward the right where the booth shines */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.96) 30%, rgba(255,255,255,0.82) 45%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0) 80%)'
            }}
          />

          {/* Responsive Mobile/Tablet Gradient */}
          <div
            className="absolute inset-0 z-20 pointer-events-none lg:hidden"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.92) 65%, rgba(255,255,255,0.5) 100%)'
            }}
          />

          {/* Subtle Ambient Vignette & Warm Glow */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-white/40 via-transparent to-white/20" />
        </div>

        {/* Floating Right Vertical Tagline */}
        <div className="hidden xl:flex flex-col items-end absolute top-28 right-8 z-30 pointer-events-none">
          <div className="text-right space-y-1.5 font-bold uppercase tracking-[0.25em] text-[11px] text-gray-500/90 leading-tight">
            <p>IDEAS</p>
            <p>SPACES</p>
            <p>BRANDS</p>
            <p>RESULTS</p>
          </div>
          <div className="w-8 h-[2px] bg-[#D49942] mt-2.5"></div>
        </div>

        {/* Main Hero Container */}
        <div className="relative z-30 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Content Column (7 cols on large screens) */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
              
              {/* Top Sub-tagline with Gold Accent Bar */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-gray-600">
                  {activeSlideData.tagline}
                </span>
                <span className="inline-block w-12 sm:w-16 h-[2px] bg-[#D49942] rounded-full"></span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-bold text-gray-900 tracking-tight leading-[1.06] mb-4 sm:mb-5">
                <span className="block text-gray-950 font-bold">
                  {activeSlideData.titlePart1}
                </span>
                <span className="block text-[#D49942] gold-gradient-text font-bold">
                  {activeSlideData.titlePart2}
                </span>
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
                {activeSlideData.description}
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 sm:mb-12">
                {/* Primary Gold CTA */}
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] text-gray-950 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D49942]"
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
                  className="group px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg border-2 border-gray-900 text-gray-900 font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/70 hover:bg-white backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-gray-900"
                  aria-label="View our portfolio of completed exhibition stands"
                >
                  <span>OUR WORK</span>
                  <Play
                    size={13}
                    className="fill-gray-900 text-gray-900 group-hover:scale-110 transition-transform"
                  />
                </button>
              </div>

              {/* Feature Highlights / Badges Row (3 Items) */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-2 border-t border-gray-200/70 max-w-lg">
                {activeSlideData.features.map((feature, idx) => {
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

              {/* Bottom Left Accent Tagline */}
              <div className="mt-8 sm:mt-10 pt-4 hidden sm:block">
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-gray-400 space-y-0.5 leading-tight">
                  {activeSlideData.cornerTagline.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                <div className="w-10 sm:w-12 h-[2px] bg-[#D49942] mt-2"></div>
              </div>

            </div>

            {/* Right Column (Transparent area that allows the 3D booth to be admired, with subtle interactive arrows) */}
            <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-end h-full">
              {/* Desktop Carousel Navigation Arrows */}
              <div className="hidden lg:flex items-center gap-2 absolute bottom-0 right-0 z-30">
                <button
                  onClick={prevSlide}
                  aria-label="Previous exhibition stand slide"
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 hover:text-black flex items-center justify-center shadow-md backdrop-blur-sm border border-gray-200 transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D49942]"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next exhibition stand slide"
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 hover:text-black flex items-center justify-center shadow-md backdrop-blur-sm border border-gray-200 transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D49942]"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Center Carousel Indicators / Dots */}
        <div
          className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200/60 shadow-sm"
          role="tablist"
          aria-label="Slide Selector"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`Switch to slide ${index + 1}: ${slide.tagline}`}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D49942] focus-visible:outline-none ${
                index === currentSlide
                  ? 'w-7 h-2.5 bg-[#D49942] shadow-sm'
                  : 'w-2.5 h-2.5 bg-gray-400/60 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </GlowCursor>
    </section>
  );
};

export default Hero;