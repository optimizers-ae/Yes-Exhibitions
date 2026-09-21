import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Home,
  ArrowLeft,
  Sparkles,
  Search,
  MessageCircle,
  Building2,
  Layers,
  Globe,
  Compass,
  ChevronRight
} from 'lucide-react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const helpfulLinks = [
  {
    title: 'Custom Exhibitions Stands',
    desc: 'Award-winning bespoke booth architecture and fabrication.',
    href: '/#services',
    icon: Building2
  },
  {
    title: 'Double Decker Stands',
    desc: 'Multi-story structures engineered for high-impact presence.',
    href: '/#services',
    icon: Layers
  },
  {
    title: 'Country & Trade Pavilions',
    desc: 'Turnkey national group stands and multi-brand spaces.',
    href: '/#services',
    icon: Globe
  },
  {
    title: 'Request a 3D Proposal',
    desc: 'Get a free photo-realistic 3D rendering and estimate in 24h.',
    href: '/contact-us',
    icon: Sparkles
  }
];

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 - Page Not Found | YES Exhibitions Stands';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sansation flex flex-col selection:bg-[#D49942]/30 selection:text-gray-950">
      {/* Header */}
      <Navbar />

      {/* Main 404 Content */}
      <main className="flex-1 pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Hero 404 Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br fp-8 sm:p-14 md:p-16  text-center shadow-2xl">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(212,153,66,0.3)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(226,162,67,0.2)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E2A243] bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E2A243]/30">
                <Compass size={14} className="text-[#E2A243] animate-pulse" />
                <span>404 Error • Page Lost in Transit</span>
              </div>

              {/* Big 404 Visual Number */}
              <div className="relative">
                <h1 className="text-7xl sm:text-9xl md:text-[11rem] font-black tracking-tighter leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFF2DE] via-[#E2A243] to-[#9E6718] drop-shadow-2xl">
                  404
                </h1>
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t to-transparent pointer-events-none" />
              </div>

              {/* Headline & Description */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight ">
                  Booth Not Found on the Floor Plan
                </h2>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed max-w-xl mx-auto">
                  The page or Exhibitions brief you are looking for might have been moved, renamed, or is currently undergoing a complete booth redesign.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
                <Link
                  to="/"
                  className="px-6 text-white sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33]  font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Home size={16} />
                  <span>Return to Homepage</span>
                </Link>

                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="px-6 sm:px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-gray-200 hover: font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/15 backdrop-blur-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  <span>Go Back</span>
                </button>

                <a
                  href="https://wa.me/971500000000?text=Hi%20YES%20Exhibitions%20Team,%20I%20could%20not%20find%20a%20page%20on%20your%20website%20and%20need%20assistance."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl text-white bg-emerald-600/90 hover:bg-emerald-500  font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-emerald-600/30 transition-all"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Help</span>
                </a>
              </div>
            </div>
          </div>

         
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
