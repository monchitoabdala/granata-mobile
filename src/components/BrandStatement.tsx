import React from 'react';
import './BrandStatement.css';

const BrandStatement: React.FC = () => {
    return (
        <section className="brand-statement-section" id="intro">
            <div className="container">
                <div className="statement-grid">
                    <div className="statement-line"></div>
                    <div className="statement-content">
                        <h2 className="statement-text">
                            Transformamos espacios comunes en
                            <span className="text-highlight"> escenarios extraordinarios</span>
                            donde la calidad constructiva se encuentra con el diseño de vanguardia.
                        </h2>
                        <div className="statement-footer">
                            <span className="statement-tag">Est. 1964</span>
                            <p className="statement-subtext">
                                Sesenta años perfeccionando el arte del mobiliario a medida,
                                garantizando piezas que trascienden generaciones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStatement;
