import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import Services from './components/Services';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WheatPage from './components/WheatPage';
import RicePage from './components/RicePage';
import CornPage from './components/CornPage';
import CarrotPage from './components/CarrotPage';
import CottonPage from './components/CottonPage';
import MilletsPage from './components/MilletsPage';
import SoyaPage from './components/SoyaPage';
import SugarPage from './components/SugarPage';
import GroundnutPage from './components/GroundnutPage';
import ApplePage from './components/ApplePage';
import OrangePage from './components/OrangePage';
import PotatoPage from './components/PotatoPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/wheat" element={<WheatPage />} />
          <Route path="/rice" element={<RicePage />} />
          <Route path="/corn" element={<CornPage />} />
          <Route path="/carrot" element={<CarrotPage />} />
          <Route path="/cotton" element={<CottonPage />} />
          <Route path="/millets" element={<MilletsPage />} />
          <Route path="/soya" element={<SoyaPage />} />
          <Route path="/sugarcane" element={<SugarPage />} />
          <Route path="/groundnut" element={<GroundnutPage />} />
          <Route path="/apple" element={<ApplePage />} />
          <Route path="/orange" element={<OrangePage />} />
          <Route path="/potato" element={<PotatoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
