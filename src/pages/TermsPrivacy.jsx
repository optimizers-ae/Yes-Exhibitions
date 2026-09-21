import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FileText,
  ShieldCheck,
  ArrowLeft,
  ChevronRight,
  Clock,
  CreditCard,
  Ban,
  Package,
  CheckCircle2,
  Settings,
  Layers,
  Building,
  Lock,
  Eye,
  Database,
  Globe,
  Mail,
  Share2
} from 'lucide-react';

const TermsPrivacy = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('terms'); // 'terms' | 'privacy'

  // Sync activeTab with route path
  useEffect(() => {
    if (location.pathname.includes('privacy')) {
      setActiveTab('privacy');
    } else {
      setActiveTab('terms');
    }
  }, [location.pathname]);

  // SEO title and meta description
  useEffect(() => {
    document.title = 'Terms & Conditions and Privacy Policy | YES';

    const metaDescription =
      'Read the Terms & Conditions and Privacy Policy of YES, including quotation validity, payment terms, exhibition project conditions, personal data collection, data protection, cookies, and privacy practices.';

    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', metaDescription);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sansation flex flex-col selection:bg-[#D49942]/30 selection:text-gray-950">
      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-24">
        {/* Breadcrumb Navigation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-600 hover:text-[#D49942] transition-colors py-1.5 px-3.5 rounded-xl bg-white border border-gray-200/80 shadow-xs hover:border-[#D49942]/40"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gray-500">
              <Link to="/" className="hover:text-gray-800 transition-colors">Home</Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span>Legal</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-[#D49942] font-bold">
                {activeTab === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6 sm:p-10 md:p-12 text-white shadow-xl border border-gray-800">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-[radial-gradient(circle_at_center,_rgba(212,153,66,0.35)_0%,_transparent_70%)] blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E2A243] bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-3 border border-[#E2A243]/30">
                <ShieldCheck size={14} className="text-[#E2A243]" /> YES
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
                {activeTab === 'terms' ? (
                  <>Terms & <span className="gold-gradient-text">Conditions</span></>
                ) : (
                  <>Privacy <span className="gold-gradient-text">Policy</span></>
                )}
              </h1>

              <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
                {activeTab === 'terms'
                  ? 'Please review the Terms & Conditions of YES, including quotation validity, payment terms, project scope, and exhibition requirements.'
                  : 'Learn how YES collects, uses, protects, and manages personal and business information when you use our exhibition and event-related services.'}
              </p>

              {/* Navigation Tabs */}
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3 border-t border-gray-800 pt-5 sm:pt-6">
                <button
                  type="button"
                  onClick={() => setActiveTab('terms')}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'terms'
                      ? 'bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-white shadow-md shadow-amber-500/20 ring-2 ring-[#E6AA4D]/30'
                      : 'bg-white/10 hover:bg-white/15 text-gray-300 border border-white/10'
                  }`}
                >
                  <FileText size={16} />
                  <span>Terms & Conditions</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('privacy')}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'privacy'
                      ? 'bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-white shadow-md shadow-amber-500/20 ring-2 ring-[#E6AA4D]/30'
                      : 'bg-white/10 hover:bg-white/15 text-gray-300 border border-white/10'
                  }`}
                >
                  <Lock size={16} />
                  <span>Privacy Policy</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-200/90 shadow-lg space-y-8 sm:space-y-10">

            {/* TAB 1: TERMS & CONDITIONS */}
            {activeTab === 'terms' && (
              <div className="space-y-8">
                {/* 1. Quotation Validity */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Clock size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      1. Quotation Validity
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    All quotations issued by <strong>YES</strong> are valid for <strong>10 days</strong> from the quotation date, unless otherwise stated in writing.
                  </p>
                </section>

                {/* 2. Payment Terms */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <CreditCard size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      2. Payment Terms
                    </h2>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D49942] mt-2 shrink-0" />
                      <p>
                        A <strong>70% advance payment</strong> is required to confirm and activate the project. The remaining <strong>30% balance</strong> must be paid upon project handover.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D49942] mt-2 shrink-0" />
                      <p>
                        If an exhibition or event is postponed after production has commenced, particularly within one month of the scheduled exhibition date, applicable advance payments and production costs may remain chargeable.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 3. Items Not Included in Our Offer */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-red-100/70 text-red-600">
                      <Ban size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      3. Items Not Included in Our Offer
                    </h2>
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11 space-y-3">
                    <p>
                      Unless specifically mentioned in the approved quotation, the following services and charges are <strong>not included</strong>:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {[
                        'Model transportation, logistics, setup, modification, or fabrication.',
                        "Exhibition organizer or venue charges, including advertising fees, exhibition space booking, main power supply, water, sewage and drainage, internet charges, catering, early move-in charges, freight, and loading or offloading of the client's products.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-xs sm:text-sm">
                          <span className="text-red-500 font-bold shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* 4. Client Products & Handling */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Package size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      4. Client Products & Handling
                    </h2>
                  </div>
                  <div className="space-y-2.5 text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    <p>
                      <strong>YES</strong> is not responsible for handling, installation, testing, or operation of the client's products unless specifically agreed in writing.
                    </p>
                    <p>
                      If assistance with product handling is requested during exhibition stand setup, a client representative should be present to supervise the process and ensure the products are handled appropriately.
                    </p>
                    <p>
                      <strong>YES</strong> will not be responsible for loss or damage arising from product handling outside the agreed scope of work.
                    </p>
                  </div>
                </section>

                {/* 5. Project Confirmation */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100/70 text-emerald-600">
                      <CheckCircle2 size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      5. Project Confirmation
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    The project will be considered officially confirmed and active once the quotation and project summary have been signed by the authorized person, the required <strong>70% advance payment</strong> has been received, and any required purchase order or LPO has been submitted.
                  </p>
                </section>

                {/* 6. Product Installation & Testing */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Settings size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      6. Product Installation & Testing
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    Unless specifically included in the quotation, installation, commissioning, or testing of the client's own products is not included in the project scope.
                  </p>
                </section>

                {/* 7. Changes to Approved Scope */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Layers size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      7. Changes to Approved Scope
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    Any modification, additional work, extra material, structural alteration, or service requested after approval of the quotation may result in additional charges and/or changes to the delivery schedule.
                  </p>
                </section>

                {/* 8. Exhibition Organizer Requirements */}
                <section className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Building size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      8. Exhibition Organizer Requirements
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    Any fees, permissions, approvals, technical requirements, or services imposed by the exhibition organizer, venue, or third-party supplier are the responsibility of the client unless specifically included in our quotation.
                  </p>
                </section>
              </div>
            )}

            {/* TAB 2: PRIVACY POLICY */}
            {activeTab === 'privacy' && (
              <div className="space-y-8">
                {/* Intro */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-[#D49942]/20 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <strong className="text-gray-900 block font-bold mb-1">Privacy Policy – YES</strong>
                  At <strong>YES</strong>, we respect your privacy and are committed to protecting the personal and business information you provide when contacting us, requesting a quotation, or using our exhibition and event-related services.
                </div>

                {/* 1. Information We Collect */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Database size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Information We Collect
                    </h2>
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11 space-y-2">
                    <p>We may collect:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {[
                        'Name',
                        'Company name',
                        'Email address',
                        'Phone number',
                        'Project details and exhibition information',
                        'Billing details',
                        'Business requirements',
                        'Submitted documents, drawings, and designs',
                        'Website enquiry information',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-xs sm:text-sm">
                          <CheckCircle2 size={15} className="text-[#D49942] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 2. How We Use Your Information */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Eye size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      How We Use Your Information
                    </h2>
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11 space-y-2">
                    <p>The information collected may be used to:</p>
                    <ul className="space-y-2 pt-1">
                      {[
                        'Respond to enquiries',
                        'Prepare quotations and proposals',
                        'Communicate regarding exhibition projects',
                        'Process documentation and payments',
                        'Coordinate project delivery',
                        'Provide customer support',
                        'Improve our services and website',
                        'Send relevant business communications where permitted',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D49942] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* 3. Information Sharing */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Share2 size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Information Sharing
                    </h2>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    <p>
                      <strong>YES</strong> does not sell or rent customers' personal information.
                    </p>
                    <p>
                      Information may only be shared with trusted employees, contractors, suppliers, logistics providers, exhibition organizers, or service providers where necessary to complete a project or comply with legal requirements.
                    </p>
                  </div>
                </section>

                {/* 4. Data Security */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100/70 text-emerald-600">
                      <Lock size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Data Security
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    YES takes reasonable administrative and technical measures to protect personal and business information against unauthorized access, loss, misuse, alteration, or disclosure.
                  </p>
                </section>

                {/* 5. Cookies & Website Analytics */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Globe size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Cookies & Website Analytics
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    Our website may use cookies and analytics technologies to understand website usage, improve performance, measure visitor activity, and enhance user experience.
                  </p>
                </section>

                {/* 6. Third-Party Websites */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Globe size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Third-Party Websites
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    Our website may contain links to external websites or services. <strong>YES</strong> is not responsible for the privacy practices, security, or content of third-party websites.
                  </p>
                </section>

                {/* 7. Data Retention */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Database size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Data Retention
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    Personal and project-related information may be retained for as long as reasonably necessary to provide our services, maintain business records, resolve disputes, or comply with applicable legal obligations.
                  </p>
                </section>

                {/* 8. Your Information */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <ShieldCheck size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Your Data Rights
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    You may contact YES to request access to, correction of, or deletion of your personal information, subject to applicable legal and business record-keeping requirements.
                  </p>
                </section>

                {/* 9. Privacy Policy Updates */}
                <section className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-[#D49942]">
                      <Clock size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Privacy Policy Updates
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    <strong>YES</strong> may update this Privacy Policy periodically to reflect changes in our services, business practices, or applicable requirements.
                  </p>
                </section>

                {/* 10. Contact Us */}
                <section className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#D49942]/20 text-[#D49942]">
                      <Mail size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Contact Us
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-11">
                    For questions regarding this Privacy Policy, Terms &amp; Conditions, quotations, exhibition services, or your personal information, please contact <strong>YES</strong> through the contact details provided on our official website.
                  </p>
                </section>
              </div>
            )}

            {/* Bottom Contact Help Box */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500">
              <p>Have questions about our terms or services?</p>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-gray-900 hover:bg-[#D49942] text-white font-bold rounded-xl transition-colors shrink-0"
              >
                Contact Legal & Project Support
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsPrivacy;
