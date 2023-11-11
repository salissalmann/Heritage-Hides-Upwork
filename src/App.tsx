import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import './App.css';
import LandingPage from './Pages/LandingPage'
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ShowNow from './Pages/ShopPage'
import ProductPage from './Components/ProductPage'
import About from "./Pages/AboutUs"
import Contact from "./Pages/Contact";
import Quotation from "./Pages/Quotation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>

        <Routes>
          <Route path="/shop/:type" element={<ShowNow />} />
        </Routes>

        <Routes>
          <Route path="/product/:articleId" element={<ProductPage />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/quotation" element={<Quotation />} />
        </Routes>

        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }}
            className="bg-brown-700 rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
