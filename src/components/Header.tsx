import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Body scroll lock
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    // Close menu when location changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (isHome) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setMenuOpen(false);
            }
        }
    };

    return (
        <header className={`header ${scrolled || !isHome ? 'scrolled' : ''} ${!isHome ? 'header-solid' : ''} ${menuOpen ? 'nav-open' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="GRANATA Mobile" className="header-logo-img" />
                    </Link>
                </div>

                <button className={`mobile-nav-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="hamburger"></span>
                </button>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={(e) => scrollToSection(e, 'hero')}>Inicio</Link></li>
                        <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
                        <li className="nav-item-dropdown">
                            <span className="nav-trigger">
                                Servicios <span className="dropdown-icon">▼</span>
                            </span>
                            <div className="dropdown-menu dropdown-wide">
                                <Link to="/servicios/cocinas" className="dropdown-item">Cocinas</Link>
                                <Link to="/servicios/placares-vestidores" className="dropdown-item">Placares y Vestidores</Link>
                                <Link to="/servicios/banos" className="dropdown-item">Vanities y Baños</Link>
                                <Link to="/servicios/coleccion-hogar" className="dropdown-item">Colección Hogar</Link>
                            </div>
                        </li>

                        <li><Link to="/como-trabajamos">Cómo trabajamos</Link></li>

                        <li><Link to="/proyectos">Galería</Link></li>
                        <li><Link to="/contacto" className="btn btn-primary btn-sm">Contacto</Link></li>
                    </ul>
                </nav>

            </div>
            {/* Overlay for mobile menu */}
            <div className={`nav-overlay ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}></div>
        </header>
    );
};

export default Header;
