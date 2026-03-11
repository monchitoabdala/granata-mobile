import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    Diseño y fabricación de <br />
                    muebles a medida
                </h1>
                <p className="hero-subtitle">
                    Transformamos espacios con materiales nobles y terminaciones de excelencia.
                    Más de 60 años creando hogares únicos.
                </p>
                <div className="hero-actions">
                    <a href="https://wa.me/1234567890" className="btn btn-primary">
                        Contactar por WhatsApp
                    </a>
                    <a href="#projects" className="btn btn-secondary hero-btn-secondary">
                        Ver Proyectos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
