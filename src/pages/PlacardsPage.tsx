import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';
import PremiumQuality from '../components/PremiumQuality';
import '../styles/ServicePage.css';

const PlacardsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Interiores a Medida",
            desc: "Diseñamos cada estante, cajón y barral según tus hábitos de guardado y prendas específicas.",
            icon: "fas fa-th-large"
        },
        {
            title: "Herrajes Premium",
            desc: "Sistemas de extracción total, pantógrafos y guías con freno de marcas líderes mundiales.",
            icon: "fas fa-sliders-h"
        },
        {
            title: "Iluminación Integrada",
            desc: "Sistemas LED automatizados con sensores de presencia para una visibilidad perfecta.",
            icon: "fas fa-lightbulb"
        },
        {
            title: "Puertas con Freno",
            desc: "Sistemas corredizos de aluminio con amortiguación para un cierre suave y silencioso.",
            icon: "fas fa-door-open"
        }
    ];

    const galleryImages = [
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/PLACARES Y VESTIDORES/IMG_4378.JPG", alt: "Vestidor detalle", size: "large" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/PLACARES Y VESTIDORES/IMG_4395.JPG", alt: "Interior de diseño" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250330-WA0033.jpg", alt: "Render vestidor moderno" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250330-WA0021.jpg", alt: "Iluminación en placard" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250330-WA0034.jpg", alt: "Distribución inteligente" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250330-WA0036.jpg", alt: "Acabados premium" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250330-WA0033.jpg", alt: "Puertas placard" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/PLACARES Y VESTIDORES/IMG_4378.JPG", alt: "Detalle herrajes" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/PLACARES Y VESTIDORES/IMG_4395.JPG", alt: "Vestidor completo" }
    ];

    return (
        <main className="service-page">
            <PageHero
                title="Placares & Vestidores"
                subtitle="El arte de organizar tu vida con elegancia. Espacios diseñados para que cada prenda tenga su lugar perfecto."
            />

            <section className="intro-section">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-image-container">
                            <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/PLACARES Y VESTIDORES/IMG_4378.JPG" alt="Vestidor Premium Granata" />
                        </div>
                        <div className="intro-content">
                            <h2>Mucho más que un espacio de guardado</h2>
                            <p>
                                Creemos que el orden es el principio del bienestar. Por eso, nuestros vestidores y placards no son solo muebles, son soluciones de ingeniería aplicadas al confort diario.
                                Combinamos maderas seleccionadas, texturas exclusivas y la mejor tecnología en herrajes para crear espacios que inspiran.
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
                        <h2>Inspiración para tu habitación</h2>
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

export default PlacardsPage;
