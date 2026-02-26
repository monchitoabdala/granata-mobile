import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: 'Carolina M.',
        text: 'Entendieron perfectamente lo que buscábamos. La calidad de los materiales es increíble y el equipo de instalación fue super profesional.',
        project: 'Cocina Residencial',
        stars: 5
    },
    {
        id: 2,
        name: 'Arq. Gustavo L.',
        text: 'Como arquitecto, valoro la precisión y el cumplimiento de los plazos. GRANATA es un aliado estratégico en mis obras.',
        project: 'Oficinas Corporativas',
        stars: 5
    },
    {
        id: 3,
        name: 'Mariana S.',
        text: 'Mi vestidor quedó soñado. Cada detalle fue pensado para aprovechar el espacio al máximo. Super recomendables.',
        project: 'Vestidor a Medida',
        stars: 5
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="section testimonials-section" id="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <h2 className="section-title">Lo que dicen nuestros clientes</h2>
                    <div className="testimonials-rating-summary">
                        <span className="stars-row">★★★★★</span>
                        <span className="rating-desc">Excelencia Garantizada</span>
                    </div>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <div className="quote-icon">“</div>
                            <div className="card-stars">{'★'.repeat(item.stars)}</div>
                            <p className="testimonial-text">{item.text}</p>
                            <div className="testimonial-author">
                                <strong>{item.name}</strong>
                                <span>{item.project}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
