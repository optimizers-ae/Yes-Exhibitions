import { useState } from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import AboutSection from '../component/AboutSection';
import ServicesSection from '../component/ServicesSection';
import ImpactResultsSection from '../component/ImpactResultsSection';
import GetInTouchSection from '../component/GetInTouchSection';
import Footer from '../component/Footer';
import QuoteModal from '../component/QuoteModal';
import WorkModal from '../component/WorkModal';

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
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
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full" role="main">
        <Hero
          onOpenQuote={() => setIsQuoteOpen(true)}
          onOpenWork={() => setIsWorkOpen(true)}
        />

        {/* About Section */}
        <AboutSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Services Section */}
        <ServicesSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Our Impact & Results Section (From Design Image) */}
        <ImpactResultsSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Get In Touch & Map Section (From Design Image) */}
        <GetInTouchSection onOpenQuote={() => setIsQuoteOpen(true)} />
      </main>

      {/* Footer (From Design Image) */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <WorkModal
        isOpen={isWorkOpen}
        onClose={() => setIsWorkOpen(false)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />
    </div>
  );
};

export default Home;
