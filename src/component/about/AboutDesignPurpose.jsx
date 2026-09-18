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
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const designFactors = [
  {
    title: 'VISIBILITY',
    desc: 'Create a commanding visual presence that attracts attention and footfall from across the entire exhibition floor.',
    icon: Eye
  },
  {
    title: 'BRAND EXPERIENCE',
    desc: 'Translate your corporate identity into an immersive, physical architectural environment visitors can feel.',
    icon: Sparkles
  },
  {
    title: 'FUNCTIONALITY',
    desc: 'Balance bold visual impact with functional meeting zones, product demonstration lounges, storage, and natural visitor flow.',
    icon: Layers
  },
  {
    title: 'DETAIL',
    desc: 'Precision joinery, seamless paint finishes, luxury lighting accents, and flawless details that set high-end brands apart.',
    icon: CheckCircle2
  }
];

const AboutDesignPurpose = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 group bg-white">
              <img
                src={hero3Img}
                alt="YES Exhibition Stand Design With Purpose"
                className="w-full h-[480px] sm:h-[580px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

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
            className="lg:col-span-7 order-1 lg:order-2 space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block">
                DESIGN APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950 leading-tight">
                DESIGN WITH PURPOSE
              </h2>
              <div className="text-sm sm:text-base font-bold text-[#D49942] tracking-wider uppercase">
                VISUAL IMPACT + PRACTICAL EXPERIENCE
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm sm:text-base text-gray-600 leading-relaxed">
              An exhibition stand should do more than look impressive. It should tell your story, make your brand recognizable, guide visitors naturally through the space, and create an environment where meaningful conversations and commercial partnerships happen.
            </motion.p>

            {/* 4 Pillars Grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {designFactors.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-gray-200/90 hover:border-[#D49942] hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-amber-50 text-[#D49942] border border-amber-200/70 group-hover:bg-[#D49942] group-hover:text-white transition-colors shadow-xs">
                        <Icon size={16} />
                      </div>
                      <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-gray-950 group-hover:text-[#B2771D]">
                        {f.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {f.desc}
                    </p>
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
