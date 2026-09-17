import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const GetInTouchSection = ({ onOpenQuote }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#121212] text-white relative overflow-hidden">
      {/* Background Gold Ambient Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Title, Info Grid & CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
                GET IN <span className="gold-gradient-text">TOUCH</span>
              </h2>
            </div>

            {/* Info Grid with Icons */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-amber-500/30 flex items-center justify-center text-[#D49942]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Quick Call</span>
                  <a href="tel:+971501234567" className="text-sm font-semibold text-gray-200 hover:text-[#D49942] transition-colors">
                    Quick Call Here
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-amber-500/30 flex items-center justify-center text-[#D49942]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Email Us</span>
                  <a href="mailto:YES@exhibition.com" className="text-sm font-semibold text-gray-200 hover:text-[#D49942] transition-colors">
                    YES@exhibition.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-amber-500/30 flex items-center justify-center text-[#D49942]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Brief Form</span>
                  <span className="text-sm font-semibold text-gray-200">
                    Customization Form
                  </span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-amber-500/30 flex items-center justify-center text-[#D49942]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Headquarters</span>
                  <span className="text-sm font-semibold text-gray-200">
                    YES Exhibition Stands
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Quote Button */}
            <motion.div variants={fadeInUp} className="pt-4">
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form Box */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6"
          >
            <div className="bg-[#181818] p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Thank You!</h3>
                  <p className="text-sm text-gray-400">Your message has been received. Our exhibition team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#242424] border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D49942] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#242424] border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D49942] transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      required
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#242424] border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D49942] transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="px-8 py-2.5 rounded-lg bg-gradient-to-r from-[#E6AA4D] via-[#DF9B34] to-[#C78326] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer flex items-center gap-2"
                    >
                      <span>Send</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Container */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-[#1A1A1A]"
        >
          {/* Map Title Bar */}
          <div className="bg-white text-gray-900 px-6 py-3 flex items-center justify-between border-b border-gray-200">
            <div>
              <h4 className="font-bold text-xs sm:text-sm tracking-wider uppercase">
                YES EXHIBITION STANDS.
              </h4>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-blue-600 hover:underline font-medium"
              >
                View Larger Map
              </a>
            </div>
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-[#D49942]">
              <MapPin className="w-4 h-4" />
            </div>
          </div>

          {/* Interactive Map Iframe */}
          <div className="w-full h-80 sm:h-96 relative">
            <iframe
              title="YES Exhibition Stands Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115494.61918342417!2d55.15570077712396!3d25.13710778401314!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1c5e2!2sDubai%20World%20Trade%20Centre!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GetInTouchSection;
