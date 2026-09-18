import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    num: '01',
    name: 'DISCOVER',
    sub: 'Understand Your Needs',
    desc: 'We analyze your brand character, show objectives, visitor personas, floor specs, and functional space requirements.'
  },
  {
    num: '02',
    name: 'DESIGN',
    sub: 'Custom 3D Concepts',
    desc: 'Our architects develop tailored 3D renderings showcasing booth layouts, lighting schemes, and structural aesthetics.'
  },
  {
    num: '03',
    name: 'REFINE',
    sub: 'Align on Details',
    desc: 'Collaborative review of materials, interactive tech, graphic artwork, and engineering specifications until fully approved.'
  },
  {
    num: '04',
    name: 'PRODUCE',
    sub: 'In-House Craftsmanship',
    desc: 'Direct fabrication in our specialized production facilities covering joinery, steel framing, paint booths, and electrical.'
  },
  {
    num: '05',
    name: 'INSTALL',
    sub: 'On-Site Construction',
    desc: 'Our master installation crew builds and tests every element on the venue floor, strictly following safety and hall guidelines.'
  },
  {
    num: '06',
    name: 'DELIVER',
    sub: 'Turnkey Handover',
    desc: 'Spotless handover 24 hours before show opening, fully prepped for your sales team, VIP guests, and event visitors.'
  }
];

const AboutProcess = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-2">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950">
            FROM IDEA TO IMPACT
          </h2>
          <p className="text-sm sm:text-base font-bold text-[#D49942] uppercase tracking-wider">
            A CLEAR, COLLABORATIVE JOURNEY
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E6AA4D] to-[#C78326] mx-auto mt-3 rounded-full" />
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-7 rounded-3xl bg-gradient-to-br from-white to-gray-50/70 border border-gray-200/90 hover:border-[#D49942] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D49942] to-[#B2771D]">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D49942] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-gray-950 group-hover:text-[#B2771D] transition-colors">
                  {step.name}
                </h3>
                <div className="text-xs font-bold text-gray-600 mt-0.5 mb-3">
                  {step.sub}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Structured Milestone</span>
                <CheckCircle2 size={15} className="text-[#D49942]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutProcess;
