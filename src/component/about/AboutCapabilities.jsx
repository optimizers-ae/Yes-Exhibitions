import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Tv,
  Layers,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import hero1Img from '../../assets/hero_1.png';
import hero2Img from '../../assets/hero_2.png';
import hero3Img from '../../assets/hero_3.png';

const capabilities = [
  {
    title: 'EXHIBITION STAND DESIGN',
    desc: 'Creative concepts developed around your brand identity, business objectives, and specific exhibition hall space.',
    icon: Building2
  },
  {
    title: '3D VISUALIZATION',
    desc: 'Detailed photo-realistic visual concepts that allow you to experience the proposed booth from all angles before production.',
    icon: Tv
  },
  {
    title: 'STAND PRODUCTION',
    desc: 'Turning approved designs into physical exhibition environments with in-house craftsmanship, premium materials, and flawless finishes.',
    icon: Layers
  },
  {
    title: 'BRANDING & GRAPHICS',
    desc: 'Integrated visual communication and large-format high-resolution graphics ensuring your brand is prominently represented.',
    icon: Sparkles
  },
  {
    title: 'INSTALLATION & DISMANTLING',
    desc: 'Professional on-site coordination of the entire setup and dismantling process with 100% on-time handover guaranteed.',
    icon: ShieldCheck
  },
  {
    title: 'PROJECT COORDINATION',
    desc: 'A structured, transparent process from initial briefing through engineering approvals, production, and final delivery.',
    icon: Clock
  }
];

const AboutCapabilities = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block mb-1">
              CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950">
              WHAT WE DO
            </h2>
            <p className="text-sm sm:text-base text-[#D49942] font-bold uppercase tracking-wider mt-1">
              FROM CONCEPT TO COMPLETION
            </p>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E6AA4D] to-[#C78326] text-white hover:from-[#EBB257] hover:to-[#D18F33] shadow-md transition-all self-start md:self-auto"
          >
            <span>Discuss Your Exhibition Brief</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 6 Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-7 rounded-3xl bg-gradient-to-br from-white to-gray-50/70 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-[#D49942] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#D49942] border border-amber-200/70 flex items-center justify-center group-hover:bg-[#D49942] group-hover:text-white transition-colors shadow-xs">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-gray-950 group-hover:text-[#B2771D] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-[#D49942] group-hover:translate-x-1 transition-transform">
                  <span>Full In-House Delivery</span>
                  <ChevronRight size={14} className="ml-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Stand Showcase Images */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-64 sm:h-72 group relative bg-gray-100">
            <img src={hero1Img} alt="Concept Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-bold uppercase tracking-wider">Concept Architecture</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-64 sm:h-72 group relative bg-gray-100">
            <img src={hero2Img} alt="Turnkey Production" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-bold uppercase tracking-wider">Turnkey Production</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-64 sm:h-72 group relative bg-gray-100">
            <img src={hero3Img} alt="On-Time Handover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-bold uppercase tracking-wider">On-Time Handover</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCapabilities;
