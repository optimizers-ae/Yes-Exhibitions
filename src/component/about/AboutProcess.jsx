import { motion } from 'framer-motion';
import { Search, Compass, Sliders, Hammer, Wrench, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    num: '01',
    name: 'DISCOVER',
    sub: 'Understand Your Needs',
    desc: 'We analyze your brand character, show objectives, visitor personas, floor specs, and functional space requirements.',
    icon: Search
  },
  {
    num: '02',
    name: 'DESIGN',
    sub: 'Custom 3D Concepts',
    desc: 'Our architects develop tailored 3D renderings showcasing booth layouts, lighting schemes, and structural aesthetics.',
    icon: Compass
  },
  {
    num: '03',
    name: 'REFINE',
    sub: 'Align on Details',
    desc: 'Collaborative review of materials, interactive tech, graphic artwork, and engineering specifications until fully approved.',
    icon: Sliders
  },
  {
    num: '04',
    name: 'PRODUCE',
    sub: 'In-House Craftsmanship',
    desc: 'Direct fabrication in our specialized production facilities covering joinery, steel framing, paint booths, and electrical.',
    icon: Hammer
  },
  {
    num: '05',
    name: 'INSTALL',
    sub: 'On-Site Construction',
    desc: 'Our master installation crew builds and tests every element on the venue floor, strictly following safety and hall guidelines.',
    icon: Wrench
  },
  {
    num: '06',
    name: 'DELIVER',
    sub: 'Turnkey Handover',
    desc: 'Spotless handover 24 hours before show opening, fully prepped for your sales team, VIP guests, and event visitors.',
    icon: CheckCircle2
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

const AboutProcess = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#fcfbf9] relative overflow-hidden">
      {/* Background Subtle Gradient & Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#ffffff] via-[#fcfbf9] to-[#f7f5f0] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D49942]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#B2771D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Header Section - Sticky Column on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pr-0 lg:pr-4 
                flex flex-col items-center text-center
                lg:items-start lg:text-left"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D49942]/10 border border-[#D49942]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D49942] animate-pulse" />
                <span className="text-xs font-extrabold tracking-[0.2em] text-[#D49942] uppercase">
                  — OUR STORY
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-900 leading-[1.12] text-center lg:text-left">
                From a <br className="hidden sm:inline" />
                Single <br className="hidden sm:inline" />
                Client to a <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D49942] via-[#C38830] to-[#B2771D]">
                  30+ <br className="hidden sm:inline" />
                  Professional <br className="hidden sm:inline" />
                  Growth <br className="hidden sm:inline" />
                  Team.
                </span>
              </h2>

              {/* Description Paragraph with Accent Border */}
              <p className="text-gray-600 text-base sm:text-lg mt-6 leading-relaxed max-w-md 
                border-l-0 lg:border-l-2 border-[#D49942] 
                pl-0 lg:pl-4 py-0.5
                text-center lg:text-left"
              >
                Every milestone in our journey was driven by one thing: client results that speak for themselves.
              </p>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Timeline Guide Line */}
            <div className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#D49942] via-[#D49942]/40 to-transparent" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-6 sm:space-y-8"
            >
              {processSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative pl-12 sm:pl-16 group"
                  >
                    {/* Timeline Dot Node */}
                    <div className="absolute left-[12px] sm:left-[16px] top-7 w-[16px] h-[16px] rounded-full border-2 border-[#D49942] bg-[#fcfbf9] group-hover:bg-[#D49942] group-hover:scale-125 transition-all duration-300 z-10 shadow-sm flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D49942] group-hover:bg-white transition-colors duration-300" />
                    </div>

                    {/* Step Card Container */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(212,153,66,0.12)] hover:border-[#D49942]/40 transition-all duration-300 transform group-hover:-translate-y-1 relative overflow-hidden">
                      
                      {/* Accent Corner Glow on Hover */}
                      <div className="absolute -right-12 -top-12 w-24 h-24 bg-[#D49942]/10 rounded-full blur-xl group-hover:bg-[#D49942]/20 transition-all duration-500 pointer-events-none" />

                      {/* Header Row: Number + Phase Pill + Icon */}
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className="text-2xl sm:text-3xl font-black text-[#D49942] tracking-wider">
                            {step.num}
                          </span>
                          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B2771D] bg-[#D49942]/10 px-3 py-1 rounded-full border border-[#D49942]/20">
                            Phase {idx + 1}
                          </span>
                        </div>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#fcfbf9] border border-gray-200/80 flex items-center justify-center text-[#D49942] group-hover:bg-[#D49942] group-hover:text-white group-hover:border-[#D49942] transition-all duration-300 shadow-xs">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      </div>

                      {/* Content Titles */}
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 group-hover:text-[#B2771D] transition-colors">
                        {step.name}
                      </h3>
                      <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D49942] mt-1 mb-2">
                        {step.sub}
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;