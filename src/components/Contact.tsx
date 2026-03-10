import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        tipoProyecto: 'Cocina',
        mensaje: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Gracias por tu mensaje. Nos contactaremos pronto.');
    };

    return (
        <section className="contact-section-v4" id="contact">
            <div className="container">
                {/* Level 1: Content + Form (Now Hero) */}
                <div className="contact-main-content">
                    <div className="contact-value-block">
                        <span className="value-badge">MUEBLES DE AUTOR</span>
                        <h2 className="value-title">Transformamos maderas en sueños desde 1964</h2>
                        <p className="value-text">
                            En GRANATA Mobile no solo fabricamos muebles; creamos el escenario de tu vida cotidiana.
                            Nuestra planta propia nos permite controlar cada detalle de calidad.
                        </p>

                        <ul className="value-list">
                            <li>
                                <strong>60 Años de Trayectoria:</strong> Experiencia comprobada en el mercado.
                            </li>
                            <li>
                                <strong>Diseño Funcional:</strong> Aprovechamiento inteligente de cada centímetro.
                            </li>
                            <li>
                                <strong>Materiales Premium:</strong> Herrajes y acabados de primera línea internacional.
                            </li>
                            <li>
                                <strong>Garantía Real:</strong> Respaldo total post-venta en cada instalación.
                            </li>
                        </ul>

                        <div className="value-image-preview">
                            {/* Decorative architectural sketch or abstract furniture line */}
                            <div className="sketch-line"></div>
                            <span>Rosario, Argentina</span>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="form-enriched">
                            <div className="form-section-title">Iniciá tu presupuesto</div>

                            <div className="form-grid">
                                <div className="field-group">
                                    <label>Nombre completo</label>
                                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                                </div>
                                <div className="field-group">
                                    <label>Teléfono</label>
                                    <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="field-group">
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>

                            <div className="field-group">
                                <label>¿Qué ambiente querés renovar?</label>
                                <div className="select-wrapper-v4">
                                    <select
                                        name="tipoProyecto"
                                        value={formData.tipoProyecto}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Cocina">Mobiliario de Cocina</option>
                                        <option value="Vestidor">Vestidores Modernos</option>
                                        <option value="Placard">Placards & Interiores</option>
                                        <option value="Baño">Vanitorys & Baños</option>
                                        <option value="Otro">Otros Proyectos</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field-group">
                                <label>Contanos tu idea</label>
                                <textarea name="mensaje" rows={4} value={formData.mensaje} onChange={handleChange} placeholder="Ej: Medidas aproximadas o estilo preferido..." required></textarea>
                            </div>

                            <button type="submit" className="submit-btn-enriched">
                                ENVIAR CONSULTA
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Level 2: Quick Access Cards (Now Below) */}
                <div className="contact-cards-grid">
                    <div className="contact-card">
                        <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <h3>Visitanos</h3>
                        <p>Showroom: Av. Eva Perón 6932<br />Fábrica: Ramírez 5831<br />Rosario, Santa Fe</p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="card-link">Ver en mapa</a>
                    </div>

                    <div className="contact-card">
                        <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                        </div>
                        <h3>WhatsApp</h3>
                        <p>Asesoramiento inmediato<br />por nuestros técnicos</p>
                        <a href="https://wa.me/543415614212" target="_blank" rel="noopener noreferrer" className="card-link">341 5614212 / 341 6461952</a>
                    </div>

                    <div className="contact-card">
                        <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <h3>Escribinos</h3>
                        <p>muebles@granatamobile<br />.com.ar</p>
                        <a href="mailto:muebles@granatamobile.com.ar" className="card-link">Enviar correo</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
