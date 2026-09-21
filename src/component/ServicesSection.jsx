import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesList } from '../data/servicesData';

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
      {/* Background Decorative Warm Golden Ambient Elements (No Blue) */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-amber-300/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center max-w-5xl mx-auto mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-[#D49942]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#B2771D]">
              OUR CORE SERVICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Elevate Your Brand With <span className="gold-gradient-text">Bespoke Excellence</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            From creative stand design and 3D visualization to fabrication, installation, and complete turnkey delivery, we provide end-to-end Exhibitions solutions designed to make your brand stand out.
          </p>
        </motion.div>

        {/* Card Stacking Container */}
        <div className="relative max-w-5xl mx-auto pb-24 sm:pb-32">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            // Incremental sticky offset so the header tabs cascade neatly
            const topOffset = 80 + idx * 30;
            const serviceImg = service.cardImage || service.bannerImage || service.image;

            return (
              <div
                key={service.id || service.slug}
                style={{
                  top: `${topOffset}px`,
                  zIndex: idx + 10
                }}
                className="sticky mb-16 sm:mb-24 last:mb-0"
              >
                <div className="bg-white rounded-3xl border border-gray-200/90 shadow-[0_15px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_25px_65px_rgba(212,153,66,0.22)] transition-all duration-300 overflow-hidden group">

                  {/* Top Subtle Gold Accent Line */}
                  <div className="h-2 w-full bg-gradient-to-r from-amber-300 via-[#D49942] to-amber-500" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

                    {/* Left Side: Clickable Image Showcase */}
                    <Link
                      to={`/services/${service.slug}`}
                      className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[280px] sm:min-h-[380px] bg-gray-950 overflow-hidden block cursor-pointer"
                    >
                      <img
                        src={serviceImg}
                        alt={`${service.title} - YES Exhibitions`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                        loading="lazy"
                      />

                      {/* Warm Vignette Overlay (No Blue) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-black/25 to-black/10" />

                      {/* Top Left Category Badge */}
                      <div className="absolute top-5 left-5 bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                        <span className="text-[10px] font-black tracking-widest text-[#E6AA4D] uppercase">
                          {service.category}
                        </span>
                      </div>

                      {/* Top Right Service Number */}
                      <div className="absolute top-4 right-5 text-3xl sm:text-4xl font-black tracking-tighter text-white/35 group-hover:text-amber-400 transition-colors">
                        {service.id}
                      </div>

                      {/* Floating Circular Icon Badge */}
                      {Icon && (
                        <div className="absolute bottom-5 left-5 w-13 h-13 rounded-2xl bg-gradient-to-br from-[#1E1E1E] to-[#0A0A0A] border-2 border-[#D49942] text-[#E6AA4D] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                      )}
                    </Link>

                    {/* Right Side: Content & Actions */}
                    <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-white via-amber-50/20 to-white">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#B2771D] uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-[#D49942]" />
                          <span>Service {service.id} of 06</span>
                        </div>

                        {/* Clickable Title Link */}
                        <Link to={`/services/${service.slug}`} className="block">
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 group-hover:text-[#B2771D] transition-colors leading-tight">
                            {service.title}
                          </h3>
                        </Link>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                          {service.desc || service.subtitle}
                        </p>

                        {/* Feature Tags */}
                        {service.tags && service.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {service.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="text-[11px] font-bold bg-amber-50 text-[#965E0C] px-3.5 py-1 rounded-full border border-amber-200/80 shadow-2xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Footer with CTA */}
                      <div className="pt-8 mt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                        <Link
                          to={`/services/${service.slug}`}
                          className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                        >
                          <span>View Service Details</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>

                        <div className="text-xs font-semibold text-gray-500">
                          100% Turnkey Execution
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
