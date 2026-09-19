import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Users } from 'lucide-react';
import aboutBannerImg from '../assets/AboutBanner.jpeg';

const About_Hero = () => {
  // ================= ANIMATION VARIANTS =================

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const goldenTextVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const featureContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[750px] flex items-center overflow-hidden bg-[#fcfbf9]">
      
      {/* ================= BACKGROUND IMAGE (FULL BANNER - NO CROP) ================= */}
      <motion.div 
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 w-full h-full z-0 flex items-center justify-end"
      >
        <img 
          src={aboutBannerImg} 
          alt="YES Exhibition Stands Design" 
          className="w-full h-full object-contain object-right"
        />
      </motion.div>

      {/* ================= FOREGROUND CONTENT (Z-INDEX OVER IMAGE) ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-16 lg:py-0 lg:-ml-6">
        {/* 
          Text Container - Left side shift kiya hai
          - Mobile: ml-0
          - Tablet: ml-4 (thoda left)
          - Desktop: ml-6 (left)
          - Bade screens: ml-8 (left)
        */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center space-y-6 max-w-2xl ml-0 sm:ml-4 lg:ml-6 xl:ml-8"
        >
          
          {/* ABOUT US Label */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center space-x-4"
          >
            <span className="text-[#D49942] font-semibold tracking-[0.2em] text-sm uppercase">
              About Us
            </span>
            <motion.div 
              variants={dividerVariants}
              className="w-16 h-[2px] bg-[#D49942] origin-left"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={headingVariants} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Turning Ideas Into <br />
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
            className="text-gray-700 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            We design, build and deliver spaces that inspire. With a passion for quality, innovation and detail, we transform your vision into lasting reality.
          </motion.p>

          {/* ================= FEATURES / ICONS ROW ================= */}
          <motion.div 
            variants={featureContainerVariants}
            className="flex flex-wrap items-center gap-6 md:gap-10 pt-6"
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
                className="text-[#D49942] group-hover:text-[#B2771D] transition-colors duration-300"
              >
                <ShieldCheck size={32} strokeWidth={1.5} />
              </motion.div>
              <div className="flex flex-col text-sm font-semibold text-gray-800 leading-tight">
                <span>Quality</span>
                <span>Workmanship</span>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div 
              variants={dividerVariants}
              className="hidden sm:block w-[1px] h-10 bg-gray-300 origin-center"
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
                className="text-[#D49942] group-hover:text-[#B2771D] transition-colors duration-300"
              >
                <Lightbulb size={32} strokeWidth={1.5} />
              </motion.div>
              <div className="flex flex-col text-sm font-semibold text-gray-800 leading-tight">
                <span>Innovative</span>
                <span>Solutions</span>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div 
              variants={dividerVariants}
              className="hidden sm:block w-[1px] h-10 bg-gray-300 origin-center"
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
                className="text-[#D49942] group-hover:text-[#B2771D] transition-colors duration-300"
              >
                <Users size={32} strokeWidth={1.5} />
              </motion.div>
              <div className="flex flex-col text-sm font-semibold text-gray-800 leading-tight">
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