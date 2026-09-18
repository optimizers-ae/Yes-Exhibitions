const AboutExecution = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#D49942] uppercase block">
            QUALITY & EXECUTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950">
            FROM 3D TO REALITY
          </h2>
          <div className="text-sm sm:text-base font-bold text-[#D49942] uppercase tracking-wider">
            THE CONCEPT IS ONLY THE BEGINNING
          </div>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            A beautiful 3D concept is only the beginning. The real challenge is turning that vision into a physical environment while maintaining the design intent, functionality, and quality of the finished stand.
          </p>
        </div>

        {/* Project Flow Line */}
        <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 shadow-sm mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D49942] block mb-4">
            OUR SEAMLESS PROJECT FLOW
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
            {['1. CONCEPT', '2. DESIGN', '3. DETAIL', '4. PRODUCTION', '5. INSTALLATION', '6. FINAL EXPERIENCE'].map((stage, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#D49942] hover:bg-amber-50/50 transition-colors">
                <span className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Objective Golden Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/15 via-amber-400/20 to-amber-500/15 border-2 border-[#D49942]/40 text-center max-w-4xl mx-auto shadow-md">
          <span className="text-xs font-extrabold tracking-widest uppercase text-[#B2771D] block mb-2">
            THE CORE OBJECTIVE
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-950 leading-tight">
            MAKE THE CONCEPT LOOK AS GOOD IN REAL LIFE AS IT DOES ON SCREEN.
          </h3>
        </div>

      </div>
    </section>
  );
};

export default AboutExecution;
