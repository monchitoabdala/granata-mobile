import React from 'react';
import './FinalCTA.css';

interface FinalCTAProps {
    title?: React.ReactNode;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ title }) => {
    return (
        <section className="section final-cta" id="contact">
            <div className="cta-watermark">EST. 1964</div>
            <div className="cta-pattern"></div>
            <div className="container">
                <div className="cta-flex">
                    <div className="cta-content-left">
                        <h2 className="cta-title-alt">
                            {title || (
                                <>Su espacio soñado está <br /> <strong>a un mensaje de distancia.</strong></>
                            )}
                        </h2>
                    </div>
                    <div className="cta-actions-right">
                        <a href="https://wa.me/yournumber" className="btn btn-whatsapp-premium">
                            <span className="btn-blur-bg"></span>
                            <svg className="wa-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Consultar por WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
