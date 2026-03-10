import React, { useEffect, useState } from 'react';
import FinalCTA from '../components/FinalCTA';
import './HowWeWorkPage.css';

const HowWeWorkPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [sliderPos, setSliderPos] = useState(50);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPos(Number(e.target.value));
    };

    const steps = [
        {
            number: "01",
            title: "Toma de medidas a domicilio",
            description: "Nuestro equipo visita su hogar para realizar un relevamiento técnico milimétrico. Medimos cada rincón, registramos las particularidades del espacio y evaluamos las condiciones de instalación. Este paso es fundamental para garantizar que cada pieza encaje perfectamente en su lugar.",
            icon: "fas fa-ruler-combined",
            image: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250330-WA0017.jpg"
        },
        {
            number: "02",
            title: "Visualización de diseño en 3D",
            description: "Transformamos sus ideas en renders fotorealistas que le permiten recorrer virtualmente su futuro espacio. Podrá elegir colores, materiales, herrajes y distribución antes de que comience la producción. Cada detalle se define en esta etapa para evitar sorpresas.",
            icon: "fas fa-cube",
            image: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/Gonzalez-Oliva_3.png.png"
        },
        {
            number: "03",
            title: "Fabricación a medida",
            description: "En nuestra fábrica propia en Rosario, cada mueble se produce con tecnología de vanguardia y mano de obra especializada. Controlamos el proceso completo: desde la selección de placas y herrajes internacionales hasta el lustre final, asegurando que cada pieza cumpla nuestros estándares.",
            icon: "fas fa-tools",
            image: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/IMG-20240914-WA0018.jpg"
        },
        {
            number: "04",
            title: "Coordinación en obra",
            description: "Nos integramos con arquitectos, diseñadores y constructores para asegurar que el amoblamiento se coordine perfectamente con los tiempos y las necesidades de la obra. Nuestro equipo técnico acompaña cada etapa del proyecto.",
            icon: "fas fa-project-diagram",
            image: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/IMG-20250330-WA0018.jpg"
        },
        {
            number: "05",
            title: "Entrega e instalación",
            description: "Nuestros propios carpinteros, que conocen cada mueble desde su armado, realizan el montaje en su hogar con precisión milimétrica. Contamos con flota propia para garantizar el cuidado absoluto durante el transporte y la instalación se realiza en una misma jornada.",
            icon: "fas fa-truck-loading",
            image: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/IMG-20240914-WA0015.jpg"
        },
        {
            number: "06",
            title: "Servicio de postventa",
            description: "Nuestra relación no termina con la instalación. Respondemos rápidamente ante cualquier necesidad futura de ajuste o mantenimiento. El respaldo GRANATA garantiza la excelencia de su amoblamiento a lo largo del tiempo.",
            icon: "fas fa-award",
            image: "/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/IMG-20240914-WA0019.jpg"
        }
    ];

    return (
        <div className="how-we-work-page">

            {/* Before/After Section */}
            <section className="before-after-section">
                <div className="container">
                    <div className="section-header-v51">
                        <span className="badge-v51">RENDER VS REALIDAD</span>
                        <h2>De la idea a la ejecución</h2>
                        <p className="section-desc">Utilizamos tecnología de diseño 3D para que pueda visualizar su espacio antes de fabricarlo.</p>
                    </div>

                    <div className="ba-container">
                        <div className="ba-wrapper">
                            <div className="ba-image ba-before" style={{ backgroundImage: 'url("/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/RENDERS/file_000000006a50720ead50277b680b4f01.png")' }}>
                                <div className="ba-label before">RENDER</div>
                            </div>
                            <div className="ba-image ba-after" style={{ backgroundImage: 'url("/src/assets/Portfolio GRANATA Mobile/Imágenes Página WEB/HISTORIA/FABRICA/IMG-20240914-WA0016.jpg")', clipPath: `inset(0 0 0 ${sliderPos}%)` }}>
                                <div className="ba-label after">REALIDAD</div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderPos}
                                onChange={handleSliderChange}
                                className="ba-slider"
                            />
                            <div className="ba-slider-line" style={{ left: `${sliderPos}%` }}>
                                <div className="ba-slider-button">
                                    <i className="fas fa-arrows-alt-h"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expanded Process Steps */}
            <section className="expanded-process">
                <div className="container">
                    <div className="section-header-v51">
                        <span className="badge-v51">METODOLOGÍA</span>
                        <h2>El Proceso Integral</h2>
                    </div>

                    <div className="expanded-steps">
                        {steps.map((step, index) => (
                            <div key={index} className={`exp-step ${index % 2 !== 0 ? 'reverse' : ''}`}>
                                <div className="exp-step-image">
                                    <img src={step.image} alt={step.title} />
                                </div>
                                <div className="exp-step-content">
                                    <div className="exp-step-meta">
                                        <span className="exp-step-num">{step.number}</span>
                                        <div className="exp-step-icon">
                                            <i className={step.icon}></i>
                                        </div>
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    );
};

export default HowWeWorkPage;
