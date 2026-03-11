import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';
import PremiumQuality from '../components/PremiumQuality';
import '../styles/ServicePage.css';

const HogarPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Living & TV Units",
            desc: "Paneles y racks de TV con gestión oculta de cables y diseño minimalista.",
            icon: "fas fa-tv"
        },
        {
            title: "Home Office",
            desc: "Escritorios y bibliotecas pensadas para la productividad y el confort en casa.",
            icon: "fas fa-laptop-house"
        },
        {
            title: "Mobiliario Social",
            desc: "Mesas de comedor y vajilleros que se convierten en protagonistas de tus reuniones.",
            icon: "fas fa-couch"
        },
        {
            title: "Texturas Exclusivas",
            desc: "Combinación de maderas macizas, vidrios y metales para piezas únicas.",
            icon: "fas fa-fingerprint"
        }
    ];

    const galleryImages = [
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/COLECCIÓN HOGAR/IMG_20200519_181903_161.jpg", alt: "Rack TV Moderno", size: "large" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/COLECCIÓN HOGAR/4a5b392b-e623-4b1a-ae0e-9fa82217f059.jpg", alt: "Biblioteca a medida" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/COLECCIÓN HOGAR/IMG_20200622_201750_028.jpg", alt: "Mueble de living" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/COLECCIÓN HOGAR/fdbe200f-b021-496b-b93e-763cd9410a90.jpg", alt: "Escritorio Home Office" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/COLECCIÓN HOGAR/IMG_20200708_181437_349.jpg", alt: "Vajillero de diseño" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/COLECCIÓN HOGAR/IMG_20180616_212723336.jpg", alt: "Detalle mueble social" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/COLECCIÓN HOGAR/IMG_20200519_181903_161.jpg", alt: "Mesa de comedor" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/COLECCIÓN HOGAR/fdbe200f-b021-496b-b93e-763cd9410a90.jpg", alt: "Dormitorio integral" },
        { src: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/COLECCIÓN HOGAR/IMG_20150929_155626781.jpg", alt: "Detalle carpintería" }
    ];

    return (
        <main className="service-page">
            <PageHero
                title="Colección Hogar"
                subtitle="Equipamiento integral para cada rincón de tu casa. Mobiliario social y privado diseñado con el sello de calidad Granata."
            />

            <section className="intro-section">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-image-container">
                            <img src="/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/PRODUCTOS/COLECCIÓN HOGAR/fdbe200f-b021-496b-b93e-763cd9410a90(1).jpg" alt="Living Premium Granata" />
                        </div>
                        <div className="intro-content">
                            <h2>Mobiliario que define tu estilo de vida</h2>
                            <p>
                                Nuestra Colección Hogar abarca desde el living hasta el estudio, ofreciendo soluciones a medida que unifican el lenguaje arquitectónico de tu casa. Cada pieza es fabricada con la misma rigurosidad técnica que nuestras cocinas, asegurando coherencia estética y durabilidad en todo tu hogar.
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
                        <h2>Espacios que habitamos</h2>
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

export default HogarPage;
