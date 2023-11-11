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


        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
