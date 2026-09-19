import Router from "./Router"
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ScrollToTop from "./component/ScrollToTop"
import WhatsAppButton from "./component/WhatsAppButton"
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="font-sansation">
      <Navbar />
      <ScrollToTop />
      <WhatsAppButton />
      <Router />
      <Footer />

      <ToastContainer />
    </div>
  )
}

export default App