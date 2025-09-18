import { useState, useCallback } from 'react';
import ServiciosJSON from "../../JSON/Servicios.json";
import ServicioCard from './components/ServiciosCard';
import "./Servicios.scss";

const Servicios = () => {
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = useCallback((index) => {
        setIsHovered(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(null);
    }, []);

    return (
        <section className='mis-servicios' id='servicios'>
            <div className='contenedor-mis-servicios'>
                <div className="contenedor-numero contenedor-numero-celeste">
                    <div className="numero">
                        <p>2</p>
                    </div>
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-celeste">
                    <div className="titulo">
                        <h2>Servicios</h2>
                    </div>
                    <div className="subtitulo">
                        <h3>Transformando Ideas en Realidad</h3>
                    </div>
                    <div className="linea-delimitante"></div>
                    <div className="descripcion">
                        <p>
                            Desarrollo soluciones de software a medida, optimizando procesos y creando
                            aplicaciones escalables para empresas y negocios, con enfoque en calidad y eficiencia.
                        </p>
                    </div>
                </div>

                <div className="servicios">
                    {ServiciosJSON.map((servicio, index) => (
                        <ServicioCard
                            key={servicio.id || `servicio-${index}`}
                            servicio={servicio}
                            index={index}
                            isHovered={isHovered === index}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;
