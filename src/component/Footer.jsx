import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: custom * 0.08,
    },
  }),
};

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-600 pt-14 sm:pt-18 lg:pt-20 pb-8 sm:pb-10 overflow-hidden border-t border-gray-200">
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D49942] to-transparent" />

      {/* Ambient Yellow/Gold Radial Glow Effect */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Top Center Soft Yellow Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] lg:w-[800px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(253,230,138,0.45)_0%,_rgba(255,255,255,0)_70%)] rounded-full blur-3xl" />

        {/* Bottom Left Soft Glow */}
        <div className="absolute bottom-0 -left-32 sm:-left-20 w-60 sm:w-72 lg:w-96 h-60 sm:h-72 lg:h-96 bg-[radial-gradient(circle_at_center,_rgba(253,230,138,0.22)_0%,_rgba(255,255,255,0)_70%)] rounded-full blur-3xl" />

        {/* Bottom Right Soft Glow */}
        <div className="absolute bottom-0 -right-32 sm:-right-20 w-60 sm:w-72 lg:w-96 h-60 sm:h-72 lg:h-96 bg-[radial-gradient(circle_at_center,_rgba(253,230,138,0.22)_0%,_rgba(255,255,255,0)_70%)] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Main Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-13 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-14 border-b border-gray-200/90">

          {/* Brand Info Column - Mobile Centered */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
            className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-4 flex flex-col items-center text-center sm:items-start sm:text-left space-y-4 sm:space-y-6"
          >
            <a href="/" className="flex items-center justify-center sm:justify-start gap-3 group min-w-0 inline-flex">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#D49942]/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={logoImg}
                  alt="YES Exhibition Stands Logo"
                  className="relative h-11 w-11 sm:h-13 sm:w-13 object-contain rounded-full ring-1 ring-[#D49942]/40 p-0.5 bg-white shadow-xs"
                />
              </div>

              <div className="flex flex-col min-w-0 text-left">
                <span className="text-base sm:text-lg font-bold tracking-tight text-gray-900 leading-none">
                  YES <span className="text-[#D49942]">EXHIBITION</span>
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.22em] font-semibold text-gray-500 uppercase mt-1.5">
                  Design • Build • Inspire
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
              Turning ideas into impactful spaces. Premier custom exhibition stand design, fabrication, and seamless on-site execution worldwide.
            </p>

            {/* Social Icons - Centered on Mobile */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 pt-1">
              {[
                {
                  label: 'Facebook',
                  href: 'https://www.facebook.com/people/YesExhibitions/61593600787596/?mibextid=wwXIfr&rdid=BsgUIz8Rsz2t5pCe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DdAeVEP3x%2F%3Fmibextid%3DwwXIfr',
                  path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                },
                {
                  label: 'Instagram',
                  href: 'https://www.instagram.com/yes.exhibitions?igsi=MTMwNDVkbnRtNDU0OQ%3D%3D&utm_source=qr',
                  path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D49942]/30 text-[#D49942] hover:border-[#D49942] hover:text-white transition-all duration-300 flex items-center justify-center overflow-hidden bg-white shrink-0 shadow-2xs"
                >
                  <span className="absolute inset-0 bg-[#D49942] scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />
                  <svg className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
            className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 space-y-4 sm:space-y-5"
          >
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider uppercase">
                Quick Links
              </h4>
              <div className="w-8 h-[2px] bg-[#D49942] mt-2 rounded-full" />
            </div>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-medium">
              {[
                { label: 'Home', href: '/' },
                { label: 'Contact Us', href: '/contact-us', isRoute: true },
                { label: 'Services', href: '/#services' },
                { label: 'Gallery', href: '/gallery', isRoute: true },
                { label: 'About Us', href: '/#about' },
                { label: 'Contact', href: '/#contact' },
              ].map((l) => (
                <li key={l.label}>
                  {l.isRoute ? (
                    <Link
                      to={l.href}
                      className="group inline-flex items-center gap-2 text-gray-600 hover:text-[#D49942] transition-colors"
                    >
                      <span className="w-0 h-[1.5px] bg-[#D49942] group-hover:w-3 transition-all duration-300" />
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors"
                    >
                      <span className="w-0 h-[1.5px] bg-[#D49942] group-hover:w-3 transition-all duration-300" />
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
            className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 space-y-4 sm:space-y-5"
          >
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider uppercase">
                Our Services
              </h4>
              <div className="w-8 h-[2px] bg-[#D49942] mt-2 rounded-full" />
            </div>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-medium">
              {[
                { label: 'Custom Stands', href: '#services' },
                { label: 'Double Decker', href: '#services' },
                { label: 'Trade Pavilions', href: '#services' },
                { label: '3D Design & CAD', href: '#services' },
                { label: 'Turnkey Build', href: '#services' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors"
                  >
                    <span className="w-0 h-[1.5px] bg-[#D49942] group-hover:w-3 transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries Column */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
            className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 space-y-4 sm:space-y-5"
          >
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider uppercase">
                Industries
              </h4>
              <div className="w-8 h-[2px] bg-[#D49942] mt-2 rounded-full" />
            </div>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-medium">
              {[
                { label: 'Tech & AI Expos', href: '#services' },
                { label: 'Healthcare & Pharma', href: '#services' },
                { label: 'Defense & Aviation', href: '#services' },
                { label: 'Energy & Industry', href: '#services' },
                { label: 'Luxury & Retail', href: '#services' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors"
                  >
                    <span className="w-0 h-[1.5px] bg-[#D49942] group-hover:w-3 transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
            className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 space-y-4 sm:space-y-5"
          >
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider uppercase">
                Contact Info
              </h4>
              <div className="w-8 h-[2px] bg-[#D49942] mt-2 rounded-full" />
            </div>

            <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm">
              {/* Address */}
              <li className="flex items-start gap-3 group">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#D49942]/10 border border-[#D49942]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D49942] transition-colors mt-0.5">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D49942] group-hover:text-white transition-colors" />
                </span>
                <span className="leading-snug text-gray-600">
                  United Arab Emirates
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3 group min-w-0">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#D49942]/10 border border-[#D49942]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D49942] transition-colors">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D49942] group-hover:text-white transition-colors" />
                </span>
                <a
                  href="tel:+971501234567"
                  className="hover:text-gray-950 transition-colors text-gray-600 font-medium"
                >
                  +055 59 40 879
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3 group min-w-0">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#D49942]/10 border border-[#D49942]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D49942] transition-colors">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D49942] group-hover:text-white transition-colors" />
                </span>
                <a
                  href="mailto:info@yesexhibitionstands.com"
                  className="hover:text-gray-950 transition-colors text-gray-600 font-medium break-all"
                >
                  info@yes-exhibitions.com
                </a>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Copyright Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium text-center sm:text-left"
        >
          <p className="leading-relaxed">
            © {new Date().getFullYear()} YES Exhibition Stands. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-gray-500">
            <a
              href="#privacy"
              className="hover:text-[#D49942] transition-colors"
            >
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <a
              href="#terms"
              className="hover:text-[#D49942] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;