import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
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

      {/* Not Found */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router