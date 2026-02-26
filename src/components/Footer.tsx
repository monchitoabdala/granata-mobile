import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer" id="footer-contact">
            <div className="container footer-grid">
                <div className="footer-col-main">
                    <div className="footer-logo-alt">
                        <Link to="/" onClick={scrollToTop} className="footer-logo-link">
                            <img src={logo} alt="GRANATA Mobile" className="footer-logo-img" />
                        </Link>
                    </div>
                    <p className="footer-desc-alt">
                        Especialistas en mobiliario de diseño y soluciones integrales de almacenamiento para el hogar moderno.
                    </p>
                    <div className="social-icons-circular">
                        <a href="#" className="social-circle">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                            </svg>
                        </a>
                        <a href="#" className="social-circle">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Servicios</h4>
                    <ul>
                        <li><Link to="/#services">Vestidores</Link></li>
                        <li><Link to="/#services">Placares</Link></li>
                        <li><Link to="/#services">Cocinas</Link></li>
                        <li><Link to="/#services">Vanitys</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Navegación</h4>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
                        <li><Link to="/proyectos">Proyectos</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contacto Directo</h4>
                    <ul className="contact-list-alt">
                        <li>
                            Showroom: Av. Eva Perón 6932 – Rosario
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="contact-icon">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            Fábrica: Ramírez 5831 – Rosario
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="contact-icon">
                                <path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57.12.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            456-4279 / 341 5614212
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="contact-icon">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            muebles@granatamobile.com.ar
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom-alt">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Granata Mobile. Todos los derechos reservados.</p>
                </div>
            </div>

            {/* Floating WhatsApp Bubble */}
            <a href="https://wa.me/543415614212" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.485l-.719 2.624 2.688-.706c.942.512 2.021.805 3.168.805 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766-.001 0-.001 0 0 0zm3.334 8.188c-.14.394-.714.717-1.006.772-.257.049-.59.073-.941-.039-.232-.074-.515-.172-1.142-.441-1.258-.54-2.128-1.751-2.227-1.889-.099-.138-.795-.911-.795-1.738 0-.828.435-1.234.589-1.393.154-.159.336-.2.449-.2h.323c.112 0 .262-.007.394.273.132.28 1.341 3.253 1.326 3.284-.015.03-.131.119-.247.245-.116.126-.234.21-.365.342-.116.117-.238.243-.103.468.135.225.597.985 1.282 1.597.882.787 1.628 1.03 1.861 1.139.232.109.366.091.503-.041.137-.132.586-.684.743-.918.157-.234.313-.195.528-.112.215.083 1.363.642 1.597.759.234.117.391.176.447.273.056.097.056.562-.084.957zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
            </a>
        </footer>
    );
};

export default Footer;
