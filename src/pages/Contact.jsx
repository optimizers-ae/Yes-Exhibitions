import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Send,
  CheckCircle2,
  Building2,
  Calendar,
  Phone,
  Mail,
  User,
  Sparkles,
  Layers,
  Globe,
  ShieldCheck,
  Clock,
  Award,
  MessageCircle,
  Tv,
  Users,
  Coffee,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  MapPin
} from 'lucide-react';

const standTypes = [
  {
    id: 'custom',
    name: 'Custom Bespoke Stand',
    desc: 'Fully customized architecture tailored exclusively to your brand',
    icon: Building2
  },
  {
    id: 'double-decker',
    name: 'Double Decker Stand',
    desc: 'Two-story exhibition structure to double your floor presence & VIP space',
    icon: Layers
  },
  {
    id: 'modular',
    name: 'Modular & Portable Display',
    desc: 'Flexible, reconfigurable high-end systems for multi-event campaigns',
    icon: Sparkles
  },
  {
    id: 'pavilion',
    name: 'Country / Trade Pavilion',
    desc: 'Multi-exhibitor group pavilions and national delegation booths',
    icon: Globe
  }
];

const standSizes = [
  { label: 'Small (Up to 18 sqm)', value: 'Up to 18 sqm', sub: 'Ideal for 3x3m to 3x6m spaces' },
  { label: 'Medium (36 sqm - 6x6m)', value: '6x6m (36 sqm)', sub: 'Popular corner / island stand' },
  { label: 'Large (64 sqm - 8x8m)', value: '8x8m (64 sqm)', sub: 'Spacious multi-zone presence' },
  { label: 'Island / Pavilion (100+ sqm)', value: '100+ sqm Island', sub: 'Mega 4-side open or 2-story booth' },
  { label: 'Custom Dimensions', value: 'Custom Size', sub: 'Specify your exact space meters' }
];

const budgetOptions = [
  { label: 'Under $15,000', value: 'Under $15k' },
  { label: '$15,000 – $30,000', value: '$15k - $30k' },
  { label: '$30,000 – $60,000', value: '$30k - $60k' },
  { label: '$60,000 – $120,000', value: '$60k - $120k' },
  { label: '$120,000+', value: '$120k+' },
  { label: 'To be determined', value: 'Undecided / Flexible' }
];

const featureAddons = [
  { id: 'led-wall', label: 'LED Video Wall / Curved Displays', icon: Tv },
  { id: 'vip-lounge', label: 'VIP Lounge & Private Meeting Room', icon: Users },
  { id: 'bar-cafe', label: 'Hospitality Bar & Coffee Station', icon: Coffee },
  { id: 'rigging', label: 'Hanging Ceiling Banners / Rigging', icon: Lightbulb },
  { id: 'interactive', label: 'Touchscreen Kiosks & AR/VR Demos', icon: Sparkles },
  { id: 'storage', label: 'Secure Storage & Lockable Pantry', icon: ShieldCheck }
];



const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    cityCountry: '',
    standType: 'Custom Bespoke Stand',
    standSize: '6x6m (36 sqm)',
    eventName: '',
    eventDate: '',
    eventLocation: '',
    budget: '$15k - $30k',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleFeature = (featureLabel) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureLabel)
        ? prev.filter((item) => item !== featureLabel)
        : [...prev, featureLabel]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      cityCountry: '',
      standType: 'Custom Bespoke Stand',
      standSize: '6x6m (36 sqm)',
      eventName: '',
      eventDate: '',
      eventLocation: '',
      budget: '$15k - $30k',
      message: ''
    });
    setSelectedFeatures([]);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sansation flex flex-col selection:bg-[#D49942]/30 selection:text-gray-950">
      {/* Main Content Area */}
      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-24">
        {/* Top Breadcrumb & Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-600 hover:text-[#D49942] transition-colors py-1 px-3 rounded-lg bg-white border border-gray-200/80 shadow-xs hover:border-[#D49942]/40"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gray-500">
              <span>Home</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-[#D49942] font-bold">Contact Us</span>
            </div>
          </div>
        </div>

        {/* Hero Headline Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6 sm:p-10 md:p-14 text-white shadow-2xl border border-gray-800">
            {/* Background Glow Accents */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[radial-gradient(circle_at_center,_rgba(212,153,66,0.35)_0%,_transparent_70%)] blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[radial-gradient(circle_at_center,_rgba(226,162,67,0.2)_0%,_transparent_70%)] blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E2A243] bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4 border border-[#E2A243]/30">
                <Sparkles size={14} className="text-[#E2A243]" /> Turnkey Exhibition Solutions
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1]">
                REQUEST A <span className="gold-gradient-text">BESPOKE PROPOSAL</span>
              </h1>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
                Partner with YES Exhibition for award-winning booth architecture, precision in-house fabrication, and turnkey on-site delivery for your next global event.
              </p>

              {/* Quick Highlight Pills */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-gray-200">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-xs">
                  <Clock size={15} className="text-[#E2A243]" />
                  <span>24-Hour 3D Concept Turnaround</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-xs">
                  <Award size={15} className="text-[#E2A243]" />
                  <span>500+ Stands Delivered Worldwide</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-xs">
                  <ShieldCheck size={15} className="text-emerald-400" />
                  <span>100% On-Time Handover Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid: Form (Left) & Trust / Contact Info (Right) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* LEFT COLUMN: Contact & Inquiry Form / Success State */}
            <div className="lg:col-span-8">
              {submitted ? (
                /* Success Confirmation State */
                <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-200/90 shadow-xl text-center space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-amber-500/20 to-amber-200/30 text-[#D49942] rounded-full flex items-center justify-center mx-auto border-2 border-[#D49942]/40 shadow-lg shadow-amber-500/10">
                    <CheckCircle2 size={44} className="sm:w-14 sm:h-14 text-[#D49942]" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#D49942] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      Inquiry Received Successfully
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                      Thank You, {formData.name || 'Valued Partner'}!
                    </h2>
                    <p className="text-gray-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                      We have received your exhibition brief for <strong className="text-gray-900">{formData.eventName || 'your upcoming exhibition'}</strong>. Our senior stand architect is already reviewing your specs and will prepare a tailored 3D proposal within 24 hours.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 text-left border border-gray-200 max-w-xl mx-auto space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Inquiry Overview
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div>
                        <span className="text-gray-500">Contact:</span>{' '}
                        <strong className="text-gray-900">{formData.email}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500">Phone:</span>{' '}
                        <strong className="text-gray-900">{formData.phone}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500">Stand Type:</span>{' '}
                        <strong className="text-gray-900">{formData.standType}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500">Stand Size:</span>{' '}
                        <strong className="text-gray-900">{formData.standSize}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500">Budget Range:</span>{' '}
                        <strong className="text-gray-900">{formData.budget}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500">Preferred Channel:</span>{' '}
                        <strong className="text-gray-900">{formData.contactPreference}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Next Step Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <Link
                      to="/"
                      className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <span>Return to Homepage</span>
                      <ArrowRight size={16} />
                    </Link>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3.5 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-bold text-sm rounded-xl transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Contact / Inquiry Form */
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200/90 shadow-xl space-y-8 sm:space-y-10"
                >
                  {/* Step 1: Client Contact Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                      <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E6AA4D] to-[#C78326] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                        1
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        Contact Details
                      </h3>
                      <span className="text-xs text-gray-400 ml-auto">* Required fields</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User size={18} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
                          <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Alexander Vance"
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Business Email *
                        </label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
                          <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="alex@company.com"
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <div className="relative">
                          <Phone size={18} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
                          <input
                            required
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+971 50 123 4567"
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Company / Brand Name *
                        </label>
                        <div className="relative">
                          <Building2 size={18} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
                          <input
                            required
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. Apex Global Technologies"
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Stand Category & Dimensions */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                      <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E6AA4D] to-[#C78326] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                        2
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        Stand Category & Space
                      </h3>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Select Stand Type
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {standTypes.map((type) => {
                          const Icon = type.icon;
                          const isSelected = formData.standType === type.name;
                          return (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, standType: type.name }))}
                              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3.5 cursor-pointer ${isSelected
                                ? 'border-[#D49942] bg-amber-50/50 shadow-md shadow-amber-500/10 ring-2 ring-[#D49942]/20'
                                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                                }`}
                            >
                              <div
                                className={`p-2.5 rounded-xl shrink-0 transition-colors ${isSelected
                                  ? 'bg-[#D49942] text-white'
                                  : 'bg-gray-100 text-gray-600'
                                  }`}
                              >
                                <Icon size={20} />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-bold text-gray-900 leading-tight">
                                  {type.name}
                                </div>
                                <div className="text-xs text-gray-500 mt-1 leading-snug">
                                  {type.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label htmlFor="standSize" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Approximate Stand Size
                        </label>
                        <div className="relative">
                          <select
                            id="standSize"
                            name="standSize"
                            value={formData.standSize}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all font-medium appearance-none"
                          >
                            {standSizes.map((s, idx) => (
                              <option key={idx} value={s.value}>
                                {s.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#D49942] pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Target Budget Range
                        </label>
                        <div className="relative">
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all font-medium appearance-none"
                          >
                            {budgetOptions.map((b, idx) => (
                              <option key={idx} value={b.value}>
                                {b.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#D49942] pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Event & Exhibition Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                      <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E6AA4D] to-[#C78326] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                        3
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        Event Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-1">
                        <label htmlFor="eventName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Exhibition / Show Name
                        </label>
                        <input
                          type="text"
                          id="eventName"
                          name="eventName"
                          value={formData.eventName}
                          onChange={handleChange}
                          placeholder="e.g. GITEX, Arab Health"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                        />
                      </div>

                      <div className="sm:col-span-1">
                        <label htmlFor="eventLocation" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Host City / Venue
                        </label>
                        <div className="relative">
                          <MapPin size={18} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
                          <input
                            type="text"
                            id="eventLocation"
                            name="eventLocation"
                            value={formData.eventLocation}
                            onChange={handleChange}
                            placeholder="e.g. Dubai WTC / Riyadh"
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1">
                        <label htmlFor="eventDate" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Event Date / Month
                        </label>
                        <div className="relative">
                          <Calendar size={18} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
                          <input
                            type="text"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            placeholder="e.g. October 2026"
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Stand Add-ons & Special Requirements */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                      <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E6AA4D] to-[#C78326] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                        4
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        Stand Features & Project Brief
                      </h3>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Desired Features & Installations (Optional)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                        {featureAddons.map((feat) => {
                          const Icon = feat.icon;
                          const isChecked = selectedFeatures.includes(feat.label);
                          return (
                            <button
                              key={feat.id}
                              type="button"
                              onClick={() => toggleFeature(feat.label)}
                              className={`p-3 rounded-xl border text-left flex items-center gap-2.5 text-xs font-bold transition-all cursor-pointer ${isChecked
                                ? 'border-[#D49942] bg-amber-50 text-gray-950 shadow-xs'
                                : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-white hover:border-gray-300'
                                }`}
                            >
                              <div
                                className={`p-1.5 rounded-lg shrink-0 ${isChecked ? 'bg-[#D49942] text-white' : 'bg-gray-200 text-gray-600'
                                  }`}
                              >
                                <Icon size={14} />
                              </div>
                              <span className="leading-tight">{feat.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Project Brief & Special Design Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your brand vision, key products to highlight, open sides needed, meeting room capacity, flooring preferences..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#D49942] focus:ring-2 focus:ring-[#D49942]/20 focus:outline-none transition-all resize-y"
                      />
                    </div>

                 
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] hover:from-[#EBB257] hover:to-[#D18F33] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Generating Inquiry Ticket...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Submit Inquiry for 3D Proposal</span>
                        </>
                      )}
                    </button>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 mt-3.5">
                      <span className="flex items-center gap-1">
                        Confidential & Secure
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        24h Turnaround
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        No Obligation Estimate
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: Trust Sidebar & Direct Connect */}
            <div className="lg:col-span-4 space-y-6">

              {/* Fast-Track WhatsApp Card */}
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase bg-white/20 px-2.5 py-1 rounded-full mb-3 text-emerald-100">
                  <MessageCircle size={13} /> Instant VIP Assistance
                </div>
                <h3 className="text-xl font-bold leading-tight">
                  Need an Urgent Stand Consultation?
                </h3>
                <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
                  Chat directly with our senior exhibition project director on WhatsApp for immediate availability and venue estimates.
                </p>
                <a
                  href="https://wa.me/971500000000?text=Hi%20YES%20Exhibition%20Team,%20I%20would%20like%20to%20discuss%20an%20exhibition%20stand."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 w-full py-3 px-4 bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} className="text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Why Choose YES Exhibition */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-md space-y-5">
                <div className="border-b border-gray-100 pb-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#D49942] uppercase block mb-1">
                    The YES Advantage
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    Why Global Brands Choose Us
                  </h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-50 text-[#D49942] shrink-0 mt-0.5 border border-amber-100">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold text-sm">
                        Free Tailored 3D Concept
                      </strong>
                      <span className="text-gray-500 leading-snug">
                        Full photo-realistic rendering from multiple camera angles before contract commitment.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-50 text-[#D49942] shrink-0 mt-0.5 border border-amber-100">
                      <Building2 size={16} />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold text-sm">
                        Direct In-House Fabrication
                      </strong>
                      <span className="text-gray-500 leading-snug">
                        Full joinery, steel framing, paint booths, and large-format graphics in our own production facilities.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 mt-0.5 border border-emerald-100">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold text-sm">
                        100% On-Time Handover
                      </strong>
                      <span className="text-gray-500 leading-snug">
                        Guaranteed booth delivery 24 hours before show opening for seamless branding prep.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-50 text-[#D49942] shrink-0 mt-0.5 border border-amber-100">
                      <Globe size={16} />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold text-sm">
                        Global Exhibition Reach
                      </strong>
                      <span className="text-gray-500 leading-snug">
                        Proven capability across Dubai, Abu Dhabi, Riyadh, Frankfurt, Las Vegas, Paris, and Singapore.
                      </span>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </main>

    </div>
  );
};

export default Contact;
