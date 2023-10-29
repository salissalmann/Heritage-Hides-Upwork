import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import './App.css';
import LandingPage from './Pages/LandingPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
