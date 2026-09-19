import { useEffect } from 'react';
import About_Hero from '../component/About_Hero';
import AboutWhoWeAre from '../component/about/AboutWhoWeAre';
import AboutVisionMission from '../component/about/AboutVisionMission';
import AboutCapabilities from '../component/about/AboutCapabilities';
import AboutDesignPurpose from '../component/about/AboutDesignPurpose';
import AboutProcess from '../component/about/AboutProcess';
import AboutStandDesign from '../component/about/AboutStandDesign';
import AboutGallery from '../component/about/AboutGallery';
import AboutExecution from '../component/about/AboutExecution';
import AboutLeadership from '../component/about/AboutLeadership';
import AboutCommitment from '../component/about/AboutCommitment';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | YES Exhibition Stands - Design • Build • Inspire';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      {/* 1. Hero Section */}
      <About_Hero />

      {/* 2. Who We Are & 4 Core Pillars (Slide 02) */}
      <AboutWhoWeAre />

      {/* 3. Our Direction: Vision & Mission (Slide 03) */}
      <AboutVisionMission />

      {/* 4. Capabilities: What We Do (Slide 04) */}
      <AboutCapabilities />

      {/* 5. Design Approach: Design with Purpose (Slide 05) */}
      <AboutDesignPurpose />

      {/* 6. Our Process: From Idea to Impact (Slide 06) */}
      <AboutProcess />
        
    </div>
  );
};

export default About;