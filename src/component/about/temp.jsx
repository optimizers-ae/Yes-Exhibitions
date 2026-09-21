import React from 'react'

const temp = () => {
  return (
       <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-amber-50/40 via-white to-gray-50/50 overflow-hidden border-b border-gray-100">
        {/* Background Soft Warm Glows */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-amber-300/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between mb-8 sm:mb-10"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
              <Link to="/" className="hover:text-[#D49942] transition-colors">Home</Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-[#D49942] font-bold">About Us</span>
            </div>

            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-extrabold tracking-widest uppercase text-[#D49942] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 shadow-xs">
              <Sparkles size={13} className="text-[#D49942]" />
              <span>Company Profile</span>
            </div>
          </motion.div>

          {/* Hero Main Content Grid */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: Headlines & Story */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6"
            >
              <motion.div variants={fadeInUp} className="space-y-3">
                <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#D49942] uppercase block">
                  YES EXHIBITIONS STANDS
                </span>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gray-950 leading-[1.1]">
                  DESIGN. BUILD. INSPIRE.
                  <span className="block mt-2 text-2xl sm:text-4xl md:text-5xl gold-gradient-text">
                    WE BUILD BRAND EXPERIENCES.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed"
              >
                <strong className="text-gray-950 font-bold">YOUR VISION • OUR EXPERTISE • EXCEPTIONAL STANDS.</strong> We combine award-winning architectural design, precision in-house fabrication, and seamless turnkey on-site delivery for leading brands across the UAE, Middle East, and worldwide.
              </motion.p>

              {/* Action CTAs */}
              <motion.div
                variants={fadeInUp}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact-us"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Request a Custom 3D Proposal</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="#who-we-are"
                  className="px-6 py-4 rounded-xl bg-white border border-gray-200 hover:border-amber-300 hover:bg-amber-50/40 text-gray-800 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xs flex items-center gap-2"
                >
                  <span>Discover Our Story</span>
                </a>
              </motion.div>

              {/* 4 Stats Grid */}
              <motion.div
                variants={fadeInUp}
                className="pt-6 border-t border-gray-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {stats.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[#D49942]">
                        <Icon size={16} />
                        <span className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">
                          {s.value}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-500 leading-tight">
                        {s.label}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Column: Layered Premium Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/90 bg-white group">
                <img
                  src={aboutBannerImg}
                  alt="YES Exhibitions Stand - Design Build Inspire"
                  className="w-full h-[460px] sm:h-[560px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-md flex items-center gap-2 text-xs font-bold text-gray-900">
                  <Sparkles size={14} className="text-[#D49942]" />
                  <span>Turnkey Exhibitions Stand Architecture</span>
                </div>

                {/* Bottom Floating Info Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/80 shadow-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-white flex items-center justify-center shadow-md shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D49942] block">
                          TRUSTED BRAND PARTNER
                        </span>
                        <h4 className="text-sm font-bold text-gray-900 leading-tight">
                          Dubai • Abu Dhabi • Riyadh • Global
                        </h4>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          Delivering world-class bespoke stands across global trade expos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section> 
  )
}

export default temp