import React from 'react';
import './PremiumQuality.css';

const differentials = [
    { title: 'Cero Aglomerado', desc: 'Utilizamos MDF de alta densidad.' },
    { title: 'Madera Maciza', desc: 'Estructura en madera natural.' },
    { title: 'Correderas Metálicas', desc: 'Guías telescópicas (Hafele, Blum).' },
    { title: 'Bisagras Soft-Close', desc: 'Cierre suave en todas las puertas.' },
];

const PremiumQuality: React.FC = () => {
    return (
        <section className="section premium-quality-compact" id="quality">
            <div className="quality-split-container">
                {/* Left Side: Content (Blue) */}
                <div className="quality-content-side">
                    <div className="quality-content-wrapper">
                        <div className="section-badge-white">01 | FILOSOFÍA</div>
                        <h2 className="premium-title">Diferenciales de Calidad</h2>
                        <p className="premium-subtitle">
                            Garantizamos durabilidad y resistencia en cada desarrollo.
                        </p>

                        <div className="differentials-list-split">
                            {differentials.map((item, index) => (
                                <div key={index} className="differential-item-split">
                                    <div className="check-circle">✓</div>
                                    <div className="differential-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Image (Full Bleed) */}
                <div className="quality-image-side">
                    <img
                        src="/quality_split_v100.png"
                        alt="Detalle de Calidad Arquitectónica"
                        className="quality-full-bleed-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default PremiumQuality;
