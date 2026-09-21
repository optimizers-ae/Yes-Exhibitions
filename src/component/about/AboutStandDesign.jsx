import { Building2, Globe, Layers, Sparkles, Tv, Users, Coffee, ShieldCheck } from 'lucide-react';

const standFormats = [
  {
    title: 'Custom Exhibitions Stands',
    desc: 'Unique bespoke concepts created specifically around your brand identity, products, and commercial vision.',
    icon: Building2
  },
  {
    title: 'Open & Island Stands',
    desc: '2, 3, or 4-side open island structures engineered for maximum floor visibility and multi-directional accessibility.',
    icon: Globe
  },
  {
    title: 'Double-Decker Concepts',
    desc: 'Two-story architectural structures that double your floor capacity with exclusive VIP lounges and private conference suites.',
    icon: Layers
  },
  {
    title: 'Modular & Flexible Concepts',
    desc: 'Scalable, reconfigurable high-end exhibitions systems designed for multi-event international exhibitions tours.',
    icon: Sparkles
  },
  {
    title: 'Product & Experience Areas',
    desc: 'Purpose-built spaces for live product demonstrations, interactive touchscreen presentations, and high-impact visitor engagement.',
    icon: Tv
  }
];

const functionalSpaces = [
  {
    title: 'Meeting Spaces',
    desc: 'Private and semi-private acoustic areas designed for high-value business negotiations and deal closures.',
    icon: Users
  },
  {
    title: 'Product Displays',
    desc: 'Purposeful illuminated display pods and demo counters that give your hero products the spotlight they deserve.',
    icon: Sparkles
  },
  {
    title: 'Hospitality & Bar Lounges',
    desc: 'Comfortable barista stations and hospitality bars designed to welcome guests and foster extended client discussions.',
    icon: Coffee
  },
  {
    title: 'Digital Experiences',
    desc: 'Seamlessly embedded curved LED video walls, interactive touchscreen kiosks, and immersive lighting systems.',
    icon: Tv
  },
  {
    title: 'Storage & Service Pantries',
    desc: 'Secure, discreet lockable storage rooms and staff pantries smartly integrated into the core architecture.',
    icon: ShieldCheck
  }
];

const AboutStandDesign = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block">
            STAND DESIGN & CREATIVE CONCEPTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950">
            YOUR SPACE. YOUR BRAND. YOUR STATEMENT.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Every exhibitions space presents a different opportunity. Whether your objective is a focused business environment or a high-impact presence designed to attract attention, your stand should be designed around the experience you want to create.
          </p>
        </div>

        {/* Stand Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {standFormats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-gray-200/90 hover:border-[#D49942] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D49942] flex items-center justify-center mb-4 group-hover:bg-[#D49942] group-hover:text-white transition-colors border border-amber-100">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold uppercase tracking-tight text-gray-950 group-hover:text-[#B2771D] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Functional Spaces Sub-Section */}
        <div className="bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-md border border-amber-200/80">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block mb-1">
              CREATIVE CONCEPTS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-950">
              WHERE CREATIVITY MEETS FUNCTION
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Great exhibitions design is a balance between visual impact and practical experience. We engineer dedicated functional zones inside every booth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {functionalSpaces.map((space, idx) => {
              const Icon = space.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-gray-200/90 hover:border-[#D49942] hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-amber-50 text-[#D49942] border border-amber-200/60">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-gray-950">
                      {space.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {space.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStandDesign;
