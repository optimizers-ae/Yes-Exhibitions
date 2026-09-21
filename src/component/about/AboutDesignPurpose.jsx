import { motion } from 'framer-motion';
import { Lightbulb, Eye, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import hero3Img from '../../assets/hero_3.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const designFactors = [
  {
    num: '01',
    title: 'VISIBILITY',
    desc: 'Create a commanding visual presence that attracts attention and footfall from across the entire exhibitions floor.',
    icon: Eye
  },
  {
    num: '02',
    title: 'BRAND EXPERIENCE',
    desc: 'Translate your corporate identity into an immersive, physical architectural environment visitors can feel.',
    icon: Sparkles
  },
  {
    num: '03',
    title: 'FUNCTIONALITY',
    desc: 'Balance bold visual impact with functional meeting zones, product demonstration lounges, storage, and natural visitor flow.',
    icon: Layers
  },
  {
    num: '04',
    title: 'DETAIL',
    desc: 'Precision joinery, seamless paint finishes, luxury lighting accents, and flawless details that set high-end brands apart.',
    icon: CheckCircle2
  }
];

const AboutDesignPurpose = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden border-b border-gray-100">

      {/* Unique diagonal gold accent band */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-bl from-[#D49942]/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D49942]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D49942]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2 lg:order-1 relative"
          >
            {/* Rotated outline frame — unique touch */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D49942]/40 rounded-3xl -rotate-3 pointer-events-none hidden sm:block" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group bg-white">
              <img
                src={hero3Img}
                alt="YES Exhibitions Stand Design With Purpose"
                className="w-full h-[480px] sm:h-[580px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

              {/* Floating top-left stat badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-white/80">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Trusted by</div>
                <div className="text-lg font-black text-gray-950 leading-none">200+ Brands</div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-lg text-gray-900">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#D49942] text-white flex items-center justify-center font-bold shrink-0">
                    <Lightbulb size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-gray-950">
                      VISUAL IMPACT + PRACTICAL EXPERIENCE
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Balancing aesthetic architecture with business performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative & 4 Focus Areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lg:col-span-7 order-1 lg:order-2 space-y-8 
              text-center items-center
              lg:text-left lg:items-start
              flex flex-col"
          >
            <motion.div 
              variants={fadeInUp} 
              className="space-y-3 flex flex-col items-center lg:items-start w-full"
            >
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="h-px w-10 bg-[#D49942]" />
                <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase">
                  DESIGN APPROACH
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950 leading-tight text-center lg:text-left">
                DESIGN WITH <span className="text-[#D49942]">PURPOSE</span>
              </h2>
              <div className="text-sm sm:text-base font-bold text-gray-500 tracking-wider uppercase text-center lg:text-left">
                VISUAL IMPACT + PRACTICAL EXPERIENCE
              </div>
            </motion.div>

            <motion.p 
              variants={fadeInUp} 
              className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl text-center lg:text-left"
            >
              An exhibitions stand should do more than look impressive. It should tell your story, make your brand recognizable, guide visitors naturally through the space, and create an environment where meaningful conversations and commercial partnerships happen.
            </motion.p>

            {/* 4 Pillars Grid — numbered editorial style */}
            <motion.div 
              variants={fadeInUp} 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
            >
              {designFactors.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <div
                    key={idx}
                    className="relative p-5 rounded-2xl bg-white border border-gray-200/90 hover:border-[#D49942] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden text-left"
                  >
                    {/* subtle gold corner glow */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#D49942]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-start justify-between mb-3 relative">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-amber-50 text-[#D49942] border border-amber-200/70 group-hover:bg-[#D49942] group-hover:text-white transition-colors shadow-sm">
                          <Icon size={16} />
                        </div>
                        <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-gray-950 group-hover:text-[#B2771D] transition-colors">
                          {f.title}
                        </h4>
                      </div>
                      <span className="text-2xl font-black text-gray-100 group-hover:text-[#D49942]/30 transition-colors leading-none">
                        {f.num}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed relative">
                      {f.desc}
                    </p>

                    {/* bottom gold line grow on hover */}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#D49942] group-hover:w-full transition-all duration-500" />
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutDesignPurpose;