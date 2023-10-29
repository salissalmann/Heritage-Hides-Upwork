import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import './App.css';
import LandingPage from './Pages/LandingPage'
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ShowNow from './Pages/ShopPage'
import ProductPage from './Components/ProductPage'

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

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
