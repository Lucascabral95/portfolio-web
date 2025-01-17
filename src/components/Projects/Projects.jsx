import "./Projects.scss"
import Proyectos from "../../JSON/Projects.json"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Projects() {
    const proyectosAMostrar = 8
    const cantidadProyectos = Proyectos.length
    const [inicioFin, setInicioFin] = useState({
        inicio: 0,
        fin: proyectosAMostrar
    })

    const verMas = () => {
        setInicioFin({
            inicio: inicioFin.inicio,
            fin: inicioFin.fin + proyectosAMostrar
        })
    }

    return (
        <section className="projects-section" id="projects">
            <div className="contenedor">

                <div className="contenedor-numero contenedor-numero-violeta">
                    <div className="numero" >
                        <p> 3 </p>
                    </div>
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-violeta">
                    <div className="titulo">
                        <h2> Proyectos </h2>
                    </div>
                    <div className="subtitulo">
                        <h3> Proyectos personales </h3>
                    </div>
                    <div className="linea-delimitante"></div>
                    <div className="descripcion">
                        <p> Proyectos personales que fusionan mis habilidades en desarrollo Frontend y Backend, demostrando mi dedicación a la calidad y la excelencia en el código. </p>
                    </div>
                </div>

                <div className="contenedor-de-proyectos">
                    {Proyectos.slice(inicioFin.inicio, inicioFin.fin).map((projects, index) => (
                        <div className="card" key={index}>
                            <Link to={`/proyecto/${projects.id}`} className="imagen-caracteristicas">
                                <div className="img">
                                    <img src={projects.imagen} alt={projects.titulo} />
                                </div>
                                <div className="caracteristicas">
                                    <div className="titulo">
                                        <p> {projects.titulo} </p>
                                    </div>
                                    <div className="subtitulo">
                                        <p> {projects.subtitulo} </p>
                                    </div>
                                    <div className="descripcion">
                                        <p> {projects.descripcion} </p>
                                    </div>
                                </div>
                            </Link>
                            <div className="detalles">
                                <div className="tecnologias">
                                    <div className="img">
                                        {projects.tecnologias.map((tecnologia, index) => (
                                            <img style={{ backgroundColor: tecnologia.nombre === "Next JS" || tecnologia.nombre === "Pusher" ? "white" : null, borderRadius: tecnologia.nombre === "Next JS" || tecnologia.nombre === "Pusher" ? "50%" : null }}
                                                src={tecnologia.imagen} alt={tecnologia.nombre} key={index} />
                                        ))}
                                    </div>
                                    <div className="fecha">
                                        <p> {projects.creacion} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {cantidadProyectos > inicioFin.fin &&
                    <div className="boton-de-ver-mas">
                        <button onClick={verMas}> Ver más </button>
                    </div>
                }

            </div>
        </section>
    )
}