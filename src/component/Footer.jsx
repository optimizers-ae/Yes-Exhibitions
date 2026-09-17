import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-600 pt-20 pb-8 overflow-hidden border-t border-gray-200">
      
      {/* Premium Top Border Line (Yellow Gradient) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D49942] to-transparent"></div>

      {/* Premium Yellow Gradient Effect (Jesa Image ma hai) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Top Center Soft Yellow Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(253,230,138,0.45)_0%,_rgba(255,255,255,0)_70%)] rounded-full blur-3xl"></div>
        {/* Bottom Left Soft Glow */}
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(253,230,138,0.25)_0%,_rgba(255,255,255,0)_70%)] rounded-full blur-3xl"></div>
        {/* Bottom Right Soft Glow */}
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(253,230,138,0.25)_0%,_rgba(255,255,255,0)_70%)] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

       

        {/* Top Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-gray-200/80">

          {/* Brand Info & Social Icons Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#D49942]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={logoImg}
                  alt="YES Exhibition Stands Logo"
                  className="relative h-14 w-14 object-contain rounded-full ring-1 ring-[#D49942]/40 p-0.5 bg-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-gray-900 leading-none">
                  YES <span className="text-[#D49942]">EXHIBITION</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] font-semibold text-gray-400 uppercase mt-1.5">
                  Design • Build • Inspire
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              Premier turnkey exhibition stand design & fabrication contractor. Delivering custom trade show booths worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                {
                  label: 'Facebook',
                  href: '#facebook',
                  path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                },
                {
                  label: 'Instagram',
                  href: '#instagram',
                  path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                },
                {
                  label: 'LinkedIn',
                  href: '#linkedin',
                  path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                },
                {
                  label: 'YouTube',
                  href: '#youtube',
                  path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                },
                {
                  label: 'Twitter',
                  href: '#twitter',
                  path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group relative w-10 h-10 rounded-full border border-[#D49942]/30 text-[#D49942] hover:border-[#D49942] hover:text-white transition-all duration-300 flex items-center justify-center overflow-hidden bg-white"
                >
                  <span className="absolute inset-0 bg-[#D49942] scale-0 group-hover:scale-100 rounded-full transition-transform duration-300"></span>
                  <svg className="relative w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                Quick Links
              </h4>
              <div className="w-8 h-[2px] bg-[#D49942] mt-2 rounded-full"></div>
            </div>
            <ul className="space-y-3 text-xs font-medium">
              {[
                { label: 'Home', href: '/', active: true },
                { label: 'About', href: '#about' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Services', href: '#services' },
                { label: 'Exhibition', href: '#exhibition' },
                { label: 'Blog', href: '#blog' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={`group inline-flex items-center gap-2 transition-colors ${
                      l.active ? 'text-[#D49942]' : 'hover:text-gray-900'
                    }`}
                  >
                    <span className="w-0 h-[1px] bg-[#D49942] group-hover:w-3 transition-all duration-300"></span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                Services
              </h4>
              <div className="w-8 h-[2px] bg-[#D49942] mt-2 rounded-full"></div>
            </div>
            <ul className="space-y-3 text-xs font-medium">
              {[
                { label: 'Abouts', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: '3D Design', href: '#3d' },
                { label: 'Modular Stands', href: '#modular' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 hover:text-gray-900 transition-colors"
                  >
                    <span className="w-0 h-[1px] bg-[#D49942] group-hover:w-3 transition-all duration-300"></span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Served Column */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                Industries Served
              </h4>
              <div className="w-8 h-[2px] bg-[#D49942] mt-2 rounded-full"></div>
            </div>
            <ul className="space-y-3 text-xs font-medium">
              {[
                { label: 'Industries Key', href: '#industries' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 hover:text-gray-900 transition-colors"
                  >
                    <span className="w-0 h-[1px] bg-[#D49942] group-hover:w-3 transition-all duration-300"></span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                Contact Info
              </h4>
              <div className="w-8 h-[2px] bg-[#D49942] mt-2 rounded-full"></div>
            </div>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3 group">
                <span className="w-8 h-8 rounded-lg bg-[#D49942]/10 border border-[#D49942]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D49942] transition-colors">
                  <MapPin className="w-4 h-4 text-[#D49942] group-hover:text-white transition-colors" />
                </span>
                <span className="leading-snug pt-1.5 text-gray-500">
                  YES Exhibition Stands, World Trade Center
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="w-8 h-8 rounded-lg bg-[#D49942]/10 border border-[#D49942]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D49942] transition-colors">
                  <Phone className="w-4 h-4 text-[#D49942] group-hover:text-white transition-colors" />
                </span>
                <a href="tel:+971501234567" className="hover:text-gray-900 transition-colors text-gray-500">
                  +971 50123 4567
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="w-8 h-8 rounded-lg bg-[#D49942]/10 border border-[#D49942]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D49942] transition-colors">
                  <Mail className="w-4 h-4 text-[#D49942] group-hover:text-white transition-colors" />
                </span>
                <a
                  href="mailto:info@yesexhibitionstands.com"
                  className="hover:text-gray-900 transition-colors break-all text-gray-500"
                >
                  info@yesexhibitionstands.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="w-8 h-8 rounded-lg bg-[#D49942]/10 border border-[#D49942]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D49942] transition-colors">
                  <Globe className="w-4 h-4 text-[#D49942] group-hover:text-white transition-colors" />
                </span>
                <a
                  href="https://yesexhibitionstands.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 transition-colors break-all text-gray-500"
                >
                  yesexhibitionstands.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-400 font-medium">
          <p>
            © {new Date().getFullYear()} YES Exhibition Stands. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-[#D49942] transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <a href="#terms" className="hover:text-[#D49942] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;