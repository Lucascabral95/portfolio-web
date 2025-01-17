import { useState } from "react";
import "./Education.scss"
import Certificaciones from "../../JSON/Certificaciones.json"
import { IoIosLink } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";
import ImageZoom from "../ImageZoom/ImageZoom";
import Servicios from "../Servicios/Servicios";

export default function Education() {
    const [isOpenImage, setIsOpenImage] = useState(false)
    const [imagenSeccionada, setImagenSeccionada] = useState('')

    return (
        <section className="education-section" id="education">

            <div className="borde-superior-education"></div>

            <div className="contenedor">
                <div className="borde-superior"></div>

                <div className="contenedor-numero contenedor-numero-verde">
                    <div className="numero" >
                        <p> 4 </p>
                    </div>
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-verde">
                    <div className="titulo">
                        <h2> Educación </h2>
                    </div>
                    <div className="subtitulo">
                        <h3> Capacitación en Software  </h3>
                    </div>
                    <div className="linea-delimitante"></div>
                    <div className="descripcion">
                        <p> Mis certificaciones y la educación que he adquirido en el ámbito del desarrollo de software. </p>
                    </div>
                </div>

                <div className="contenedor-de-certificaciones">
                    {Certificaciones.map((certificacion, index) => (
                        <div className="card-certificado" key={index}>
                            <div className="contenido-card">
                                <div className="nombre-fecha">
                                </div>
                                <div className="titulo-card">
                                    <p className="tit-card"> {certificacion.nombre} </p>
                                    <div className="imagen-card">
                                        <Link to={`/certificacion/${certificacion.id}`}>
                                            <img src={certificacion.imagen} alt={certificacion.nombre} className="img" />
                                        </Link>
                                        <p className="fecha-emision-certificado"> {certificacion.fechaDeObtencion} </p>
                                    </div>
                                    <div className="menu-iconos">
                                        <a href={certificacion.url} target="_blank">
                                            <div className="icono">
                                                <IoIosLink className="icon" />
                                            </div>
                                        </a>
                                        <div onClick={() => { setIsOpenImage(!isOpenImage); setImagenSeccionada(certificacion.imagen) }}>
                                            <div className="icono">
                                                <MdOutlineZoomOutMap className="icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {isOpenImage &&
                    <ImageZoom isOpenImage={isOpenImage} setIsOpenImage={setIsOpenImage} image={imagenSeccionada} />
                }

                <div className="borde-inferior"></div>
            </div>
            
        </section>
    )
}