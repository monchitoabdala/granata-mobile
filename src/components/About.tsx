import React from 'react';
import './About.tsx'; // Placeholder, forgot this is tsx not css
import './About.css';

const About: React.FC = () => {
    return (
        <section className="section about-section" id="about">
            <div className="container about-container">
                <div className="about-header">
                    <span className="section-number">01</span>
                    <h2 className="section-title about-title">Nuestra Filosofía</h2>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <h3>Más que muebles, creamos experiencias habitables.</h3>
                        <p>
                            En <strong>GRANATA Mobile</strong>, creemos que cada rincón de tu hogar merece una atención excepcional.
                            Desde 1964, nos motiva la búsqueda de la perfección en el diseño y la durabilidad absoluta.
                        </p>
                        <div className="about-values">
                            <div className="value-item">
                                <strong>Diseño Consciente</strong>
                                <p>Proyectamos muebles que se adaptan a tu ritmo de vida, no al revés.</p>
                            </div>
                            <div className="value-item">
                                <strong>Herencia Artesanal</strong>
                                <p>Combinamos técnicas tradicionales con tecnología de punta.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card">
                            <h4>+12.000</h4>
                            <p>Proyectos Finalizados</p>
                        </div>
                        <div className="stat-card">
                            <h4>100%</h4>
                            <p>Mano de Obra Local</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-decor decoration-1"></div>
        </section>
    );
};

export default About;
