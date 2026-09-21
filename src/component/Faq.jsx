import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    questions: [
      {
        q: "What services does YES Exhibitions Stands provide?",
        a: "We provide end-to-end exhibitions solutions, including Concept & Design, 3D Visualization, Fabrication, Installation, and On-Site Support."
      },
      {
        q: "What is the company's workflow or process?",
        a: "Our process consists of 5 structured steps: Discovery (understanding your goals), Concept & Design, Fabrication (quality craftsmanship), Installation (on-time execution), and Final Handover."
      },
      {
        q: "Do you work on events or brand activations apart from exhibitions stands?",
        a: "Yes, in addition to custom exhibitions stands, we design and build impactful environments for global trade shows, brand activations, and events."
      }
    ]
  },
  {
    questions: [
      {
        q: "Can we review the stand design before fabrication begins?",
        a: "Absolutely! We offer 3D Visualization services so you can see a realistic 3D preview of your stand before it is built."
      },
      {
        q: "Do you create custom stand designs?",
        a: "Yes, we create unique, tailored custom designs specific to your brand goals and vision."
      }
    ]
  },
  {
    questions: [
      {
        q: "Who manages the setup and installation of the stand?",
        a: "Our dedicated team handles precise, on-time installation and execution directly on-site."
      },
      {
        q: "Will on-site assistance be available during the event?",
        a: "Yes, we provide complete On-Site Support to ensure a seamless experience from start to finish."
      }
    ]
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Background color matching the "Get in Touch" section (Light Beige/Cream)
    <section className="w-full bg-[#FDFBF7] py-20 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#D4A353]"></span>
            <span className="text-[#D4A353] font-semibold tracking-[0.2em] text-sm uppercase">FAQ</span>
            <span className="w-12 h-[1px] bg-[#D4A353]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
            FREQUENTLY ASKED <span className="text-[#D4A353]">QUESTIONS</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our exhibitions stand services, process, and support.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-10">
          {faqData.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 pl-2 border-l-4 border-[#D4A353]">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.questions.map((item, index) => {
                  // Unique index across all groups
                  const globalIndex = `${groupIdx}-${index}`;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div 
                      key={globalIndex}
                      className={`bg-white rounded-xl border transition-all duration-300 ${
                        isOpen ? 'border-[#D4A353] shadow-md' : 'border-gray-200 shadow-sm hover:border-[#D4A353]/50'
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none"
                      >
                        <span className={`font-semibold text-lg ${isOpen ? 'text-[#D4A353]' : 'text-[#1A1A1A]'}`}>
                          {item.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`p-1 rounded-full ${isOpen ? 'bg-[#D4A353]/10 text-[#D4A353]' : 'bg-gray-100 text-gray-500'}`}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="p-5 md:p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;