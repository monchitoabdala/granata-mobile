import Contact from '../components/Contact';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <main className="page-contact">
            <Contact />

            <section className="contact-faq">
                <div className="container">
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>¿Realizan presupuestos sin cargo?</h3>
                            <p>Sí, brindamos asesoramiento inicial y cotizaciones sin compromiso para que puedas planificar tu espacio.</p>
                        </div>
                        <div className="faq-item">
                            <h3>¿Dónde se encuentra el showroom?</h3>
                            <p>Te esperamos en nuestro Showroom de Av. Eva Perón 6932, Rosario, de Lunes a Viernes.</p>
                        </div>
                        <div className="faq-item">
                            <h3>¿Tienen garantía los muebles?</h3>
                            <p>Todos nuestros productos cuentan con garantía de fabricación, respaldando nuestra trayectoria de 60 años.</p>
                        </div>
                        <div className="faq-item">
                            <h3>¿Hacen envíos al interior?</h3>
                            <p>Coordinamos envíos y montajes en toda la región para asegurar que tu proyecto llegue impecable.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-map">
                <iframe
                    title="Ubicación Showroom Rosario"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.123456789!2d-60.718!3d-32.946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6534567890123%3A0x1234567890abcdef!2sAv.%20Eva%20Per%C3%B3n%206932%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </main>
    );
};

export default ContactPage;
