import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';
import PremiumQuality from '../components/PremiumQuality';
import '../styles/ServicePage.css';

const BanosPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Resistencia a Humedad",
            desc: "Maderas tratadas y laqueados de alta resistencia para ambientes húmedos.",
            icon: "fas fa-tint-slash"
        },
        {
            title: "Mesadas Integradas",
            desc: "Bachas de mármol, granito o Corian integradas sin juntas para mayor higiene.",
            icon: "fas fa-sink"
        },
        {
            title: "Espejos con LED",
            desc: "Iluminación perimetral o retroiluminada para un ambiente funcional y de relax.",
            icon: "fas fa-magic"
        },
        {
            title: "Organización Inteligente",
            desc: "Separadores internos en cajones para que cada elemento de aseo tenga su lugar.",
            icon: "fas fa-boxes"
        }
    ];

    const galleryImages = [
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/BAÑOS/IMG_3837.JPG", alt: "Vanity Moderno", size: "large" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/BAÑOS/IMG_3837.JPG", alt: "Baño Premium" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250624-WA0062.jpg", alt: "Detalle de mesada" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250624-WA0062.jpg", alt: "Render Baño Minimalista" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250624-WA0065.jpg", alt: "Vanity en madera" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250624-WA0065.jpg", alt: "Proyecto Baño" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/BAÑOS/IMG_3837.JPG", alt: "Detalle herrajes baño" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250624-WA0059.jpg", alt: "Vista cenital render" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/BAÑOS/IMG_3837.JPG", alt: "Baño completo" }
    ];

    return (
        <main className="service-page">
            <PageHero
                title="Vanities & Baños"
                subtitle="Convertimos tu baño en un spa privado. Mobiliario diseñado para resistir el paso del tiempo con la máxima sofisticación."
            />

            <section className="intro-section">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-image-container">
                            <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250624-WA0062.jpg" alt="Vanity Premium Granata" />
                        </div>
                        <div className="intro-content">
                            <h2>Sofisticación en ambientes húmedos</h2>
                            <p>
                                El baño ha dejado de ser un ambiente puramente funcional para convertirse en un refugio personal. Nuestros vanities y muebles auxiliares se enfocan en la materialidad y la resistencia, utilizando procesos de laqueado y maderas seleccionadas que garantizan durabilidad inigualable.
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
                        <h2>Inspiración para tu baño</h2>
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

export default BanosPage;
