import ImageZoom from "../ImageZoom/ImageZoom.jsx";
import LinkEstructuraDetalle from "./components/LinkEstructuraDetalle.jsx";

const EstructuraDetalle = ({
    filtroCertificaciones,
    tecnologias,
    existeProyecto,
    imagenesExtras,
    setImagenSeleccionada,
    imagen,
    setIsOpenImage,
    isOpenImage
}) => {

    return (
        <section className='certificaciones'>
            <div className="contenedor-de-certificaciones">

                <div className="titulo-certificaciones-mobile">
                    <h2> {filtroCertificaciones.nombre} </h2>
                </div>

                <div className="foto">
                    <img src={imagen} alt={filtroCertificaciones.nombre} onClick={() => setIsOpenImage(!isOpenImage)} />
                    <div className="fecha-de-obtencion">
                        <p> {filtroCertificaciones.fechaDeObtencion} </p>
                    </div>
                    {existeProyecto &&
                        <div className="mas-imagenes-proyecto">
                            {imagenesExtras?.map((imagen, index) => (
                                <div className="imagenes" key={index} onClick={() => setImagenSeleccionada(imagen.imagenExtra)}>
                                    <img className="img-mas-imagenes" src={imagen.imagenExtra} alt={imagen.nombreImagen} />
                                </div>
                            ))}
                        </div>
                    }
                    <div className="credencial">
                        <a href={filtroCertificaciones.url} target="_blank" rel="noopener noreferrer" title="Ver credencial digital">
                            <div className="caja-credencial">
                                {existeProyecto
                                    ?
                                    <p> Visitar sitio web </p>
                                    :
                                    <p> Ver credencial </p>
                                }
                            </div>
                        </a>
                        {filtroCertificaciones.linkRepo &&
                            <LinkEstructuraDetalle isBackend={false} linkRepo={filtroCertificaciones.linkRepo} id={filtroCertificaciones.id} />
                        }
                        {filtroCertificaciones.repoBackend &&
                            <LinkEstructuraDetalle isBackend={true} linkRepo={filtroCertificaciones.repoBackendLink} id={filtroCertificaciones.id} />
                        }
                    </div>

                    {isOpenImage && <ImageZoom image={imagen} setIsOpenImage={setIsOpenImage} isOpenImage={isOpenImage} />}

                </div>
                <div className="linea-divisoria">
                    <div className="linea-interior"></div>
                </div>
                <div className="certificaciones-detalles">
                    <div className="contenedor-detalles">
                        <div className="titulo">
                            <h2> {filtroCertificaciones.nombre} </h2>
                        </div>
                        <div className="descripcion">
                            <p className="descripcion-texto"> {filtroCertificaciones.descripcion} </p>
                            {
                                existeProyecto &&
                                <div className="caracteristicas-claves">
                                    <h4 className="caracteristicas-claves-titulo"> Características claves: </h4>
                                </div>
                            }
                            {filtroCertificaciones?.temas?.map((item, index) => (
                                <div key={index} className="contenedor-de-descripcion">
                                    <div className="organizador">
                                        <span className="texto-englobador">
                                            <span className="t-e"> {item.nombre}: </span> <span className="texto"> {item.descripcion} </span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="tecnologias-vistas">
                            <div className="contenedor-de-tecnologias">
                                {tecnologias?.map((tecnologia, index) => (
                                    <div className="tecnos" key={index} style={{ backgroundColor: `${tecnologia.fondoColor}` }}>
                                        <p className="tecnos-texto" style={{ color: `${tecnologia.colorLetra}` }}> {tecnologia.tecnologia} </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default EstructuraDetalle;