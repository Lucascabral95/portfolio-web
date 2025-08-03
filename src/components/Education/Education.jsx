import { useState } from "react";
import "./Education.scss"
import Certificaciones from "../../JSON/Certificaciones.json"
import { IoIosLink } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";
import ImageZoom from "../ImageZoom/ImageZoom";
import { motion, AnimatePresence } from "framer-motion";

export default function Education() {
    const [isOpenImage, setIsOpenImage] = useState(false)
    const [imagenSeccionada, setImagenSeccionada] = useState('')
    const [certificacionesAMostrar, setCertificacionesAMostrar] = useState(2)

    const mostrarMas = () => {
        setCertificacionesAMostrar(Certificaciones.length)
    }

    const verMenos = () => {
        setCertificacionesAMostrar(2)
    }

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
                    <AnimatePresence>
                        {[...Certificaciones].reverse().slice(0, certificacionesAMostrar).map((certificacion) => (
                            <motion.div
                                key={certificacion.id}
                                className="card-certificado"
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                            >
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
                                            <a href={certificacion.url} target="_blank" rel="noopener noreferrer">
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
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {isOpenImage &&
                    <ImageZoom isOpenImage={isOpenImage} setIsOpenImage={setIsOpenImage} image={imagenSeccionada} />
                }

                <div className="boton-de-ver-mas">
                    <button onClick={certificacionesAMostrar === 2 ? mostrarMas : verMenos}>
                        {certificacionesAMostrar === 2 ? "Ver más" : "Ver menos"}
                    </button>
                </div>

                <div className="borde-inferior"></div>
            </div>

        </section>
    )
}