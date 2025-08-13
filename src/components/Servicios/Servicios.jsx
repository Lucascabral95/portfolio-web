import { useState } from 'react'
import "./Servicios.scss"
import { FaLaptopCode } from "react-icons/fa";
import { SiCyberdefenders } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { FaMicrochip } from "react-icons/fa6";
import { GiDatabase, GiNetworkBars } from "react-icons/gi";
import ServiciosJSON from "../../JSON/Servicios.json"

const iconMap = {
    FaLaptopCode: FaLaptopCode,
    GiDatabase: GiDatabase,
    FaMicrochip: FaMicrochip,
    DiResponsive: DiResponsive,
    GiNetworkBars: GiNetworkBars,
    SiCyberdefenders: SiCyberdefenders
};

const Servicios = () => {
    const [isHovered, setIsHovered] = useState(null);

    return (
        <section className='mis-servicios' id='servicios'>
            <div className='contenedor-mis-servicios'>

                <div className="contenedor-numero contenedor-numero-celeste">
                    <div className="numero" >
                        <p> 2 </p>
                    </div>
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-celeste">
                    <div className="titulo">
                        <h2> Servicios </h2>
                    </div>
                    <div className="subtitulo">
                        <h3> Transformando Ideas en Realidad </h3>
                    </div>
                    <div className="linea-delimitante"></div>
                    <div className="descripcion">
                        <p> Desarrollo soluciones de software a medida, optimizando procesos y creando aplicaciones escalables para empresas y negocios, con enfoque en calidad y eficiencia. </p>
                    </div>
                </div>

                <div className="servicios">
                    {ServiciosJSON.map((servicio, index) => {
                        const Icono = iconMap[servicio.icono];
                        return (
                            <div className="servicio" key={index}
                                style={{
                                    backgroundColor: servicio.colorFondoDiv,
                                    boxShadow: isHovered === index ? servicio.boxShadow : "none",
                                    transition: "box-shadow 0.2s ease-in-out"
                                }}
                                onMouseEnter={() => setIsHovered(index)}
                                onMouseLeave={() => setIsHovered(null)}
                            >
                                <div className="primera-seccion">
                                    <div className="icono" style={{ backgroundColor: servicio.colorFondoIcono }}>
                                        <Icono className='icon' style={{ color: servicio.colorIcono }} />
                                    </div>
                                </div>

                                <div className="segunda-seccion">
                                    <div className="titulo">
                                        <p> {servicio.titulo} </p>
                                    </div>
                                    <div className="descripcion">
                                        <p> {servicio.descripcion} </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Servicios