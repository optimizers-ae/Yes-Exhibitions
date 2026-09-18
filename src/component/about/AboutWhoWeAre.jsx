import { motion } from 'framer-motion';
import { Target, Lightbulb, Compass, ShieldCheck } from 'lucide-react';
import aboutBannerImg from '../../assets/about_banner.png';

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

const pillars = [
  {
    number: '01',
    title: 'STRATEGIC',
    desc: 'We begin by understanding the purpose behind your exhibition presence and aligning design with your business goals.',
    icon: Target
  },
  {
    number: '02',
    title: 'CREATIVE',
    desc: 'We develop distinct concepts designed to capture attention and communicate your brand story with authority.',
    icon: Lightbulb
  },
  {
    number: '03',
    title: 'PRACTICAL',
    desc: 'We consider functionality, visitor flow, VIP meeting usability, and seamless execution from the very beginning.',
    icon: Compass
  },
  {
    number: '04',
    title: 'PRECISE',
    desc: 'We pay attention to the architectural details, materials, and finishes that turn a good stand into an exceptional one.',
    icon: ShieldCheck
  }
];

const AboutWhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-20 sm:py-28 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & 4 Pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block">
                YES EXHIBITION STANDS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950 uppercase leading-tight">
                WHO WE ARE
              </h2>
              <div className="text-sm sm:text-base font-bold text-[#D49942] tracking-wider uppercase">
                CREATIVE THINKING. PRACTICAL EXECUTION.
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-950 font-bold">YES Exhibition Stands</strong> is an exhibition stand design and execution company focused on creating distinctive, high-impact environments for brands participating in exhibitions, trade shows, and business events across the UAE and globally.
              </p>
              <p>
                We combine creative design, practical thinking, and professional execution to transform ideas into exhibition spaces that represent the character, stature, and commercial ambition of each brand.
              </p>
            </motion.div>

            {/* 4 Core Pillars Grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-br from-white to-amber-50/20 border border-gray-200/90 shadow-xs hover:border-[#D49942] hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#D49942] border border-amber-200/70 flex items-center justify-center font-bold text-xs group-hover:bg-[#D49942] group-hover:text-white transition-colors">
                        <Icon size={16} />
                      </div>
                      <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-gray-950 group-hover:text-[#B2771D] transition-colors">
                        {p.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 group bg-white">
              <img
                src={aboutBannerImg}
                alt="YES Exhibition Booth - Creative Thinking & Practical Execution"
                className="w-full h-[480px] sm:h-[580px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Floating "PRECISE" Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-white flex items-center justify-center shadow-md shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-[#D49942] uppercase block">
                      PRECISE CRAFTSMANSHIP
                    </span>
                    <h4 className="text-sm font-bold text-gray-950 leading-tight">
                      Attention to Detail in Every Element
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Turning approved concepts into exceptional real-life exhibition spaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
