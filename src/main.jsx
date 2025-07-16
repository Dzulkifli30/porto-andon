import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import Tes from './pages/Tes.jsx'
import './fontawesome';
// import '@fontsource/montserrat/variable.css'; // Import default font styles

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tes" element={<Tes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
