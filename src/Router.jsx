import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Quote from "./pages/Quote"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/quote-modal" element={<Quote />} />
      <Route path="/request-quote" element={<Quote />} />
    </Routes>
  )
}

export default Router