import { Helmet } from 'react-helmet-async';
import Hero from '../component/Hero';
import AboutSection from '../component/AboutSection';
import ServicesSection from '../component/ServicesSection';
import ImpactResultsSection from '../component/ImpactResultsSection';
import Faq from '../component/Faq';
import GetInTouchSection from '../component/GetInTouchSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sansation relative flex flex-col selection:bg-[#D49942]/30 selection:text-gray-950">
      <Helmet>
        <title>YES Exhibitions | Custom Exhibition Stands & Booth Design Worldwide</title>
        <meta name="description" content="YES Exhibitions designs and builds custom exhibition stands, trade show booths and event spaces that help brands stand out and connect with audiences worldwide. Based in Dubai, UAE." />
        <meta name="keywords" content="exhibition stands, custom exhibition stands, booth design, trade show booths, exhibition stand builders, Dubai exhibition stands, double decker booths, event stands, custom booths, UAE exhibition" />
        <link rel="canonical" href="https://yesexhibitions.com/" />
        <meta property="og:title" content="YES Exhibitions | Custom Exhibition Stands & Booth Design Worldwide" />
        <meta property="og:description" content="From ideas to impact. YES Exhibitions creates custom exhibition stands and trade show booths that help brands stand out at events worldwide." />
        <meta property="og:url" content="https://yesexhibitions.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "YES Exhibitions",
          "url": "https://yesexhibitions.com",
          "logo": "https://yesexhibitions.com/favicon.png",
          "image": "https://yesexhibitions.com/og-image.jpg",
          "description": "YES Exhibitions designs and builds custom exhibition stands, trade show booths and event spaces for brands worldwide.",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "AE",
            "addressLocality": "Dubai"
          },
          "areaServed": ["Dubai", "Abu Dhabi", "UAE", "Middle East", "Worldwide"],
          "serviceType": [
            "Custom Exhibition Stand Design",
            "Trade Show Booth Building",
            "Double Decker Stands",
            "Country Trade Pavilions",
            "Modular Exhibition Stands",
            "3D Visualization",
            "Turnkey Project Management"
          ],
          "sameAs": []
        })}</script>
      </Helmet>

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#D49942] text-white font-bold rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      
      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full" role="main">
        <Hero />

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
    </div>
  );
};

export default Home;

