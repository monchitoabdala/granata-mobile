import React from 'react';
import './Authority.css';

const Authority: React.FC = () => {
    return (
        <section className="section authority-section" id="authority">
            <div className="container">
                <div className="authority-card">
                    <div className="authority-grid">
                        <div className="authority-item">
                            <div className="authority-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="authority-icon">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div className="authority-content">
                                <h3 className="authority-title">Casi 50 Años de Trayectoria</h3>
                                <p className="authority-desc">Desde 1977, diseñamos y fabricamos mobiliario de alta gama fusionando tradición artesanal con tecnología europea.</p>
                            </div>
                        </div>
                        <div className="authority-item">
                            <div className="authority-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="authority-icon">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <div className="authority-content">
                                <h3 className="authority-title">Fabricación Propia</h3>
                                <p className="authority-desc">Control integral en nuestra planta de 2.000m² para garantizar precisión milimétrica en cada pieza.</p>
                            </div>
                        </div>
                        <div className="authority-item">
                            <div className="authority-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="authority-icon">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <div className="authority-content">
                                <h3 className="authority-title">Garantía de Calidad</h3>
                                <p className="authority-desc">Utilizamos herrajes internacionales y maderas seleccionadas que aseguran una vida útil sin límites.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authority;
