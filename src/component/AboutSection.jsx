import { Award, CheckCircle2, Compass, Layers, ShieldCheck, Sparkles, Users } from 'lucide-react';

const AboutSection = ({ onOpenQuote }) => {
  const features = [
    {
      icon: Compass,
      title: 'Bespoke 3D Stand Design',
      desc: 'Innovative, brand-aligned stand architecture designed by experienced exhibition architects.'
    },
    {
      icon: Layers,
      title: 'In-House Precision Fabrication',
      desc: 'State-of-the-art production facility ensuring immaculate finish and structural integrity.'
    },
    {
      icon: ShieldCheck,
      title: 'Turnkey Execution & Approvals',
      desc: 'Complete venue approvals, electrical sign-offs, risk assessments, and logistics handled seamlessly.'
    },
    {
      icon: Award,
      title: 'Global Event Coverage',
      desc: 'Delivering world-class exhibition stands across the UAE, GCC, Europe, and major international venues.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-amber-50/20 to-white relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-200/80 mb-4">
            <Sparkles className="w-4 h-4 text-[#D49942]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#B2771D]">
              ABOUT YES EXHIBITION STANDS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Crafting Extraordinary <span className="gold-gradient-text">Exhibition Experiences</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            We build immersive, high-impact exhibition stands that command attention, engage visitors, and elevate your brand presence on global trade show floors.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Image/Visual Box */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-100 bg-gray-900 group">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
                alt="Exhibition Stand Design & Fabrication"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlay Content Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-xl border border-white/50 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#E6AA4D] to-[#C78326] text-white rounded-lg shadow-md">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">10+ Years of Excellence</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Trusted by leading multinational brands worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                Your Preferred Partner for Turnkey Stand Architecture & Construction
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                From concept sketches and detailed 3D photorealistic renderings to precision woodwork, graphic printing, and final on-site installation, YES Exhibition Stands handles every detail with craftsmanship and punctuality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-[#D49942] group-hover:bg-[#D49942] group-hover:text-white transition-colors flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#B2771D] transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {onOpenQuote && (
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-gray-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Get Custom Stand Proposal
                </button>
              )}
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% On-Time Delivery Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
