import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X, Building2, Layers, Globe, Shield, Monitor, LayoutGrid } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const services = [
  {
    title: 'Custom Exhibitions Stands',
    desc: 'Bespoke stand architecture tailored to your brand identity',
    icon: Building2,
    path: '/services/custom-Exhibitions-stands'
  },
  {
    title: 'Double Decker Stands',
    desc: 'Two-story Exhibitions structures for maximum presence',
    icon: Layers,
    path: '/services/double-decker-stands'
  },
  {
    title: 'Country & Trade Pavilions',
    desc: 'National pavilions and large-scale group Exhibitions spaces',
    icon: Globe,
    path: '/services/country-trade-pavilions'
  },
  {
    title: 'Turnkey Project Management',
    desc: '3D design, engineering, approvals, fabrication & on-site build',
    icon: Shield,
    path: '/services/turnkey-project-management'
  },
  {
    title: '3D Design & Visualization',
    desc: 'Photorealistic 3D renders and spatial CAD floor planning',
    icon: Monitor,
    path: '/services/3d-design-visualization'
  },
  {
    title: 'Modular Exhibitions Stands',
    desc: 'Flexible and sustainable modular stand architecture',
    icon: LayoutGrid,
    path: '/services/modular-Exhibitions-stands'
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isGalleryPage = location.pathname.startsWith('/gallery');
  const isAboutPage = location.pathname.startsWith('/about');
  const isContactPage = location.pathname.startsWith('/contact');

  const isServicePage =
    location.pathname.startsWith('/services') ||
    [
      '/custom-Exhibitions-stands',
      '/double-decker-stands',
      '/country-trade-pavilions',
      '/turnkey-project-management',
      '/3d-design-visualization',
      '/modular-Exhibitions-stands'
    ].includes(location.pathname);

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

  // Determine text color mode: Dark theme text for service page hero when not scrolled
  const isDarkHero = isServicePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : isDarkHero
          ? 'bg-black/20 backdrop-blur-[2px] py-4 sm:py-5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
      role="banner"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#D49942] focus-visible:outline-none rounded-lg"
            aria-label="YES Exhibitions Stands Homepage"
          >
            <img
              src={logoImg}
              alt="YES Exhibitions Stands Logo - Design • Build • Inspire"
              className="h-10 sm:h-12 w-auto object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform ring-2 ring-[#D49942]/40"
              width="48"
              height="48"
              loading="eager"
            />
            <div className="hidden sm:flex flex-col">
              <span
                className={`text-base font-bold tracking-tight leading-none transition-colors ${
                  isDarkHero ? 'text-white' : 'text-gray-900'
                }`}
              >
                YES <span className="text-[#D49942]">Exhibitions</span>
              </span>
              <span
                className={`text-[9px] tracking-[0.2em] font-semibold uppercase mt-0.5 transition-colors ${
                  isDarkHero ? 'text-gray-300' : 'text-gray-500'
                }`}
              >
                Design • Build • Inspire
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-7 lg:space-x-10"
            aria-label="Main Navigation"
          >
            {/* Home Link */}
            <Link
              to="/"
              className={`relative text-sm font-bold transition-colors py-1 group ${
                isHomePage
                  ? 'text-[#D49942]'
                  : isDarkHero
                  ? 'text-white/90 hover:text-[#D49942]'
                  : 'text-gray-700 hover:text-[#D49942]'
              }`}
              aria-current={isHomePage ? 'page' : undefined}
            >
              Home
              {isHomePage && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D49942] rounded-full"></span>
              )}
            </Link>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/#services"
                onClick={() => setServicesDropdownOpen(false)}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors py-1 focus-visible:ring-2 focus-visible:ring-[#D49942] rounded cursor-pointer ${
                  isServicePage
                    ? 'text-[#D49942] font-bold'
                    : isDarkHero
                    ? 'text-white/90 hover:text-[#D49942]'
                    : 'text-gray-700 hover:text-[#D49942]'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    servicesDropdownOpen
                      ? 'rotate-180 text-[#D49942]'
                      : isDarkHero
                      ? 'text-white/80'
                      : 'text-gray-500'
                  }`}
                />
                {isServicePage && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D49942] rounded-full"></span>
                )}
              </Link>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 sm:w-80 animate-fadeIn">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden ring-1 ring-black/5">
                    {services.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          to={item.path || "/#services"}
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
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className={`relative text-sm font-semibold transition-colors py-1 ${
                isGalleryPage
                  ? 'text-[#D49942] font-bold'
                  : isDarkHero
                  ? 'text-white/90 hover:text-[#D49942]'
                  : 'text-gray-700 hover:text-[#D49942]'
              }`}
              aria-current={isGalleryPage ? 'page' : undefined}
            >
              Gallery
              {isGalleryPage && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D49942] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/about"
              className={`relative text-sm font-semibold transition-colors py-1 ${
                isAboutPage
                  ? 'text-[#D49942] font-bold'
                  : isDarkHero
                  ? 'text-white/90 hover:text-[#D49942]'
                  : 'text-gray-700 hover:text-[#D49942]'
              }`}
              aria-current={isAboutPage ? 'page' : undefined}
            >
              About
              {isAboutPage && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D49942] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/contact-us"
              className={`relative text-sm font-semibold transition-colors py-1 ${
                isContactPage
                  ? 'text-[#D49942] font-bold'
                  : isDarkHero
                  ? 'text-white/90 hover:text-[#D49942]'
                  : 'text-gray-700 hover:text-[#D49942]'
              }`}
              aria-current={isContactPage ? 'page' : undefined}
            >
              Contact
              {isContactPage && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D49942] rounded-full"></span>
              )}
            </Link>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact-us"
              className="text-white px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D49942]"
            >
              <span>CONTACT US</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/contact-us"
              className="text-white px-3 py-1.5 rounded-md bg-gradient-to-r from-[#E6AA4D] to-[#C78326] font-bold text-xs flex items-center gap-1 shadow-sm"
            >
              <span>Contact</span>
              <ArrowRight size={12} />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className={`p-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#D49942] ${
                isDarkHero ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-200/60 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg font-bold text-sm ${
                  isHomePage ? 'bg-amber-50 text-[#D49942]' : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/#services"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg font-semibold text-sm ${
                  isServicePage ? 'bg-amber-50 text-[#D49942] font-bold' : 'hover:bg-gray-50 text-gray-800'
                }`}
              >
                Services
              </Link>
              <Link
                to="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg font-semibold text-sm ${
                  isGalleryPage ? 'bg-amber-50 text-[#D49942] font-bold' : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg font-semibold text-sm ${
                  isAboutPage ? 'bg-amber-50 text-[#D49942] font-bold' : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg font-semibold text-sm ${
                  isContactPage ? 'bg-amber-50 text-[#D49942] font-bold' : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>

              <div className="pt-2">
                <Link
                  to="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white w-full py-3 rounded-lg bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <span>CONTACT US</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;