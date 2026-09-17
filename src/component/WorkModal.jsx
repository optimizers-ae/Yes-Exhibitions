import { useEffect } from 'react';
import { X, Award, CheckCircle, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import hero1 from '../assets/hero_1.png';
import hero2 from '../assets/hero_2.png';
import hero3 from '../assets/hero_3.png';

const projects = [
  {
    id: 1,
    title: "Signature Tech Island Pavilions",
    location: "Dubai World Trade Centre (DWTC)",
    type: "Custom Island Stand",
    image: hero1,
    size: "120 sqm",
    highlights: ["Curved LED Video Wall", "VIP Lounge", "Interactive Product Demos"]
  },
  {
    id: 2,
    title: "Architectural Double Decker Suite",
    location: "Abu Dhabi National Exhibition Centre (ADNEC)",
    type: "Double-Decker Architecture",
    image: hero2,
    size: "180 sqm",
    highlights: ["Private Upper-Deck Boardroom", "Warm Accent Lighting", "Dedicated Hospitality Bar"]
  },
  {
    id: 3,
    title: "Futuristic Brand Experience Hub",
    location: "Riyadh Front Exhibition & Convention Center",
    type: "Experiential Pavilion",
    image: hero3,
    size: "100 sqm",
    highlights: ["Smart Illumination Curves", "Sustainable Wood Slats", "Integrated Media Displays"]
  }
];

const WorkModal = ({ isOpen, onClose, onOpenQuote }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm transition-all animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 my-8">
        {/* Header */}
        <div className="bg-gray-900 p-6 text-white flex justify-between items-center border-b border-gray-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#D49942] mb-1">
              <Sparkles size={14} /> Global Portfolio Showcase
            </div>
            <h2 id="work-modal-title" className="text-2xl sm:text-3xl font-bold">
              Featured Exhibition Projects
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close portfolio dialog"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#D49942] transition-all hover:shadow-xl flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-[#E6AA4D] text-[10px] font-bold px-2.5 py-1 rounded">
                    {project.size}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D49942]">
                      {project.type}
                    </span>
                    <h3 className="font-bold text-gray-900 text-base mt-1 line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-1.5">
                      <MapPin size={13} className="text-[#D49942] shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    <ul className="mt-3 space-y-1">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                          <CheckCircle size={12} className="text-[#D49942] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        onClose();
                        if (onOpenQuote) onOpenQuote();
                      }}
                      className="w-full py-2 bg-gray-900 hover:bg-black text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                    >
                      Inquire Similar Design <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D49942] shadow-sm border border-amber-200 shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Over 500+ Stands Executed Across 30+ Countries</h4>
                <p className="text-gray-600 text-xs">Middle East • Europe • North America • Asia</p>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                if (onOpenQuote) onOpenQuote();
              }}
              className="px-5 py-2.5 bg-[#D49942] hover:bg-[#C78326] text-white font-bold text-xs rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              Get Custom Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
