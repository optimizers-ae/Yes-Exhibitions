import { useState } from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import AboutSection from '../component/AboutSection';
import ServicesSection from '../component/ServicesSection';
import ImpactResultsSection from '../component/ImpactResultsSection';
import Faq from '../component/Faq';
import GetInTouchSection from '../component/GetInTouchSection';
import Footer from '../component/Footer';
import WorkModal from '../component/WorkModal';

const Home = () => {
  const [isWorkOpen, setIsWorkOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sansation relative flex flex-col selection:bg-[#D49942]/30 selection:text-gray-950">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#D49942] text-white font-bold rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      {/* Header / Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full" role="main">
        <Hero onOpenWork={() => setIsWorkOpen(true)} />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Our Impact & Results Section */}
        <ImpactResultsSection />

         {/* FAQ Section */}
        <Faq />

        {/* Get In Touch & Map Section */}
        <GetInTouchSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Work Portfolio Modal */}
      <WorkModal
        isOpen={isWorkOpen}
        onClose={() => setIsWorkOpen(false)}
      />
    </div>
  );
};

export default Home;
