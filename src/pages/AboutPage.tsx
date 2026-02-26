import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
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

            {/* Visual Timeline Section */}
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
                            <span className="badge-v51">CAPACIDAD PRODUCTIVA</span>
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

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header-v51">
                        <span className="badge-v51">LO QUE NOS MUEVE</span>
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

            {/* Why Choose Us & Team Section */}
            <section className="why-us-team-section">
                <div className="container">
                    <div className="why-team-grid">

                        {/* Why Choose Us Block */}
                        <div className="why-us-block">
                            <span className="badge-v51">RESPALDO</span>
                            <h2>Por Qué Elegirnos</h2>
                            <ul className="why-us-list">
                                <li>
                                    <div className="why-icon"><i className="far fa-star"></i></div>
                                    <div className="why-text">
                                        <h4>66 años de trayectoria comprobada</h4>
                                        <p>Experiencia real resolviendo todo tipo de proyectos y adaptándonos a las nuevas tendencias y necesidades del mercado.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-icon"><i className="fas fa-industry"></i></div>
                                    <div className="why-text">
                                        <h4>Fábrica propia en Rosario</h4>
                                        <p>Sin intermediarios. Controlamos el proceso completo de producción garantizando calidad y respuesta rápida.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-icon"><i className="fas fa-tools"></i></div>
                                    <div className="why-text">
                                        <h4>Instalación con equipo propio</h4>
                                        <p>No tercerizamos. Nuestros propios carpinteros, que conocen el mueble desde su armado, realizan el montaje en su hogar.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-icon"><i className="fas fa-headset"></i></div>
                                    <div className="why-text">
                                        <h4>Servicio postventa</h4>
                                        <p>Nuestra relación no termina con la instalación. Respondemos rápidamente ante cualquier necesidad futura de ajuste o mantenimiento.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Team Photos Block */}
                        <div className="team-photos-block">
                            <div className="team-main-photo">
                                <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/IMG-20240914-WA0016.jpg" alt="Equipo de fábrica trabajando" />
                            </div>
                            <div className="team-sub-photos">
                                <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/IMG-20240914-WA0019.jpg" alt="Detalle de instalación" />
                                <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes GRANATA Mobile/WhatsApp Image 2024-09-19 at 13.27.58.jpeg" alt="Detalle de taller 1" />
                                <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes GRANATA Mobile/WhatsApp Image 2024-09-19 at 13.28.04.jpeg" alt="Detalle de taller 2" />
                            </div>
                            <div className="team-sub-photos">
                                <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes GRANATA Mobile/WhatsApp Image 2024-09-19 at 13.28.22.jpeg" alt="Detalle de taller 3" />
                                <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes GRANATA Mobile/WhatsApp Image 2024-09-19 at 13.28.33.jpeg" alt="Detalle de taller 4" />
                                <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/WhatsApp Image 2024-09-15 at 13.47.51.jpeg" alt="Detalle de taller 5" />
                            </div>
                            <div className="team-caption">
                                <p><strong>Manos expertas, dedicación total.</strong> Nuestro equipo de carpinteros dando forma a sus proyectos en nuestra planta.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Philosophy & Quality Section */}
            <section className="philosophy-quality-section">
                <div className="container">
                    <div className="philosophy-grid">
                        <div className="philosophy-card">
                            <h3>Quiénes Somos</h3>
                            <p>
                                Somos una empresa que se dedica al desarrollo integral de proyectos de amoblamiento a medida, acompañando a cada cliente desde la idea inicial hasta la instalación final.
                            </p>
                            <p>
                                Nos caracteriza el trato cercano y el compromiso con cada proyecto, priorizando la innovación y la confianza construida a lo largo del tiempo.
                            </p>
                        </div>
                        <div className="philosophy-card">
                            <h3>Calidad Garantizada</h3>
                            <p>
                                La combinación de experiencia, tecnología y mano de obra especializada nos permite ofrecer soluciones funcionales, estéticas y duraderas.
                            </p>
                            <p>
                                Adaptamos cada diseño a las necesidades de cada espacio y cada persona, buscando la excelencia en cada encastre y terminación.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA Section */}
            <section className="about-closing-section">
                <div className="container">
                    <div className="closing-content">
                        <h2>Trabaja con nosotros</h2>
                        <p>“Más que muebles, construimos espacios que acompañan su vida.”</p>
                        <a href="/contacto" className="btn-primary" style={{ marginTop: '30px' }}>Contactanos ahora</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
