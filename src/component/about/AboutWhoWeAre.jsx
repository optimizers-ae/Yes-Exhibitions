import { motion } from 'framer-motion';
import { Target, Lightbulb, Compass, ShieldCheck } from 'lucide-react';
import aboutBannerImg from '../../assets/AboutBanner.jpeg';

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
    <section
      id="who-we-are"
      className="relative bg-[#fcfbf9] overflow-hidden border-b border-gray-100"
    >
      {/* Giant Background Watermark - Now in Golden Tone */}
      {/* <div className="absolute inset-x-0 top-0 pointer-events-none select-none overflow-hidden">
        <span className="block text-center text-[22vw] sm:text-[18vw] lg:text-[14vw] font-black leading-none text-[#D49942]/5 tracking-tighter whitespace-nowrap">
          WHO WE ARE
        </span>
      </div> */}

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
              alt="YES Exhibition Booth - Creative Thinking & Practical Execution"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Light golden gradient overlay instead of black */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D49942]/20 via-transparent to-white/80 lg:bg-gradient-to-r lg:from-[#D49942]/10 lg:to-white" />

            {/* Corner accent badge - THEME COLOR MATCHED */}
            <div className="absolute top-6 left-6 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-[#D49942]/30 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D49942] via-[#D49942] to-[#B2771D] text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-extrabold tracking-widest text-gray-900 uppercase">
                PRECISE CRAFTSMANSHIP
              </span>
            </div>
          </motion.div>

          {/* Text side - Now light theme */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6 bg-white"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {/* THEME COLOR */}
                <span className="w-8 h-px bg-[#D49942]" />
                <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#D49942] uppercase">
                  YES EXHIBITION STANDS
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 uppercase leading-[0.95]">
                WHO
                <br />
                {/* THEME COLOR */}
                <span className="text-[#D49942]">WE ARE</span>
              </h2>

              <div className="text-xs sm:text-sm font-bold text-gray-500 tracking-[0.2em] uppercase pt-1">
                CREATIVE THINKING. PRACTICAL EXECUTION.
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              <p>
                <strong className="text-gray-900 font-bold">YES Exhibition Stands</strong> is an exhibition stand design and execution company focused on creating distinctive, high-impact environments for brands participating in exhibitions, trade shows, and business events across the UAE and globally.
              </p>
              <p>
                We combine creative design, practical thinking, and professional execution to transform ideas into exhibition spaces that represent the character, stature, and commercial ambition of each brand.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutWhoWeAre;