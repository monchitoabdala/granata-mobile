import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import FinalCTA from '../components/FinalCTA';
import './AboutPage.css';

const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const timelineEvents = [
        {
            year: '1960',
            title: 'Felipe Granata: El Origen',
            description: 'Inmigrante italiano, Felipe fundó la empresa tras trabajar en aberturas de madera, identificando la demanda de amoblamientos a medida en Argentina.',
            image: '/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/CamScanner 15-09-2024 21.21_01.jpg'
        },
        {
            year: '1984',
            title: 'Gabriel Granata: Crecimiento',
            description: 'El 11 de agosto, Gabriel asume la dirección, impulsando la tecnificación y consolidación de la marca en el mercado regional.',
            image: '/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/IMG-20240914-WA0014.jpg'
        },
        {
            year: 'Hoy',
            title: 'Tercera Generación: Futuro',
            description: 'Sus hijos lideran el desarrollo actual, integrando innovación y diseño contemporáneo sin perder la esencia familiar y el trato cercano.',
            image: '/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/file_000000006a50720ead50277b680b4f01.png'
        }
    ];

    return (
        <div className="about-page">
            <PageHero
                title="Nuestra Historia"
                subtitle="66 años de trayectoria combinando diseño personalizado, asesoramiento profesional y ejecución artesanal."
            />

            <section className="about-timeline-section">
                <div className="container">
                    <div className="timeline-container">
                        {timelineEvents.map((event, index) => (
                            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-content">
                                    <div className="timeline-image">
                                        <img src={event.image} alt={event.title} />
                                    </div>
                                    <div className="timeline-text">
                                        <span className="timeline-year">{event.year}</span>
                                        <h3>{event.title}</h3>
                                        <p>{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header-v51">
                        <h2>Nuestros Valores</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon"><i className="fas fa-hammer"></i></div>
                            <h3>Trabajo artesanal</h3>
                            <p>Cuidando cada detalle y terminación como si fuera único, fusionando la nobleza de los materiales con la precisión técnica.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon"><i className="fas fa-users"></i></div>
                            <h3>Compromiso familiar</h3>
                            <p>Tres generaciones respaldan nuestro nombre. Cada proyecto lo tomamos como propio, desde el primer boceto hasta la entrega final.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon"><i className="fas fa-handshake"></i></div>
                            <h3>Transparencia</h3>
                            <p>Presupuestos claros, plazos reales y comunicación constante para que el proceso de creación de su espacio sea disfrutable y seguro.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon"><i className="fas fa-gem"></i></div>
                            <h3>Calidad sin concesiones</h3>
                            <p>Utilizamos los mejores herrajes y placas del mercado. Si no cumple con nuestros estándares, no sale de nuestra fábrica.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Factory & Showroom Section */}
            <section className="factory-showroom-section">
                <div className="container">
                    <div className="factory-grid">
                        <div className="factory-image-block">
                            <div className="image-stack">
                                <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/IMG-20240914-WA0018.jpg" alt="Fábrica propia" className="img-main" />
                                <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/IMG-20240914-WA0015.jpg" alt="Detalle producción" className="img-sub" />
                            </div>
                        </div>
                        <div className="factory-text-block">
                            <h2>Fábrica propia y Showroom en Rosario</h2>
                            <p>
                                Con base en la ciudad de Rosario, contamos con <strong>fábrica propia y un local de exposición</strong> donde permitimos al cliente conocer nuestros materiales, terminaciones y modelos.
                            </p>
                            <p>
                                Nuestra infraestructura nos permite tener un control total sobre el proceso, desde la selección de las placas hasta el lustre final, garantizando que cada pieza cumpla con los estándares de GRANATA Mobile.
                            </p>
                            <div className="factory-feats">
                                <div className="feat-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Atención personalizada</span>
                                </div>
                                <div className="feat-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Control de procesos</span>
                                </div>
                                <div className="feat-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Tecnología aplicada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Section (Reversed Factory Style) */}
            <section className="factory-showroom-section">
                <div className="container">
                    <div className="factory-grid reverse">
                        <div className="factory-image-block">
                            <div className="image-stack">
                                <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/IMG-20240914-WA0019.jpg" alt="Alta Gama producción" className="img-main" />
                                <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/IMG-20240914-WA0017.jpg" alt="Detalle terminación real" className="img-sub" />
                            </div>
                        </div>
                        <div className="factory-text-block">
                            <h2>Calidad Garantizada</h2>
                            <p>
                                La combinación de experiencia, tecnología y mano de obra especializada nos permite ofrecer soluciones funcionales, estéticas y duraderas.
                            </p>
                            <p>
                                Adaptamos cada diseño a las necesidades de cada espacio y cada persona, buscando la excelencia en cada encastre y terminación.
                            </p>
                            <div className="factory-feats">
                                <div className="feat-item">
                                    <i className="fas fa-gem"></i>
                                    <span>Herrajes Internacionales</span>
                                </div>
                                <div className="feat-item">
                                    <i className="fas fa-layer-group"></i>
                                    <span>Materiales Premium</span>
                                </div>
                                <div className="feat-item">
                                    <i className="fas fa-award"></i>
                                    <span>Satisfacción Postventa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <FinalCTA />
        </div>
    );
};

export default AboutPage;
