import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Tv,
  Layers,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const capabilities = [
  {
    title: 'EXHIBITION STAND DESIGN',
    desc: 'Creative concepts developed around your brand identity, business objectives, and specific exhibition hall space.',
    icon: Building2
  },
  {
    title: '3D VISUALIZATION',
    desc: 'Detailed photo-realistic visual concepts that allow you to experience the proposed booth from all angles before production.',
    icon: Tv
  },
  {
    title: 'STAND PRODUCTION',
    desc: 'Turning approved designs into physical exhibition environments with in-house craftsmanship, premium materials, and flawless finishes.',
    icon: Layers
  },
  {
    title: 'BRANDING & GRAPHICS',
    desc: 'Integrated visual communication and large-format high-resolution graphics ensuring your brand is prominently represented.',
    icon: Sparkles
  },
  {
    title: 'INSTALLATION & DISMANTLING',
    desc: 'Professional on-site coordination of the entire setup and dismantling process with 100% on-time handover guaranteed.',
    icon: ShieldCheck
  },
  {
    title: 'PROJECT COORDINATION',
    desc: 'A structured, transparent process from initial briefing through engineering approvals, production, and final delivery.',
    icon: Clock
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const AboutCapabilities = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-white relative border-b border-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-50/60 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-amber-50/50 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16"
        >
          <motion.div variants={headerVariants}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block mb-1"
            >
              CAPABILITIES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950"
            >
              WHAT WE DO
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-[#D49942] font-bold uppercase tracking-wider mt-1"
            >
              FROM CONCEPT TO COMPLETION
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E6AA4D] to-[#C78326] text-white hover:from-[#EBB257] hover:to-[#D18F33] shadow-md hover:shadow-lg transition-all self-start md:self-auto relative overflow-hidden"
            >
              <span className="relative z-10">Discuss Your Exhibition Brief</span>
              <ArrowRight size={15} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#EBB257] to-[#D18F33]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* 6 Capabilities Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {capabilities.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="relative p-7 rounded-3xl bg-gradient-to-br from-white to-gray-50/70 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-[#D49942] transition-all duration-300 group flex flex-col justify-between overflow-hidden"
              >
                {/* Animated top border on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E6AA4D] to-[#C78326]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{ transformOrigin: 'left' }}
                />

                {/* Number watermark */}
                <span className="absolute -top-2 -right-1 text-[5rem] font-black text-gray-100/80 select-none group-hover:text-amber-50 transition-colors duration-500 leading-none">
                  0{idx + 1}
                </span>

                <div className="space-y-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-2xl bg-amber-50 text-[#D49942] border border-amber-200/70 flex items-center justify-center group-hover:bg-[#D49942] group-hover:text-white transition-colors duration-300 shadow-xs"
                  >
                    <Icon size={22} />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-gray-950 group-hover:text-[#B2771D] transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-[#D49942] relative z-10">
                  <motion.span
                    className="inline-flex items-center"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Full In-House Delivery</span>
                    <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.span>
                </div>

                {/* Subtle corner glow on hover */}
                <motion.div
                  className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-amber-100/0 group-hover:bg-amber-100/40 blur-2xl transition-all duration-500"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCapabilities;