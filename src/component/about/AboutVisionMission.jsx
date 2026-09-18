import { motion } from 'framer-motion';
import { Eye, Target, Sparkles, CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

const AboutVisionMission = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50/60 via-amber-50/20 to-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-2"
        >
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block">
            OUR DIRECTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950">
            OUR VISION & MISSION
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E6AA4D] to-[#C78326] mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Vision Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#D49942] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 text-[#D49942] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#D49942] group-hover:text-white transition-all shadow-xs">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-950">
                OUR VISION
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                To become a trusted exhibition stand partner for brands in the UAE and the wider region, recognized for creative thinking, quality execution, and a client-focused approach.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D49942]">
              <Sparkles size={15} />
              <span>Excellence in the UAE & Globally</span>
            </div>
          </motion.div>

          {/* Mission Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#D49942] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 text-[#D49942] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#D49942] group-hover:text-white transition-all shadow-xs">
                <Target size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-950">
                OUR MISSION
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                To create exhibition environments that bring our clients' brands, stories, and ambitions to life through thoughtful design and disciplined execution.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D49942]">
              <CheckCircle2 size={15} />
              <span>Disciplined Execution & Turnkey Delivery</span>
            </div>
          </motion.div>

        </div>

        {/* Slogan Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-amber-100/50 to-amber-50 border border-amber-200/80 max-w-2xl mx-auto shadow-xs"
        >
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#B2771D] uppercase">
            YOUR VISION • OUR EXPERTISE • EXCEPTIONAL STANDS
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutVisionMission;
