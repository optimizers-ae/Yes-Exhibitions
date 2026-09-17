import { Star } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Custom Stands Built' },
  { value: '50+', label: 'Global Exhibitions' },
  { value: '98%', label: 'Client Satisfaction' }
];

const testimonials = [
  {
    logo: 'EXHIBIT LAB',
    logoBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    tag: 'DUBAI',
    quote: '"We engaged YES Exhibition Stands to design and build our main booth, and the execution and quality exceeded all expectations. Seamless setup!"',
    rating: 5
  },
  {
    logo: 'TECH GLOBAL',
    logoBg: 'bg-blue-50 text-blue-700 border-blue-200',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    tag: 'GERMANY',
    quote: '"The stand arrangement increased traffic and floor engagement across all days. Exceptional build quality and precise turnaround timing."',
    rating: 5
  },
  {
    logo: 'NEXUS INNOV',
    logoBg: 'bg-purple-50 text-purple-700 border-purple-200',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    tag: 'RIYADH',
    quote: '"We showcase our flagship products each year; their team delivers unmatched consistency and innovative 3D concepts. Highly recommended!"',
    rating: 5
  }
];

const ImpactResultsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-amber-50/15 to-white relative overflow-hidden">
      {/* Background Soft Gold Gradient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gray-400 block mb-2">
            OUR ROAD SERVICE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
            OUR IMPACT & RESULTS
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-5xl mx-auto mb-20 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200/80">
          {stats.map((stat, idx) => (
            <div key={idx} className="px-4 py-6 flex flex-col items-center justify-center">
              <div className="text-5xl sm:text-6xl font-serif font-semibold text-gray-900 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-3 text-base sm:text-lg font-medium text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100/90 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Header Row */}
              <div className="flex items-center justify-between mb-5">
                {/* Logo Badge */}
                <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md border ${item.logoBg}`}>
                  {item.logo}
                </span>

                {/* Avatar Photo */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-200 shadow-sm">
                  <img
                    src={item.avatar}
                    alt="Client avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tag */}
                <span className="text-[10px] font-bold tracking-wider px-2 py-1 rounded bg-gray-100 text-gray-600">
                  {item.tag}
                </span>
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic text-center mb-6">
                {item.quote}
              </p>

              {/* Star Rating */}
              <div className="flex justify-center items-center gap-1 pt-2 border-t border-gray-50">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D49942] text-[#D49942]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactResultsSection;
