import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import PlacardsPage from './pages/PlacardsPage';
import CocinasPage from './pages/CocinasPage';
import BanosPage from './pages/BanosPage';
import HogarPage from './pages/HogarPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<AboutPage />} />
          <Route path="/como-trabajamos" element={<HowWeWorkPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/servicios/placares-vestidores" element={<PlacardsPage />} />
          <Route path="/servicios/cocinas" element={<CocinasPage />} />
          <Route path="/servicios/banos" element={<BanosPage />} />
          <Route path="/servicios/coleccion-hogar" element={<HogarPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
