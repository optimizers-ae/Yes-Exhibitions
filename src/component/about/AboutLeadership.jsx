import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import founderImg from '../../assets/founder.png';

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

const AboutLeadership = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Founder Portrait (Slide 12) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/90 bg-gradient-to-b from-amber-50/40 via-white to-gray-100 flex justify-center pt-8">
              <img
                src={founderImg}
                alt="Sherif Mostafa - Managing Director of YES Exhibition Stands"
                className="w-full max-w-[340px] h-[480px] sm:h-[560px] object-contain object-bottom hover:scale-105 transition-transform duration-500"
              />

              {/* Director Badge */}
              <div className="absolute bottom-6 inset-x-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-xl text-center">
                <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-950">
                  SHERIF MOSTAFA
                </h4>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#D49942] block mt-0.5">
                  MANAGING DIRECTOR
                </span>
              </div>
            </div>
          </motion.div>

          {/* Founder Statement & Message (Slide 12 & 13) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block mb-1">
                EXECUTIVE LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950">
                SHERIF MOSTAFA
              </h2>
              <span className="text-sm font-bold uppercase tracking-wider text-[#D49942]">
                MANAGING DIRECTOR
              </span>
            </motion.div>

            {/* Founder Quote Card */}
            <motion.div variants={fadeInUp} className="p-6 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80 shadow-xs relative">
              <Quote className="w-10 h-10 text-[#D49942]/25 absolute top-4 right-4 pointer-events-none" />
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed italic">
                "At YES Exhibition Stands, I believe an exhibition stand should be more than a structure inside an exhibition hall. It should represent the brand, create a strong first impression, and provide an environment where businesses can connect with customers and partners."
              </p>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed mt-4 italic">
                "My focus is to build YES around creativity, professionalism, attention to detail, and genuine client relationships."
              </p>
            </motion.div>

            {/* Ambition Box */}
            <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-gradient-to-r from-gray-950 to-gray-900 text-white border border-gray-800 shadow-md space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E2A243]">
                OUR AMBITION IS SIMPLE:
              </span>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white leading-snug">
                TO BE MORE THAN A SUPPLIER — TO BE A TRUSTED PARTNER IN OUR CLIENTS' SUCCESS.
              </h3>
            </motion.div>

            {/* Message from YES (Slide 13) */}
            <motion.div variants={fadeInUp} className="pt-2 text-xs sm:text-sm text-gray-600 space-y-3 leading-relaxed">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                A MESSAGE FROM YES:
              </h4>
              <p>
                Every exhibition is an opportunity — an opportunity to introduce your brand, meet new customers, strengthen relationships, launch something new, create conversations, and make a lasting impression.
              </p>
              <p>
                At YES, we want to help our clients make the most of that opportunity by creating exhibition environments that are visually powerful, functional, and true to their brand.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
