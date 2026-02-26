import React, { useState, useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import './ProjectsPage.css';


interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
}

const allProjects: Project[] = [
    { id: 1, title: 'Cocina Nórdica Premium', category: 'Cocinas', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000' },
    { id: 2, title: 'Vestidor de Autor - Suite', category: 'Placards & Vestidores', image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=2000' },
    { id: 3, title: 'Vanitory Minimalista', category: 'Baños', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000' },
    { id: 4, title: 'Cocina Industrial Tech', category: 'Cocinas', image: 'https://images.unsplash.com/photo-1556911220-e15224bbafb1?auto=format&fit=crop&q=80&w=2000' },
    { id: 5, title: 'Interiores de Placard Pro', category: 'Placards & Vestidores', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000' },
    { id: 6, title: 'Showroom Corporativo', category: 'Otros', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=2000' },
    { id: 7, title: 'Cocina Isla Central', category: 'Cocinas', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000' },
    { id: 8, title: 'Vanitory Flotante Madera', category: 'Baños', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=2000' },
    { id: 9, title: 'Mobiliario Living Modular', category: 'Otros', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=2000' },
    { id: 10, title: 'Cocina Monocromática', category: 'Cocinas', image: 'https://images.unsplash.com/photo-1556912177-3e586aaa4344?auto=format&fit=crop&q=80&w=2000' }
];

const categories = ['Todas', 'Cocinas', 'Baños', 'Placards & Vestidores', 'Otros'];

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState('Todas');
    const [filteredProjects, setFilteredProjects] = useState(allProjects);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (filter === 'Todas') {
            setFilteredProjects(allProjects);
        } else {
            setFilteredProjects(allProjects.filter(p => p.category === filter));
        }
    }, [filter]);

    return (
        <main className={`projects-page ${isLoaded ? 'fade-in' : ''}`}>

            <section className="projects-filter-section-v51">
                <div className="container">
                    <div className="projects-filter-header">
                        <h2>Explorá nuestra Colección</h2>
                        <p>Navegá por categoría para encontrar inspiración en nuestros trabajos recientes.</p>
                    </div>
                    <div className="filter-bar-v51">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn-v51 ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FULL BLEED GALLERY (100% Width) */}
            <section className="projects-full-gallery">
                <div className="masonry-gallery-full">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="masonry-item-full fade-up">
                            <div className="masonry-image-wrapper-full">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="masonry-overlay-full">
                                    <div className="masonry-info-full">
                                        <span className="masonry-category-full">{project.category}</span>
                                        <h3 className="masonry-title-full">{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SOCIAL PROOF: REVIEWS */}
            <Testimonials />

            {/* ACCORDION FAQ SECTION */}
            <section className="projects-faq-section">
                <div className="container">
                    <div className="faq-header-v52">
                        <span className="faq-badge">PROCESO Y PREGUNTAS</span>
                        <h2>Resolvé tus dudas</h2>
                    </div>

                    <div className="faq-grid-v52">
                        <div className="faq-card-v52">
                            <h3>¿Cuánto tiempo demora la fabricación?</h3>
                            <p>El tiempo estimado depende de la complejidad del proyecto, pero generalmente oscila entre 35 y 45 días desde la aprobación del diseño técnico final.</p>
                        </div>
                        <div className="faq-card-v52">
                            <h3>¿Realizan mediciones a domicilio?</h3>
                            <p>Sí, nuestro equipo técnico visita tu hogar para tomar medidas exactas y verificar niveles, asegurando un encastre perfecto del mobiliario.</p>
                        </div>
                        <div className="faq-card-v52">
                            <h3>¿Qué materiales recomiendan para cocinas?</h3>
                            <p>Trabajamos con materiales de alta resistencia a la humedad, como melaminas sobre MDF, cantos de PVC de 2mm y herrajes con freno de primera línea.</p>
                        </div>
                        <div className="faq-card-v52">
                            <h3>¿Tienen planes de financiación?</h3>
                            <p>Contamos con diversas opciones de pago y planes de cuotas. Consultá con nuestro equipo de ventas para conocer las promociones vigentes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                title={
                    <>Inspiración para su hogar. <br /> <strong>Hablemos de su próximo proyecto.</strong></>
                }
            />
        </main>
    );
};

export default ProjectsPage;
