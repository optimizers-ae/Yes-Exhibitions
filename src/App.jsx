import Router from "./Router"
import MouseTracker from "./component/MouseTracker"
  import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <div className="font-sansation">
      <MouseTracker />
      <Router />
      <ToastContainer />
    </div>
  )
}

export default App