import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from './pages/Beranda.jsx';
import Detail from './pages/Detail.jsx';
import Keranjang from './pages/Keranjang.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Beranda" element={<Beranda />} />
      <Route path="/Detail/:id" element={<Detail />} />
      <Route path="/Keranjang" element={<Keranjang />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
