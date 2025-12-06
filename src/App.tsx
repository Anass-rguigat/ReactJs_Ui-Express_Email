import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import QuiSommesNousPage from './pages/QuiSommesNousPage';
import ContactPage from './pages/ContactPage';
import MaterielPage from './pages/MaterielPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/qui-sommes-nous" element={<QuiSommesNousPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/materiel" element={<MaterielPage />} />
    </Routes>
  );
}

export default App;
