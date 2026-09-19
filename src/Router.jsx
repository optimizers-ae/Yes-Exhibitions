import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Gallery from "./pages/Gallery"
import TermsPrivacy from "./pages/TermsPrivacy"

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

      <Route path="/gallery" element={<Gallery />} />

      {/* Terms & Conditions & Privacy Policy */}
      <Route path="/terms-and-conditions" element={<TermsPrivacy />} />
      <Route path="/terms" element={<TermsPrivacy />} />
      <Route path="/terms-and-privacy" element={<TermsPrivacy />} />
      <Route path="/privacy-policy" element={<TermsPrivacy />} />
      <Route path="/privacy" element={<TermsPrivacy />} />

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router