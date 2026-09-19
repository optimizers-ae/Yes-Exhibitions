import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  X,
  Send,
  Globe,
  Layers,
  Monitor,
  LayoutGrid,
  Box,
  Wrench,
  Lightbulb,
  Award,
  Ruler
} from 'lucide-react';
import { toast } from 'react-toastify';
import { servicesData, defaultServiceSlug } from '../data/servicesData';

// Map icon strings or components for tab switcher
const serviceTabIcons = {
  'custom-exhibition-stands': Building2,
  'double-decker-stands': Layers,
  'country-trade-pavilions': Globe,
  'turnkey-project-management': ShieldCheck,
  '3d-design-visualization': Monitor,
  'modular-exhibition-stands': LayoutGrid
};

const ServiceDetail = ({ defaultSlug }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Determine current active service key
  const activeSlug = slug || defaultSlug || defaultServiceSlug;
  const currentService = servicesData[activeSlug] || servicesData[defaultServiceSlug];

  // Accordion state
  const [activeFaq, setActiveFaq] = useState(0);

  // Quote Modal State
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceName: currentService.title,
    standSize: '6x3m (18 sqm)',
    budget: '$10k - $25k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top when active service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFormData((prev) => ({ ...prev, serviceName: currentService.title }));
    setActiveFaq(0);
  }, [activeSlug, currentService.title]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsQuoteModalOpen(false);
      toast.success(
        `Thank you! Your quote request for "${currentService.title}" has been submitted. Our team will contact you within 2 hours.`,
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light'
        }
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceName: currentService.title,
        standSize: '6x3m (18 sqm)',
        budget: '$10k - $25k',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white text-[#2D3748] font-sansation relative selection:bg-[#C68A2C]/20 selection:text-[#2D3748]">
      {/* Accessibility Skip Link */}
      <a
        href="#main-service-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#C68A2C] text-white font-bold rounded-md shadow-lg"
      >
        Skip to service content
      </a>

      {/* ========================================================================= */}
      {/* 1. PREMIUM HERO / BANNER SECTION (THEME MATCHED)                          */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[640px] lg:min-h-[720px] pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-[#1A1512]">
        {/* Dynamic Background Banner Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.slug}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0"
          >
            <img
              src={currentService.bannerImage}
              alt={`${currentService.title} Exhibition Stand Banner`}
              className="w-full h-full object-cover object-center opacity-40 filter brightness-75 saturate-110"
            />
            {/* Premium Golden + Dark Brown Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1512]/98 via-[#1A1512]/90 to-[#1A1512]/75" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C68A2C]/30 via-transparent to-transparent" />
            {/* Bottom Golden Line Accent */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C68A2C] to-transparent opacity-60" />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Decorative Golden Lighting */}
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#C68A2C]/20 rounded-full blur-[160px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D49942]/15 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C68A2C]/5 rounded-full blur-[200px] pointer-events-none" />

        <div id="main-service-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          {/* Service Switcher Bar in Hero - Premium Golden Style */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 overflow-x-auto pb-2 scrollbar-none"
          >
            <div className="flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-xl p-2 rounded-2xl border border-[#C68A2C]/20 w-max max-w-full shadow-2xl shadow-black/40">
              {Object.keys(servicesData).map((serviceKey) => {
                const s = servicesData[serviceKey];
                const IconComponent = serviceTabIcons[serviceKey] || Building2;
                const isSelected = s.slug === currentService.slug;
                return (
                  <button
                    key={s.slug}
                    onClick={() => navigate(`/services/${s.slug}`)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#D49942] to-[#B2771D] text-white shadow-lg shadow-[#C68A2C]/40 scale-105'
                        : 'text-gray-300 hover:text-white hover:bg-[#C68A2C]/20'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{s.title}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="max-w-3xl">
            {/* Breadcrumbs - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-2 mb-6 flex-wrap"
            >
              <Link to="/" className="text-xs font-semibold text-gray-400 hover:text-[#D49942] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              <Link to="/#services" className="text-xs font-semibold text-gray-400 hover:text-[#D49942] transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-xs font-bold text-[#1A1512] tracking-wider uppercase bg-gradient-to-r from-[#D49942] to-[#C68A2C] px-3.5 py-1.5 rounded-full shadow-lg shadow-[#C68A2C]/30">
                {currentService.category}
              </span>
            </motion.div>

            {/* Hero Main Dynamic Large Title - Premium Typography */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.slug}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl">
                  {currentService.title.replace(currentService.highlightTitle, '')} <br className="hidden sm:inline" />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D49942] via-[#F0C674] to-[#D49942] mt-2">
                    {currentService.highlightTitle}
                    <span className="absolute -bottom-1 left-0 w-full h-[5px] bg-gradient-to-r from-[#C68A2C] via-[#F0C674] to-[#C68A2C] rounded-full opacity-90 shadow-lg shadow-[#C68A2C]/50" />
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-8 text-lg sm:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl border-l-4 border-[#C68A2C] pl-5 italic">
                  "{currentService.subtitle}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Key Service Highlights - Premium Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-3 text-xs font-medium text-gray-200"
            >
              <div className="flex items-center gap-2 bg-white/[0.08] backdrop-blur-xl px-4 py-2.5 rounded-xl border border-[#C68A2C]/30 shadow-lg shadow-black/20 hover:border-[#C68A2C]/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#D49942]" />
                <span>Custom 3D Architecture</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.08] backdrop-blur-xl px-4 py-2.5 rounded-xl border border-[#C68A2C]/30 shadow-lg shadow-black/20 hover:border-[#C68A2C]/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#D49942]" />
                <span>Turnkey Fabrication & Build</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.08] backdrop-blur-xl px-4 py-2.5 rounded-xl border border-[#C68A2C]/30 shadow-lg shadow-black/20 hover:border-[#C68A2C]/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#D49942]" />
                <span>Venue Permissions Approved</span>
              </div>
            </motion.div>

            {/* Hero CTA Button - Premium Golden */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-br from-[#D49942] via-[#C68A2C] to-[#B2771D] text-white font-bold text-sm tracking-wider uppercase flex items-center gap-3 shadow-xl shadow-[#C68A2C]/40 hover:shadow-2xl hover:shadow-[#C68A2C]/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#service-content-section"
                className="px-6 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-sm transition-all border border-[#C68A2C]/30 hover:border-[#C68A2C]/60 flex items-center gap-2 backdrop-blur-xl"
              >
                <span>Service Details</span>
                <ChevronDown className="w-4 h-4 text-[#D49942]" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DYNAMIC MAIN CONTENT SECTION (2-COLUMN GRID)                            */}
      {/* ========================================================================= */}
      <section id="service-content-section" className="py-20 lg:py-28 bg-[#FFFDF2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT COLUMN (DYNAMIC VISUAL SHOWCASE FROM ASSETS) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-xl border border-[#FFF9E6]">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentService.slug}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={currentService.showcaseImage}
                      alt={`Realistic 3D mockup of ${currentService.title}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </AnimatePresence>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748]/75 via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-[#2D3748]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                    <span className="text-[11px] font-bold text-[#D49B35] tracking-wider uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> {currentService.category}
                    </span>
                  </div>

                  {/* Bottom Floating Info Pill */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gray-100 shadow-lg flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-[#2D3748]">{currentService.title}</h4>
                      <p className="text-[11px] text-[#718096] mt-0.5">High-End Architectural Showcase</p>
                    </div>
                    <span className="text-xs font-bold text-[#C68A2C] bg-[#FFF9E6] px-2.5 py-1 rounded-md border border-[#C68A2C]/20">
                      Turnkey
                    </span>
                  </div>
                </div>

                {/* Secondary Asset Showcase Images */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="rounded-xl overflow-hidden h-24 bg-gray-800 relative group cursor-pointer border border-gray-100">
                    <img
                      src={currentService.secondaryImage}
                      alt="Detailed Exhibition View"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                      Architectural Detail
                    </span>
                  </div>

                  <div className="rounded-xl overflow-hidden h-24 bg-gray-800 relative group cursor-pointer border border-gray-100">
                    <img
                      src={currentService.bannerImage}
                      alt="Finished Exhibition Stand View"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                      Fabrication Finish
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN (DYNAMIC SERVICE DETAILS & BULLETED FEATURES) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9E6] border border-[#C68A2C]/30 text-[#C68A2C] text-xs font-extrabold uppercase tracking-widest w-max mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>{currentService.category}</span>
              </div>

              {/* Dynamic Section Heading */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748] tracking-tight leading-tight">
                {currentService.heading}
              </h2>

              {/* Dynamic Detailed Paragraph */}
              <p className="mt-5 text-base sm:text-lg text-[#718096] leading-relaxed font-normal">
                {currentService.description}
              </p>

              {/* Dynamic Bulleted List with Golden Icon Badges */}
              <div className="mt-8 space-y-4">
                {currentService.bulletFeatures.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-[#C68A2C]/15 shadow-sm hover:shadow-md transition-all group"
                    >
                      {/* Golden Icon Badge */}
                      <div className="w-11 h-11 rounded-xl bg-[#FFF9E6] border border-[#C68A2C]/40 text-[#C68A2C] flex items-center justify-center shrink-0 group-hover:bg-[#C68A2C] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-[#2D3748] group-hover:text-[#C68A2C] transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#718096] leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Row */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-[#C68A2C] hover:bg-[#b07823] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-[#C68A2C]/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Inquire for {currentService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#718096]">
                  <ShieldCheck className="w-4 h-4 text-[#C68A2C]" />
                  <span>Turnkey Guarantee & On-Time Delivery</span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DYNAMIC TECHNICAL SPECIFICATIONS GRID                                   */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#C68A2C] bg-[#FFF9E6] px-3.5 py-1.5 rounded-full border border-[#C68A2C]/20">
              Technical Rigor
            </span>
            <h3 className="mt-4 text-3xl font-extrabold text-[#2D3748] tracking-tight">
              {currentService.title} Specifications
            </h3>
            <p className="mt-3 text-base text-[#718096]">
              Engineered with premium materials and precision craftsman standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentService.technicalSpecs.map((spec, idx) => {
              const SpecIcon = spec.icon || Ruler;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FFFDF2] border border-[#C68A2C]/20 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C68A2C] text-white flex items-center justify-center font-bold mb-4 shadow-sm">
                    <SpecIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#2D3748]">{spec.title}</h4>
                  <p className="mt-2 text-sm text-[#718096] leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DYNAMIC FAQ ACCORDION                                                  */}
      {/* ========================================================================= */}
      {currentService.faqs && currentService.faqs.length > 0 && (
        <section className="py-20 bg-[#FFFDF2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#C68A2C] bg-[#FFF9E6] px-3.5 py-1.5 rounded-full border border-[#C68A2C]/20">
                Frequently Asked Questions
              </span>
              <h3 className="mt-4 text-3xl font-extrabold text-[#2D3748] tracking-tight">
                {currentService.title} FAQ
              </h3>
            </div>

            <div className="space-y-4">
              {currentService.faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#2D3748] hover:text-[#C68A2C] transition-colors cursor-pointer"
                    >
                      <span className="text-base sm:text-lg">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 text-[#C68A2C] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#718096] leading-relaxed border-t border-gray-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. BOTTOM CONVERSION CTA BANNER                                          */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#1A1512] via-[#2D2419] to-[#1A1512] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C68A2C]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D49942]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Start Your <span className="text-[#D49942]">{currentService.title}</span> Project?
          </h3>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal">
            Get a tailored 3D design proposal and turnkey quotation within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-8 py-4 rounded-xl bg-gradient-to-br from-[#D49942] to-[#B2771D] hover:shadow-2xl hover:shadow-[#C68A2C]/50 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#C68A2C]/30 transition-all cursor-pointer hover:-translate-y-0.5"
            >
              Get a Free Quote Now
            </button>
            <Link
              to="/contact-us"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-[#C68A2C]/40 hover:border-[#C68A2C]/80"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FREE QUOTE MODAL DIALOG                                                */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C68A2C]" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#C68A2C]">
                  Free Quote Request
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#2D3748]">
                Request Quote: {currentService.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#718096] mt-1">
                Fill out the brief form below and our senior project manager will contact you within 2 hours.
              </p>

              <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2D3748] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C68A2C] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#2D3748] mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C68A2C] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2D3748] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C68A2C] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#2D3748] mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C68A2C] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2D3748] mb-1">
                      Selected Service
                    </label>
                    <input
                      type="text"
                      name="serviceName"
                      disabled
                      value={currentService.title}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-semibold text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#2D3748] mb-1">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C68A2C] text-sm bg-white"
                    >
                      <option value="Under $10k">Under $10k</option>
                      <option value="$10k - $25k">$10k - $25k</option>
                      <option value="$25k - $50k">$25k - $50k</option>
                      <option value="$50k+">$50k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2D3748] mb-1">
                    Project Requirements / Event Details
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your upcoming event, location, booth dimensions, and key goals..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C68A2C] text-sm resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#C68A2C] hover:bg-[#b07823] text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#C68A2C]/30 transition-all cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Quote Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceDetail;