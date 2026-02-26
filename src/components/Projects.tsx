import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import p1 from '../assets/Portfolio GRANATA Mobile/Imágenes Portfolio/1.png';
import p2 from '../assets/Portfolio GRANATA Mobile/Imágenes Portfolio/2.png';
import p3 from '../assets/Portfolio GRANATA Mobile/Imágenes Portfolio/3.png';
import p4 from '../assets/Portfolio GRANATA Mobile/Imágenes Portfolio/4.png';
import p5 from '../assets/Portfolio GRANATA Mobile/Imágenes Portfolio/5.png';
import p6 from '../assets/Portfolio GRANATA Mobile/Imágenes Portfolio/6.png';

const projects = [
    {
        id: 1,
        number: '01',
        title: 'Cocinas de Autor',
        category: 'Residencial Premium',
        image: p1
    },
    {
        id: 2,
        number: '02',
        title: 'Sistemas de Guardado',
        category: 'Arquitectura Interior',
        image: p2
    },
    {
        id: 3,
        number: '03',
        title: 'Mobiliario Minimalista',
        category: 'Diseño Personalizado',
        image: p3
    },
    {
        id: 4,
        number: '04',
        title: 'Espacios Integrados',
        category: 'Vivienda Moderna',
        image: p4
    },
    {
        id: 5,
        number: '05',
        title: 'Detalles en Madera',
        category: 'Procesos Artesanales',
        image: p5
    },
    {
        id: 6,
        number: '06',
        title: 'Vestidores Pro',
        category: 'Alto Standing',
        image: p6
    }
];

const Projects: React.FC = () => {
    return (
        <section className="section gallery-section" id="projects">
            <div className="container">
                <div className="gallery-header-centered">
                    <div className="gallery-badge-centered">
                        <span className="badge-dot"></span>
                        PROYECTOS RECIENTES
                    </div>
                    <h2 className="gallery-main-title">Galería de Autor</h2>
                    <p className="gallery-main-desc-centered">
                        Una mirada cercana a nuestras últimas ejecuciones. Fotografía pura, diseño honesto y ejecución impecable.
                    </p>
                </div>

                <div className="gallery-masonry">
                    {projects.map((project) => (
                        <div key={project.id} className="gallery-item">
                            <div className="gallery-image-wrapper">
                                <img src={project.image} alt={project.title} className="gallery-img" />
                                <div className="gallery-item-number">{project.number}</div>
                            </div>
                            <div className="gallery-item-info-centered">
                                <span className="gallery-item-category">{project.category}</span>
                                <h3 className="gallery-item-title">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery-footer-cta">
                    <Link to="/proyectos" className="portfolio-main-cta">
                        VER TODO EL PORTFOLIO
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="cta-arrow">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
