import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import About_Hero from '../component/About_Hero';
import AboutWhoWeAre from '../component/about/AboutWhoWeAre';
import AboutVisionMission from '../component/about/AboutVisionMission';
import AboutCapabilities from '../component/about/AboutCapabilities';
import AboutDesignPurpose from '../component/about/AboutDesignPurpose';
import AboutProcess from '../component/about/AboutProcess';
import AboutStandDesign from '../component/about/AboutStandDesign';
import AboutExecution from '../component/about/AboutExecution';
import AboutCommitment from '../component/about/AboutCommitment';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="">
      <Helmet>
        <title>About YES Exhibitions | Custom Exhibition Stand Builders in Dubai & UAE</title>
        <meta name="description" content="Learn about YES Exhibitions — a Dubai-based team specialising in custom exhibition stand design, fabrication and installation for brands at trade shows worldwide." />
        <link rel="canonical" href="https://yesexhibitions.com/about" />
        <meta property="og:title" content="About YES Exhibitions | Custom Stand Builders in Dubai & UAE" />
        <meta property="og:description" content="Learn about YES Exhibitions — a Dubai-based team specialising in custom exhibition stand design, fabrication and installation for brands at trade shows worldwide." />
        <meta property="og:url" content="https://yesexhibitions.com/about" />
        <meta property="og:image" content="https://yesexhibitions.com/og-image.jpg" />
      </Helmet>

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