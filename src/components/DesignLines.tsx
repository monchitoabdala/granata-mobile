import React from 'react';
import './DesignLines.css';

const DesignLines: React.FC = () => {
    const lines = [
        {
            id: 'milenium',
            name: 'MILENIUM',
            description: 'Melamina sobre MDF de 18 mm. Resistencia, durabilidad y una excelente terminación con gran variedad de colores y texturas.',
            tags: ['Versatilidad', 'MDF 18mm', 'Texturas']
        },
        {
            id: 'alpine',
            name: 'ALPINE',
            description: 'Terminación laqueada en poliuretano sobre MDF. Superficie lisa, uniforme y elegante para un diseño moderno y atemporal.',
            tags: ['Laqueado', 'Poliuretano', 'Premium']
        },
        {
            id: 'brillare',
            name: 'BRILLARE',
            description: 'Melamina brillante sobre MDF. Alto brillo y resistencia para un acabado contemporáneo de alto impacto visual.',
            tags: ['Alto Brillo', 'Impacto', 'Moderno']
        },
        {
            id: 'campo',
            name: 'CAMPO',
            description: 'Madera maciza y enchapada con molduras decorativas. Nobleza y tradición combinadas en un estilo clásico artesanal.',
            tags: ['Madera Maciza', 'Clásico', 'Artesanal']
        }
    ];

    return (
        <section className="design-lines" id="design-lines">
            <div className="container">
                <div className="lines-header">
                    <span className="section-badge">Nuestras Líneas</span>
                    <h2>Estéticas que definen tu espacio</h2>
                    <p>Desarrollamos distintos materiales y terminaciones pensadas para adaptarse a la personalidad de cada proyecto.</p>
                </div>

                <div className="lines-grid">
                    {lines.map((line) => (
                        <div key={line.id} className="line-card">
                            <div className="line-content">
                                <span className="line-id">{line.id}</span>
                                <h3>{line.name}</h3>
                                <div className="line-tags">
                                    {line.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                </div>
                                <p>{line.description}</p>
                                <a href={`/lineas/${line.id}`} className="line-link">
                                    Explorar Línea
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="arrow-icon">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignLines;
