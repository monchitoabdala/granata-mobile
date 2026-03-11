import React from 'react';
import './Services.css';

const services = [
    {
        id: 1,
        title: 'Cocinas de Autor',
        description: 'Líneas Alpine, Milenium y Brillare. Diseños que combinan funcionalidad extrema con estética de vanguardia en el corazón del hogar.',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=2000'
    },
    {
        id: 2,
        title: 'Placares y Vestidores',
        description: 'Sistemas milimétricos de guardado. Maximizamos tu espacio con herrajes inteligentes y acabados de lujo personalizados.',
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=2000'
    },
    {
        id: 3,
        title: 'Vanities y Baños',
        description: 'Mobiliario de alta resistencia para ambientes húmedos. Diseño contemporáneo y materiales seleccionados para el bienestar diario.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000'
    },
    {
        id: 4,
        title: 'Colección Hogar',
        description: 'Mobiliario para living, comedores y espacios integrados. Piezas únicas que definen el carácter de tu vivienda moderna.',
        image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=2000'
    }
];

const Services: React.FC = () => {
    return (
        <section className="section services-section" id="services">
            <div className="container">
                <div className="services-header-alt">
                    <div className="services-header-left">
                        <h2 className="services-main-title">Soluciones de Autor</h2>
                        <p className="services-main-desc">
                            Fabricación integral con tecnología de punta y procesos artesanales. Mobiliario diseñado para durar.
                        </p>
                    </div>
                    <div className="services-nav-alt">
                        <button className="nav-btn-alt prev">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" />
                            </svg>
                        </button>
                        <button className="nav-btn-alt next">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="services-grid-alt">
                    {services.map((service) => (
                        <div key={service.id} className="service-card-alt">
                            <div className="service-image-bg" style={{ backgroundImage: `url(${service.image})` }}></div>
                            <div className="service-card-overlay"></div>
                            <div className="service-card-content-alt">
                                <h3 className="service-card-title-alt">{service.title}</h3>
                                <p className="service-card-desc-alt">{service.description}</p>
                                <a href="#contact" className="service-card-link-alt">
                                    SOLICITAR COTIZACIÓN
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="link-arrow-alt">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
