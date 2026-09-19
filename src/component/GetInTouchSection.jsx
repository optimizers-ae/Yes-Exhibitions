import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Send, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitting(true);
    setErrorMessage('');

    try {
      let response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Fallback to PHP endpoint if on Hostinger / Apache server where /api/contact is 404/405
      if (response.status === 404 || response.status === 405) {
        response = await fetch('/api/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 5000);
      } else {
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Could not connect to server. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-gray-900 relative overflow-hidden">

      {/* Yellow Radial Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(253,230,138,0.4)_0%,_rgba(253,230,138,0.1)_40%,_transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.3)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Badge - Small Screen par Center */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D49942]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D49942] uppercase">
            Contact
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D49942]" />
        </div>

        {/* Main Grid: Left = Title + Form | Right = Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: Title + Form */}
          <div className="lg:col-span-6 space-y-8">
            {/* Heading & Description - Small Screen par Center */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-gray-900 uppercase leading-[1.1]">
                GET IN <span className="gold-gradient-text">TOUCH</span>
              </h2>
              <p className="mt-4 text-sm text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Let's craft an unforgettable exhibition experience together. Reach out and our
                team will respond within 24 hours.
              </p>
            </div>

            {/* Contact Form Box */}
            <div className="group relative text-left">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-amber-500/40 via-amber-500/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
              <div className="relative bg-white p-6 sm:p-8 rounded-2xl border border-amber-500/20 shadow-xl">
                {submitted ? (
                  <div className="py-16 text-center space-y-4 animate-[fadeIn_0.4s_ease-out]">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                    <p className="text-sm text-gray-500 max-w-xs mx-auto">
                      Your message has been received. Our exhibition team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1.5 block">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-gray-50 border text-gray-900 placeholder-gray-400 text-sm focus:outline-none transition-all duration-300 ${focusedField === 'name'
                            ? 'border-[#D49942] shadow-[0_0_0_3px_rgba(212,153,66,0.12)] bg-white'
                            : 'border-gray-200'
                          }`}
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1.5 block">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-gray-50 border text-gray-900 placeholder-gray-400 text-sm focus:outline-none transition-all duration-300 ${focusedField === 'email'
                            ? 'border-[#D49942] shadow-[0_0_0_3px_rgba(212,153,66,0.12)] bg-white'
                            : 'border-gray-200'
                          }`}
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1.5 block">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-gray-50 border text-gray-900 placeholder-gray-400 text-sm focus:outline-none transition-all duration-300 resize-none ${focusedField === 'message'
                            ? 'border-[#D49942] shadow-[0_0_0_3px_rgba(212,153,66,0.12)] bg-white'
                            : 'border-gray-200'
                          }`}
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group/btn relative w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all cursor-pointer flex items-center justify-center gap-2 overflow-hidden shadow-lg shadow-amber-500/20 disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                        {submitting ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span className="relative">Send Message</span>
                            <Send className="relative w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Map */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-amber-500/40 via-amber-500/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]" />

            <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-xl bg-white">
              {/* Map Header Bar */}
              <div className="relative bg-gray-50 px-5 sm:px-7 py-5 border-b border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/30 flex items-center justify-center text-[#D49942] shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base tracking-wider uppercase text-gray-900">
                        YES Exhibition Stands
                      </h4>
                      <p className="text-[11px] text-gray-500 font-medium mt-0.5 flex items-center gap-1.5">
                        <Navigation className="w-3 h-3 text-[#D49942]" />
                        Dubai World Trade Centre, UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Open Now
                    </span>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#E6AA4D] to-[#C78326] hover:opacity-90 px-4 py-2 rounded-full transition-all shadow-lg shadow-amber-500/20"
                    >
                      <span>Directions</span>
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Iframe with Overlay */}
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px]">
                <iframe
                  title="YES Exhibition Stands Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115494.61918342417!2d55.15570077712396!3d25.13710778401314!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1c5e2!2sDubai%20World%20Trade%20Centre!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(1.1) brightness(1.0)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none">
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#D49942]/20 border border-[#D49942]/40 backdrop-blur-sm flex items-center justify-center text-[#D49942] shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-amber-400/90 font-semibold">
                          Visit Our Office
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-white">
                          Dubai World Trade Centre, Sheikh Zayed Rd, Dubai, UAE
                        </p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex text-[10px] font-medium text-gray-200 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                      Mon – Sat · 9AM – 7PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default GetInTouchSection;