import { ArrowUpRight, Building2, Globe, Layers, LayoutGrid, Monitor, ShieldCheck, Sparkles } from 'lucide-react';

const servicesList = [
  {
    id: '01',
    title: 'Custom Exhibition Stands',
    category: 'Bespoke Architecture',
    desc: 'Tailor-made stand designs built with premium joinery, custom illumination, interactive touchpoints, and immersive layout engineering.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    tags: ['Custom Joinery', 'LED Walls', 'VIP Lounges']
  },
  {
    id: '02',
    title: 'Double Decker Stands',
    category: 'Multi-Level Spaces',
    desc: 'Maximize footprint efficiency with structural two-story exhibition stands featuring private executive suites and command views of the venue.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    tags: ['Structural Engineering', 'Private Lounges', 'High Visibility']
  },
  {
    id: '03',
    title: 'Country & Trade Pavilions',
    category: 'Large Scale Turnkey',
    desc: 'Turnkey national pavilions designed for government bodies and corporate clusters exhibiting in major international trade shows.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    tags: ['Multi-Exhibitor Spaces', 'Shared Hospitality', 'National Branding']
  },
  {
    id: '04',
    title: 'Turnkey Project Management',
    category: 'End-to-End Service',
    desc: 'Complete project lifecycle: 3D concept, structural approval, electrical permits, venue logistics, on-site installation & handover.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    tags: ['Venue Approvals', 'On-Site Build', 'Dismantling & Storage']
  },
  {
    id: '05',
    title: '3D Design & Rendering',
    category: 'Visualization',
    desc: 'Photorealistic 3D visualization and animated walk-throughs allowing you to explore every detail of your stand before fabrication.',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['CAD Blueprints', 'VR Walkthroughs', 'Lighting Simulation']
  },
  {
    id: '06',
    title: 'Modular Stand Systems',
    category: 'Eco-Friendly & Versatile',
    desc: 'Flexible, reconfigurable modular frame architecture ideal for multi-city show tours and budget-conscious brand activations.',
    icon: LayoutGrid,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    tags: ['Reusable Frames', 'Fast Installation', 'Compact Logistics']
  }
];

const ServicesSection = ({ onOpenQuote }) => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorative Ambient Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-[#D49942]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#B2771D]">
              OUR CORE SERVICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Elevate Your Brand With <span className="gold-gradient-text">Bespoke Excellence</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            From initial architectural rendering to turnkey venue handover, we build stand solutions engineered to captivate audiences worldwide.
          </p>
        </div>

        {/* Services Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl border border-gray-200/80 hover:border-amber-400/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(212,153,66,0.22)] transition-all duration-500 ease-out flex flex-col overflow-hidden hover:-translate-y-2"
              >
                {/* Top Subtle Gold Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#D49942] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Image Container */}
                <div className="relative h-60 overflow-hidden bg-gray-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  {/* Subtle Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-black/40" />

                  {/* Top Glassmorphism Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                    <span className="text-[10px] font-black tracking-widest text-[#E6AA4D] uppercase">
                      {service.category}
                    </span>
                  </div>

                  {/* Top Right Service Number */}
                  <div className="absolute top-4 right-4 text-2xl font-black tracking-tighter text-white/40 group-hover:text-amber-400 transition-colors">
                    {service.id}
                  </div>

                  {/* Floating Circular Icon Badge */}
                  <div className="absolute -bottom-6 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E1E1E] to-[#0A0A0A] border-2 border-[#D49942] text-[#E6AA4D] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-7 pt-9 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-950 group-hover:text-[#B2771D] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>

                  {/* Feature Tags & Action Button */}
                  <div className="pt-4 border-t border-gray-100/90 space-y-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold bg-amber-50/90 text-[#965E0C] px-3 py-1 rounded-full border border-amber-200/70 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Premium Button */}
                    <button
                      type="button"
                      onClick={onOpenQuote}
                      className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] group-hover:from-[#E6AA4D] group-hover:via-[#DF9B34] group-hover:to-[#C78326] text-white group-hover:text-gray-950 font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-md group-hover:shadow-amber-500/25 transition-all duration-300 cursor-pointer"
                    >
                      <span>Inquire Now</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
