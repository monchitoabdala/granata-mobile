import React from 'react';
import './Process.css';

const steps = [
    {
        number: '01',
        title: 'Toma de medidas a domicilio',
        desc: 'Relevamiento técnico milimétrico en el lugar para garantizar una adaptación perfecta del proyecto al espacio.',
        icon: 'fas fa-ruler-combined'
    },
    {
        number: '02',
        title: 'Diseño y Visualización 3D',
        desc: 'Presentación de renders fotorealistas que permiten evaluar cada detalle estético y funcional antes de producir.',
        icon: 'fas fa-cube'
    },
    {
        number: '03',
        title: 'Fabricación a medida',
        desc: 'Producción propia en Rosario con tecnología de vanguardia y control total sobre los procesos constructivos.',
        icon: 'fas fa-tools'
    },
    {
        number: '04',
        title: 'Asistencia Técnica en Obra',
        desc: 'Coordinación directa con los profesionales de tu obra para asegurar una integración fluida y técnica.',
        icon: 'fas fa-project-diagram'
    },
    {
        number: '05',
        title: 'Entrega e Instalación',
        desc: 'Servicio premium con personal especializado y flota propia, garantizando el cuidado absoluto del amoblamiento.',
        icon: 'fas fa-truck-loading'
    },
    {
        number: '06',
        title: 'Servicio de Postventa',
        desc: 'Garantía de respaldo GRANATA para asegurar la excelencia de tu amoblamiento a lo largo del tiempo.',
        icon: 'fas fa-award'
    }
];

const Process: React.FC = () => {
    return (
        <section className="process-steps" id="proceso">
            <div className="process-container">
                <div className="process-header">
                    <h2>El Proceso Integral</h2>
                    <p>
                        Un método de trabajo perfeccionado durante seis décadas para transformar tus ideas en espacios de diseño.
                    </p>
                </div>

                <div className="steps-grid-border">
                    {steps.map((step, index) => (
                        <div key={index} className="step-box">
                            <div className="step-header">
                                <span className="step-num">{step.number}</span>
                                <div className="step-icon-box">
                                    <i className={step.icon}></i>
                                </div>
                            </div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
