import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import './App.css';
import LandingPage from './Pages/LandingPage'
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ShowNow from './Pages/ShopPage'

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


        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
