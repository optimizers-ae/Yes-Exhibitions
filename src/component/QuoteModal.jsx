import { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Send, Building2, Calendar, Phone, Mail, User } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    standType: 'Custom Exhibition Stand',
    standSize: '6x6m (36 sqm)',
    eventName: '',
    eventDate: '',
    budget: '$15k - $30k',
    message: ''
  });

  // Handle ESC key press
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulated success
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm transition-all animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[92dvh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 my-auto">

        {/* Sticky Header Ribbon */}
        <div className="shrink-0 bg-gradient-to-r from-[#D49942] via-[#E2A243] to-[#B2771D] p-4 sm:p-6 text-white relative pr-12 sm:pr-14">
          <button
            onClick={onClose}
            aria-label="Close quote dialog"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/15 hover:bg-black/30 text-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-wider uppercase text-amber-950/90 bg-white/25 px-2.5 py-1 rounded-full mb-2">
            <Sparkles size={12} className="sm:w-3.5 sm:h-3.5" /> Turnkey Exhibition Solutions
          </div>
          <h2 id="quote-modal-title" className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            Request a Bespoke Proposal
          </h2>
          <p className="text-amber-100 text-xs sm:text-sm mt-1 max-w-lg line-clamp-2 sm:line-clamp-none">
            Let our exhibition architects design and build an awe-inspiring booth for your next global event.
          </p>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto overscroll-contain">
          {submitted ? (
            <div className="text-center py-6 sm:py-10 space-y-4 animate-scaleUp">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-50 text-[#D49942] rounded-full flex items-center justify-center mx-auto border-2 border-[#D49942]/30 shadow-lg shadow-amber-500/10">
                <CheckCircle2 size={32} className="sm:w-9 sm:h-9" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Thank You, {formData.name || 'Partner'}!
              </h3>
              <p className="text-gray-600 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
                Your exhibition inquiry has been received. Our senior design specialist will review your requirements and provide a 3D concept overview within 24 hours.
              </p>
              <div className="pt-2 sm:pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-8 py-2.5 sm:py-3 bg-[#D49942] hover:bg-[#C78326] text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#D49942]"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-3 sm:top-3.5 text-gray-400 pointer-events-none" />
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-3 sm:top-3.5 text-gray-400 pointer-events-none" />
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-3 sm:top-3.5 text-gray-400 pointer-events-none" />
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className="w-full pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3.5 top-3 sm:top-3.5 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Global Tech LLC"
                      className="w-full pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="standType" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Stand Category
                  </label>
                  <select
                    id="standType"
                    name="standType"
                    value={formData.standType}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                  >
                    <option value="Custom Exhibition Stand">Custom Bespoke Stand</option>
                    <option value="Double Decker Stand">Double Decker Stand</option>
                    <option value="Modular Display">Modular & Portable Display</option>
                    <option value="Country / Trade Pavilion">Country / Trade Pavilion</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="standSize" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Approximate Size
                  </label>
                  <select
                    id="standSize"
                    name="standSize"
                    value={formData.standSize}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                  >
                    <option value="Up to 18 sqm">Small (Up to 18 sqm)</option>
                    <option value="6x6m (36 sqm)">Medium: 6x6m (36 sqm)</option>
                    <option value="8x8m (64 sqm)">Large: 8x8m (64 sqm)</option>
                    <option value="100+ sqm Island">Island / Pavilion (100+ sqm)</option>
                    <option value="Custom Size">Custom Dimensions</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="eventName" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Exhibition / Trade Show
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    placeholder="e.g. GITEX, Arab Health"
                    className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Event Date / Month
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3.5 top-3 sm:top-3.5 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      placeholder="e.g. October 2026"
                      className="w-full pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Project Brief & Special Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your goals, preferred layout (meeting rooms, lounge, LED screens)..."
                  className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D49942]"
                >
                  <Send size={16} className="sm:w-[18px] sm:h-[18px]" /> Submit Quote Request
                </button>
                <p className="text-center text-[10px] sm:text-[11px] text-gray-400 mt-2">
                  🔒 We respect your privacy. Fast 24-hour turnaround on design concepts.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;