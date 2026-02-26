import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (isHome) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className={`header ${scrolled || !isHome ? 'scrolled' : ''} ${!isHome ? 'header-solid' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="GRANATA Mobile" className="header-logo-img" />
                    </Link>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/" onClick={(e) => scrollToSection(e, 'hero')}>Inicio</Link></li>
                        <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
                        <li>
                            {isHome ? (
                                <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Servicios</a>
                            ) : (
                                <Link to="/#services">Servicios</Link>
                            )}
                        </li>
                        <li><Link to="/proyectos">Proyectos</Link></li>
                        <li><Link to="/contacto" className="btn btn-primary btn-sm">Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
