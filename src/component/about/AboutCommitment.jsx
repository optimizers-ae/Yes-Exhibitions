import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const AboutCommitment = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#FAFAFA] via-amber-50/25 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Commitment Heading (Slide 15) */}
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-16">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block">
            OUR COMMITMENT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-950 leading-tight">
            YOUR SUCCESS IS THE PURPOSE BEHIND THE PROJECT
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe a successful exhibition project begins with understanding: Understanding your brand. Understanding your audience. Understanding your objectives. Understanding the exhibition environment. And understanding what success means to you.
          </p>

          {/* 4 Pillars Mantra */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-black uppercase tracking-widest text-[#D49942]">
            <span>LISTEN.</span>
            <span className="text-gray-300">•</span>
            <span>CREATE.</span>
            <span className="text-gray-300">•</span>
            <span>BUILD.</span>
            <span className="text-gray-300">•</span>
            <span>INSPIRE.</span>
          </div>
        </div>

        {/* Let's Create Extraordinary Box (Slide 16) */}
        <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold tracking-[0.2em] text-[#D49942] uppercase block">
                LET'S CREATE
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-950 leading-tight">
                SOMETHING EXTRAORDINARY TOGETHER
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
                Whether you are preparing for an upcoming exhibition, launching a new product, or looking to strengthen your brand presence, YES Exhibition Stands is ready to work with you.
              </p>

              {/* Direct Contact Points */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="tel:+971555940879"
                  className="p-3.5 rounded-xl bg-gray-50 hover:bg-amber-50/70 border border-gray-200/80 hover:border-amber-300 flex items-center gap-3 transition-colors text-gray-900 font-bold"
                >
                  <Phone size={16} className="text-[#D49942]" />
                  <span>+971 55 594 0879</span>
                </a>
                <a
                  href="mailto:yes.exhibitions@gmail.com"
                  className="p-3.5 rounded-xl bg-gray-50 hover:bg-amber-50/70 border border-gray-200/80 hover:border-amber-300 flex items-center gap-3 transition-colors text-gray-900 font-bold"
                >
                  <Mail size={16} className="text-[#D49942]" />
                  <span>yes.exhibitions@gmail.com</span>
                </a>
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center gap-3 text-gray-700 font-medium">
                  <MapPin size={16} className="text-[#D49942]" />
                  <span>UAE (Dubai • Abu Dhabi)</span>
                </div>
                <a
                  href="https://wa.me/971555940879?text=Hi%20YES%20Exhibition%20Team,%20I%20would%20like%20to%20discuss%20our%20exhibition%20stand."
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-3 transition-colors font-bold shadow-xs"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Direct Line</span>
                </a>
              </div>
            </div>

            {/* Action Button Right */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center space-y-3">
              <Link
                to="/contact-us"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Request Custom 3D Proposal</span>
                <ArrowRight size={18} />
              </Link>
              <span className="text-[11px] text-gray-500 font-medium">
                Free 24h 3D Concept • No Obligation Estimate
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCommitment;
