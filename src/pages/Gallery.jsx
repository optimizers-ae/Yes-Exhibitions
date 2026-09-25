import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AboutGallery from "../component/about/AboutGallery";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sansation">
      <Helmet>
        <title>Exhibition Stand Gallery | YES Exhibitions — Completed Stand Projects</title>
        <meta name="description" content="Browse YES Exhibitions' portfolio of completed custom exhibition stands, trade show booths and event spaces delivered worldwide. See our craftsmanship and creativity." />
        <link rel="canonical" href="https://yesexhibitions.com/gallery" />
        <meta property="og:title" content="Exhibition Stand Gallery | YES Exhibitions" />
        <meta property="og:description" content="Browse our portfolio of custom exhibition stands and trade show booths delivered worldwide." />
        <meta property="og:url" content="https://yesexhibitions.com/gallery" />
        <meta property="og:image" content="https://yesexhibitions.com/og-image.jpg" />
      </Helmet>
    
      {/* Stand Gallery Grid & Lightbox */}
      <AboutGallery />
    </div>
  );
};

export default Gallery;