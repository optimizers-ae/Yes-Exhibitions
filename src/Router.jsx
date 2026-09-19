import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import ServiceDetail from "./pages/ServiceDetail"
import NotFound from "./pages/NotFound"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/contactus" element={<Contact />} />

      <Route path="/about" element={<About />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/aboutus" element={<About />} />

      {/* Single Dynamic Service Page */}
      <Route path="/services" element={<ServiceDetail />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      
      {/* Friendly Service Direct Slugs */}
      <Route path="/custom-exhibition-stands" element={<ServiceDetail defaultSlug="custom-exhibition-stands" />} />
      <Route path="/double-decker-stands" element={<ServiceDetail defaultSlug="double-decker-stands" />} />
      <Route path="/country-trade-pavilions" element={<ServiceDetail defaultSlug="country-trade-pavilions" />} />
      <Route path="/turnkey-project-management" element={<ServiceDetail defaultSlug="turnkey-project-management" />} />
      <Route path="/3d-design-visualization" element={<ServiceDetail defaultSlug="3d-design-visualization" />} />
      <Route path="/modular-exhibition-stands" element={<ServiceDetail defaultSlug="modular-exhibition-stands" />} />

      {/* Not Found */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router