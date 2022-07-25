import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import ScrollToTop from "./helpers/ScrollToTop";
import useGaTracker from "./useGaTracker";

function App() {
  useGaTracker();
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
