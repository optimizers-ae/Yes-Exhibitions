import { useEffect } from "react";
import AboutGallery from "../component/about/AboutGallery";
const Gallery = () => {
  useEffect(() => {
    document.title = "Stand Gallery | YES Exhibition Stands - Design • Build • Inspire";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sansation">
    
      {/* Stand Gallery Grid & Lightbox */}
      <AboutGallery />
    </div>
  );
};

export default Gallery;