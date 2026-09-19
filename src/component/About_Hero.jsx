import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Users } from 'lucide-react';
import aboutBannerImg from '../assets/AboutBanner.jpeg';

const About_Hero = () => {
  // ================= ANIMATION VARIANTS =================

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const goldenTextVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const featureContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.8 },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[750px] flex items-center overflow-hidden bg-[#fcfbf9]">

      {/* ================= BACKGROUND IMAGE ================= */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 w-full h-full z-0 flex items-center justify-end"
      >
        <img
          src={aboutBannerImg}
          alt="YES Exhibition Stands Design"
          className="w-full h-full object-cover object-center sm:object-contain sm:object-right opacity-30 sm:opacity-100"
        />
        {/* Mobile overlay for readability */}
        <div className="absolute inset-0 bg-[#fcfbf9]/60 sm:hidden" />
      </motion.div>

      {/* ================= FOREGROUND CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full relative z-10 py-12 sm:py-16 lg:py-0 lg:-ml-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6 
            w-full max-w-2xl mx-auto
            sm:mx-0 sm:ml-4 lg:ml-6 xl:ml-8
            text-center items-center
            sm:text-left sm:items-start"
        >

          {/* ABOUT US Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-3 sm:space-x-4 justify-center sm:justify-start"
          >
            <span className="text-[#D49942] font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase">
              About Us
            </span>
            <motion.div
              variants={dividerVariants}
              className="w-10 sm:w-16 h-[2px] bg-[#D49942] origin-left"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={headingVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-center sm:text-left w-full"
          >
            Turning Ideas Into <br className="hidden xs:block" />
            <motion.span
              variants={goldenTextVariants}
              className="text-[#D49942] inline-block"
            >
              Extraordinary Spaces
            </motion.span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed text-center sm:text-left w-full"
          >
            We design, build and deliver spaces that inspire. With a passion for quality, innovation and detail, we transform your vision into lasting reality.
          </motion.p>

          {/* ================= FEATURES / ICONS ROW ================= */}
          <motion.div
            variants={featureContainerVariants}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-4 xs:gap-6 md:gap-10 pt-4 sm:pt-6 w-full"
          >

            {/* Feature 1 */}
            <motion.div
              variants={featureItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <motion.div
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-[#D49942] group-hover:text-[#B2771D] transition-colors duration-300 shrink-0"
              >
                <ShieldCheck size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
              </motion.div>
              <div className="flex flex-col text-xs sm:text-sm font-semibold text-gray-800 leading-tight text-left">
                <span>Quality</span>
                <span>Workmanship</span>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={dividerVariants}
              className="hidden sm:block w-[1px] h-8 sm:h-10 bg-gray-300 origin-center"
            />

            {/* Feature 2 */}
            <motion.div
              variants={featureItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <motion.div
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="text-[#D49942] group-hover:text-[#B2771D] transition-colors duration-300 shrink-0"
              >
                <Lightbulb size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
              </motion.div>
              <div className="flex flex-col text-xs sm:text-sm font-semibold text-gray-800 leading-tight text-left">
                <span>Innovative</span>
                <span>Solutions</span>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={dividerVariants}
              className="hidden sm:block w-[1px] h-8 sm:h-10 bg-gray-300 origin-center"
            />

            {/* Feature 3 */}
            <motion.div
              variants={featureItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <motion.div
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-[#D49942] group-hover:text-[#B2771D] transition-colors duration-300 shrink-0"
              >
                <Users size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
              </motion.div>
              <div className="flex flex-col text-xs sm:text-sm font-semibold text-gray-800 leading-tight text-left">
                <span>Client</span>
                <span>Satisfaction</span>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About_Hero;