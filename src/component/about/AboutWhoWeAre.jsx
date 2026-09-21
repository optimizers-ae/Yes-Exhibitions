import { motion } from 'framer-motion';
import { Target, Lightbulb, Compass, ShieldCheck } from 'lucide-react';
import aboutBannerImg from '../../assets/AboutBanner.png';

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
    desc: 'We begin by understanding the purpose behind your exhibitions presence and aligning design with your business goals.',
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
    <section
      id="who-we-are"
      className="relative bg-[#fcfbf9] overflow-hidden border-b border-gray-100"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">

        {/* ============ TOP: LIGHT GOLDEN FEATURE PANEL ============ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-[#D49942]/20 shadow-xl bg-white mb-16 lg:mb-24"
        >
          {/* Image side */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 relative min-h-[320px] sm:min-h-[420px] lg:min-h-full"
          >
            <img
              src={aboutBannerImg}
              alt="YES Exhibitions Booth - Creative Thinking & Practical Execution"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#D49942]/20 via-transparent to-white/80 lg:bg-gradient-to-r lg:from-[#D49942]/10 lg:to-white" />

            {/* Corner accent badge */}
            <div className="absolute top-6 left-6 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-[#D49942]/30 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D49942] via-[#D49942] to-[#B2771D] text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-extrabold tracking-widest text-gray-900 uppercase">
                PRECISE CRAFTSMANSHIP
              </span>
            </div>
          </motion.div>

          {/* Text side - centered on mobile, left on desktop */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6 bg-white 
              text-center items-center
              sm:text-left sm:items-start"
          >
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                {/* THEME COLOR */}
                <span className="w-8 h-px bg-[#D49942]" />
                <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#D49942] uppercase">
                  YES EXHIBITIONS STANDS
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 uppercase leading-[0.95] text-center sm:text-left">
                WHO
                <br />
                <span className="text-[#D49942]">WE ARE</span>
              </h2>

              <div className="text-xs sm:text-sm font-bold text-gray-500 tracking-[0.2em] uppercase pt-1 text-center sm:text-left">
                CREATIVE THINKING. PRACTICAL EXECUTION.
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl text-center sm:text-left">
              <p>
                <strong className="text-gray-900 font-bold">YES Exhibitions Stands</strong> is an exhibitions stand design and execution company focused on creating distinctive, high-impact environments for brands participating in exhibitions, trade shows, and business events across the UAE and globally.
              </p>
              <p>
                We combine creative design, practical thinking, and professional execution to transform ideas into exhibitions spaces that represent the character, stature, and commercial ambition of each brand.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutWhoWeAre;