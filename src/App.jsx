import Router from "./Router"
import MouseTracker from "./component/MouseTracker"
import ScrollToTop from "./component/ScrollToTop"
import WhatsAppButton from "./component/WhatsAppButton"
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="font-sansation">
      <ScrollToTop />
      <MouseTracker />
      <WhatsAppButton />
      <Router />
      <ToastContainer />
    </div>
  )
}

export default App