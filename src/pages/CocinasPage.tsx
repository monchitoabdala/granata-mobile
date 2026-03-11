import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';
import PremiumQuality from '../components/PremiumQuality';
import '../styles/ServicePage.css';

const CocinasPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Islas Funcionales",
            desc: "Diseñamos islas que integran zona de cocción, bacha y desayunador, optimizando la circulación.",
            icon: "fas fa-utensils"
        },
        {
            title: "Mesadas de Piedra",
            desc: "Trabajamos con Silestone, Dekton y Purastone para superficies de alta resistencia y belleza.",
            icon: "fas fa-gem"
        },
        {
            title: "Herrajes Europeos",
            desc: "Sistemas de apertura Blum y Hafele con garantía de por vida en suavidad de movimiento.",
            icon: "fas fa-cogs"
        },
        {
            title: "Diseño Ergonómico",
            desc: "Cada módulo se diseña pensando en la altura y necesidades del usuario para evitar esfuerzos.",
            icon: "fas fa-user-check"
        }
    ];

    const galleryImages = [
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/MODELOS/MILENIUM/af34cc0c-3db2-4155-bfb8-814d4ff89e3b.jpg", alt: "Cocina Milenium Blanca", size: "large" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250127-WA0071.jpg", alt: "Render Cocina Moderna" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/MODELOS/MILENIUM/F7A382A8-1AE0-49C3-B44C-CBDA05C293F7.JPEG", alt: "Detalle de alacenas" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250128-WA0046.jpg", alt: "Isla desayunador" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/MODELOS/ALPINE/ANGEL 010.jpg", alt: "Cocina Alpine Madera" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20240722-WA0227.jpg", alt: "Proyecto integral" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/MODELOS/MILENIUM/IMG_3132.HEIC", alt: "Iluminación bajo mesada" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250314-WA0060.jpg", alt: "Detalle de herrajes" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/MODELOS/MILENIUM/IMG_3267.HEIC", alt: "Cocina terminada" }
    ];

    return (
        <main className="service-page">
            <PageHero
                title="Cocinas de Autor"
                subtitle="El corazón de tu hogar merece un diseño excepcional. Creamos cocinas donde la funcionalidad se encuentra con el diseño de vanguardia."
            />

            <section className="intro-section">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-image-container">
                            <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/MODELOS/MILENIUM/F7A382A8-1AE0-49C3-B44C-CBDA05C293F7.JPEG" alt="Cocina Premium Granata" />
                        </div>
                        <div className="intro-content">
                            <h2>Innovación en cada detalle culinario</h2>
                            <p>
                                En Granata, entendemos la cocina como un espacio de encuentro y creación. Nuestros diseños combinan la calidez de los materiales nobles con la precisión de la tecnología europea, logrando ambientes que son tan placenteros de ver como de usar.
                            </p>
                            <div className="features-mini-grid">
                                {features.map((f, i) => (
                                    <div key={i} className="mini-feature">
                                        <i className={f.icon}></i>
                                        <div>
                                            <h4>{f.title}</h4>
                                            <p>{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PremiumQuality />

            <section className="gallery-section">
                <div className="container">
                    <div className="section-header-v51">
                        <h2>Nuestras últimas cocinas</h2>
                    </div>
                    <div className="gallery-grid">
                        {galleryImages.map((img, index) => (
                            <div key={index} className={`gallery-item ${img.size || ''}`}>
                                <img src={img.src} alt={img.alt} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Process />
            <Testimonials />
            <FinalCTA />
        </main>
    );
};

export default CocinasPage;
