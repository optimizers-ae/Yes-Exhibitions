import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Menu, X, Sparkles, Building2, Layers, Globe, Shield } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const services = [
  {
    title: 'Custom Exhibition Stands',
    desc: 'Bespoke stand architecture tailored to your brand identity',
    icon: Building2
  },
  {
    title: 'Double Decker Stands',
    desc: 'Two-story exhibition structures for maximum presence',
    icon: Layers
  },
  {
    title: 'Country & Trade Pavilions',
    desc: 'National pavilions and large-scale group exhibition spaces',
    icon: Globe
  },
  {
    title: 'Turnkey Project Management',
    desc: '3D design, engineering, approvals, fabrication & on-site build',
    icon: Shield
  }
];

const Navbar = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#D49942] focus-visible:outline-none rounded-lg"
            aria-label="YES Exhibition Stands Homepage"
          >
            <img
              src={logoImg}
              alt="YES Exhibition Stands Logo - Design • Build • Inspire"
              className="h-10 sm:h-12 w-auto object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform"
              width="48"
              height="48"
              loading="eager"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-bold tracking-tight text-gray-900 leading-none">
                YES <span className="text-[#D49942]">EXHIBITION</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] font-semibold text-gray-500 uppercase mt-0.5">
                Design • Build • Inspire
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-7 lg:space-x-9"
            aria-label="Main Navigation"
          >
            {/* Home Link (Active) */}
            <a
              href="/"
              className="relative text-sm font-bold text-gray-900 hover:text-[#D49942] transition-colors py-1 group"
              aria-current="page"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D49942] rounded-full"></span>
            </a>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-gray-950 transition-colors py-1 focus-visible:ring-2 focus-visible:ring-[#D49942] rounded"
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`text-gray-500 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#D49942]' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 sm:w-80 animate-fadeIn">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden ring-1 ring-black/5">
                    {services.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={idx}
                          href="#services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-amber-50/70 transition-colors group"
                        >
                          <div className="p-2 rounded-md bg-amber-100/60 text-[#D49942] group-hover:bg-[#D49942] group-hover:text-white transition-colors mt-0.5">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 group-hover:text-[#B2771D]">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-gray-500 leading-snug mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#portfolio"
              className="text-sm font-semibold text-gray-700 hover:text-gray-950 transition-colors"
            >
              Portfolio
            </a>

            <a
              href="#about"
              className="text-sm font-semibold text-gray-700 hover:text-gray-950 transition-colors"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-semibold text-gray-700 hover:text-gray-950 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenQuote}
              type="button"
              className="text-white px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] text-gray-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D49942]"
            >
              <span>GET A QUOTE</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              type="button"
              className="px-3 py-1.5 text-white rounded-md bg-gradient-to-r from-[#E6AA4D] to-[#C78326] text-gray-950 font-bold text-xs flex items-center gap-1 shadow-sm"
            >
              <span>Quote</span>
              <ArrowRight size={12} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg text-gray-800 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-[#D49942]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-200/60 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-amber-50 text-[#D49942] font-bold text-sm"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-semibold text-sm"
              >
                Services
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-semibold text-sm"
              >
                Portfolio
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-semibold text-sm"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-800 font-semibold text-sm"
              >
                Contact
              </a>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r text-white from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-gray-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
