import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  Check,
  ShieldCheck,
  ArrowRight,
  Award,
  Users,
  Layers,
  Building2,
  Clock,
  Globe2
} from 'lucide-react';
import founderImg from '../assets/founder.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15
    }
  }
};

const capabilities = [
  {
    title: 'Creative Exhibition Stand Design',
    desc: 'Custom exhibition concepts designed to bring your brand vision to life and create engaging spaces.'
  },
  {
    title: '3D Visualization',
    desc: 'Detailed 3D visualizations that help you experience and refine your exhibition stand before it is built.'
  },
  {
    title: 'Precision Fabrication',
    desc: 'Expert fabrication focused on quality, precision, durability, and attention to every detail.'
  },
  {
    title: 'Professional Installation',
    desc: 'Reliable on-site installation with careful execution to ensure your stand is ready on time.'
  },
  {
    title: 'On-Site Project Support',
    desc: 'Dedicated support throughout the project, from the first conversation to final handover.'
  },
  {
    title: 'End-to-End Exhibition Solutions',
    desc: 'Complete exhibition solutions covering design, visualization, fabrication, installation, and support.'
  }
];


const AboutSection = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-white via-amber-50/25 to-white relative overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-amber-200/25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] bg-amber-300/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Split-Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* LEFT SIDE: Showcase Imagery & Glassmorphism Stats */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[540px] lg:max-w-none">

              {/* Main Visual Image Card */}
              <div
                data-cursor="view"
                data-cursor-text="CRAFT"
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-200/60 group cursor-pointer"
              >
                <img
                  src={founderImg}
                  alt="YES Exhibition Stands - Design, Fabrication & Construction"
                  className="w-full h-[580px] sm:h-[740px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                />

                {/* Image Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />



                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/60 shadow-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-white flex items-center justify-center shadow-md shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-gray-950 text-sm sm:text-base leading-tight">
                          More Than Stands, We Build Experiences
                        </h4>
                       <p className="text-xs text-gray-600 mt-0.5">
  Creating impactful spaces that connect brands with people
</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>


          {/* RIGHT SIDE: Narrative, Capabilities & Clean Checkmark Grid */}
          <div className="lg:col-span-7 space-y-7">

            {/* Header & Subheading */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-3.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/70 shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#D49942]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#B2771D]">
                  ABOUT YES EXHIBITION STANDS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.12]">
                Transforming Brand Visions Into <span className="gold-gradient-text">Award-Winning Stands</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
YES Exhibition Stands specializes in designing and building custom exhibition stands that bring your brand to life. From concept and design to fabrication, installation and on-site support, we create impactful environments that combine creativity, functionality and precision.              </p>
            </motion.div>



            {/* Capabilities Checkmark Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              {capabilities.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="p-4 rounded-2xl bg-white border border-gray-100/90 shadow-xs hover:shadow-md hover:border-amber-200 transition-all duration-300 flex items-start gap-3 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#B2771D] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Bar */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-3 flex flex-wrap items-center gap-4"
            >
              {onOpenQuote && (
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Get Your Exhibition Stand Proposal</span>
                  <ArrowRight size={15} />
                </button>
              )}

              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-emerald-50/80 border border-emerald-200/80 px-4 py-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>From Concept to Final Handover</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
