import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Gem, Settings, Users } from 'lucide-react';

import hero1 from '../assets/hero_1.png';
import hero2 from '../assets/hero_2.png';
import hero3 from '../assets/hero_3.png';

const carouselImages = [
  {
    id: 1,
    image: hero1,
    title: 'Modern Island Stand',
    alt: 'YES Exhibitions Stands - premium custom island exhibitions stand',
  },
  {
    id: 2,
    image: hero2,
    title: 'Double Decker Stand',
    alt: 'YES Exhibitions Stands - premium double deck exhibitions stand',
  },
  {
    id: 3,
    image: hero3,
    title: 'Custom Brand Pavilion',
    alt: 'YES Exhibitions Stands - premium custom brand exhibitions pavilion',
  },
];

const staticFeatures = [
  { icon: Gem, line1: 'Premium', line2: 'Design' },
  { icon: Settings, line1: 'Expert', line2: 'Build Team' },
  { icon: Users, line1: 'End-to-End', line2: 'Support' },
];

const AUTOPLAY_DELAY = 6000;
const SWIPE_DISTANCE = 45;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: custom * 0.1,
    },
  }),
};

const FeatureRow = ({ mobile = false }) => (
  <div
    className={
      mobile
        ? 'grid grid-cols-3 gap-2 border-t border-slate-200 pt-5'
        : 'grid w-full max-w-[590px] grid-cols-3 gap-0 border-t border-slate-200 pt-5 lg:pt-6 xl:pt-7'
    }
  >
    {staticFeatures.map((feature, index) => {
      const Icon = feature.icon;

      return (
        <div
          key={`${feature.line1}-${feature.line2}`}
          className={
            mobile
              ? 'flex min-w-0 flex-col items-center gap-1.5 px-1 text-center'
              : `flex items-center gap-2.5 lg:gap-3 xl:gap-3.5 px-2 lg:px-3 xl:px-4 ${
                  index === 0 ? 'pl-0' : ''
                } ${
                  index !== staticFeatures.length - 1
                    ? 'border-r border-slate-200'
                    : ''
                }`
          }
        >
          <div
            className={
              mobile
                ? 'flex h-8 w-8 shrink-0 items-center justify-center text-[#D89422]'
                : 'flex h-9 w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 shrink-0 items-center justify-center text-[#D89422]'
            }
          >
            <Icon
              size={mobile ? 20 : 25}
              className="lg:w-[26px] lg:h-[26px] xl:w-[29px] xl:h-[29px]"
              strokeWidth={1.6}
            />
          </div>

          <div className="min-w-0 leading-tight">
            <div
              className={
                mobile
                  ? 'text-[11px] font-semibold text-slate-900 sm:text-xs'
                  : 'text-xs lg:text-[13px] xl:text-sm font-semibold text-slate-900'
              }
            >
              {feature.line1}
            </div>
            <div
              className={
                mobile
                  ? 'mt-0.5 text-[10px] text-slate-500 sm:text-[11px]'
                  : 'mt-0.5 text-[11px] lg:text-xs xl:text-sm text-slate-600'
              }
            >
              {feature.line2}
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prevSlide();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      nextSlide();
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    setIsPaused(true);
  };

  const handleTouchEnd = (event) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;

    touchStartX.current = null;
    setIsPaused(false);

    if (startX == null || endX == null) return;

    const delta = startX - endX;
    if (Math.abs(delta) < SWIPE_DISTANCE) return;

    if (delta > 0) nextSlide();
    else prevSlide();
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-white min-h-screen lg:min-h-[100dvh] flex flex-col justify-center pt-20 sm:pt-24 lg:pt-24 xl:pt-28 pb-6 sm:pb-8 lg:pb-10 xl:pb-12"
      aria-label="YES Exhibitions Stands hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
    >
      {/* Clean background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-white"
      />

      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10 xl:gap-12 lg:px-12 2xl:gap-16 2xl:px-16 my-auto">
        {/* LEFT CONTENT - Centered on small screens */}
        <div className="relative z-10 lg:col-span-6 xl:col-span-5 2xl:col-span-5 text-center lg:text-left">
          <div className="mx-auto max-w-[620px] lg:max-w-none">
            <motion.div
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-3 sm:mb-4 flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] sm:tracking-[0.30em] text-slate-500">
                Custom Exhibitions Stands
              </span>
              <span className="h-px w-10 shrink-0 bg-[#D89A2B] sm:w-14" />
            </motion.div>

            <motion.h1
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2.3rem,6vw,4.25rem)] sm:text-5xl lg:text-[46px] xl:text-[58px] 2xl:text-[72px] font-bold leading-[1.03] sm:leading-[1.01] lg:leading-[1.02] xl:leading-[0.98] tracking-[-0.04em] text-[#101010]"
            >
              Build exhibitions
              <span className="block">stands with</span>
              <span className="block text-[#D28C1C]">confidence.</span>
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mt-4 sm:mt-5 lg:mt-5 xl:mt-6 text-[14px] font-normal leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-[15px] lg:leading-relaxed xl:text-[17px] xl:leading-relaxed max-w-[560px] mx-auto lg:mx-0"
            >
              We help brands design, build and deliver premium custom exhibitions
              stands that attract attention, create meaningful experiences and
              deliver real impact at events worldwide.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start sm:gap-4"
            >
              <Link
                to="/contact-us"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#D99A2B] px-6 text-xs sm:text-sm font-bold uppercase tracking-[0.03em] text-white transition-colors duration-200 hover:bg-[#C9881D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D49942] focus-visible:ring-offset-2 sm:min-h-14 sm:w-auto sm:px-7"
              >
                Contact us
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/gallery"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md border border-slate-300 bg-white px-6 text-xs sm:text-sm font-bold uppercase tracking-[0.03em] text-[#111] transition-colors duration-200 hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 sm:min-h-14 sm:w-auto sm:px-7"
              >
                See our work
                <Play
                  size={14}
                  className="fill-current transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            {/* Desktop feature row */}
            <motion.div
              custom={5}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mt-8 sm:mt-10 lg:mt-8 xl:mt-10 hidden lg:block"
            >
              <FeatureRow />
            </motion.div>
          </div>
        </div>

        {/* RIGHT CAROUSEL — PURE IMAGE ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 lg:col-span-6 xl:col-span-7 2xl:col-span-7 flex flex-col justify-center"
        >
          <div
            className="relative mx-auto w-full max-w-[950px] lg:max-w-none"
            aria-roledescription="carousel"
            aria-label="Exhibitions stand showcase"
          >
            <div
              className="relative aspect-[4/3] min-[500px]:aspect-[16/10] lg:aspect-[1.25/1] xl:aspect-[1.32/1] 2xl:aspect-[1.40/1] w-full max-h-[500px] xl:max-h-[580px] 2xl:max-h-[660px] touch-pan-y overflow-hidden rounded-2xl border border-slate-200 bg-[#f5f5f5] shadow-[0_16px_45px_rgba(15,23,42,0.10)] sm:rounded-[24px] lg:rounded-[26px] xl:rounded-[30px] cursor-pointer"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={nextSlide}
              data-cursor="view"
              data-cursor-text="EXPLORE"
            >
              {carouselImages.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                    index === currentSlide
                      ? 'z-10 opacity-100'
                      : 'z-0 opacity-0 pointer-events-none'
                  }`}
                  aria-hidden={index !== currentSlide}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full select-none object-cover object-center"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    draggable="false"
                  />
                </div>
              ))}
            </div>

            {/* 3 clean carousel dots */}
            <div
              className="mt-4 sm:mt-5 flex items-center justify-center gap-2.5 sm:gap-3"
              role="tablist"
              aria-label="Choose exhibitions stand image"
            >
              {carouselImages.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={index === currentSlide}
                  aria-label={`Show ${item.title}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D49942] focus-visible:ring-offset-2 cursor-pointer ${
                    index === currentSlide
                      ? 'bg-[#D89422]'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <p className="sr-only" aria-live="polite">
              Showing {carouselImages[currentSlide].title}
            </p>
          </div>
        </motion.div>

        {/* Mobile/tablet feature row */}
        <motion.div
          custom={6}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="lg:hidden"
        >
          <FeatureRow mobile />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;