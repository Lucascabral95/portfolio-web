import { useState, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import Certificaciones from "../../JSON/Certificaciones.json";
import ImageZoom from "../ImageZoom/ImageZoom";
import CertificationCard from "./components/CertificationCard";
import "./Education.scss";

const CERTIFICACIONES_INICIALES = 2;
const TOTAL_CERTIFICACIONES = Certificaciones.length;

const selectStyles = {
    padding: '5px',
    borderRadius: '4px'
};

export default function Education() {
    const [isOpenImage, setIsOpenImage] = useState(false);
    const [imagenSeccionada, setImagenSeccionada] = useState('');
    const [cantidadAMostrar, setCantidadAMostrar] = useState(CERTIFICACIONES_INICIALES);
    const [orden, setOrden] = useState('reciente');

    const certificacionesOrdenadas = useMemo(() => {
        return [...Certificaciones].sort((a, b) => {
            const fechaA = new Date(a.creacion);
            const fechaB = new Date(b.creacion);
            return orden === 'reciente' ? fechaB - fechaA : fechaA - fechaB;
        });
    }, [orden]);

    const certificacionesFiltradas = useMemo(() => {
        return certificacionesOrdenadas.slice(0, cantidadAMostrar);
    }, [certificacionesOrdenadas, cantidadAMostrar]);

    const mostrarMas = useCallback(() => {
        setCantidadAMostrar(TOTAL_CERTIFICACIONES);
    }, []);

    const verMenos = useCallback(() => {
        setCantidadAMostrar(CERTIFICACIONES_INICIALES);
    }, []);

    const handleOrdenChange = useCallback((e) => {
        setOrden(e.target.value);
    }, []);

    const handleImageZoom = useCallback((imagen) => {
        setIsOpenImage(true);
        setImagenSeccionada(imagen);
    }, []);

    const closeImageZoom = useCallback(() => {
        setIsOpenImage(false);
    }, []);

    const buttonConfig = useMemo(() => ({
        text: cantidadAMostrar === CERTIFICACIONES_INICIALES ? "Ver más" : "Ver menos",
        action: cantidadAMostrar === CERTIFICACIONES_INICIALES ? mostrarMas : verMenos
    }), [cantidadAMostrar, mostrarMas, verMenos]);

    return (
        <section className="education-section" id="education">
            <div className="borde-superior-education"></div>

            <div className="contenedor">
                <div className="borde-superior"></div>

                <div className="contenedor-numero contenedor-numero-verde">
                    <div className="numero">
                        <p>4</p>
                    </div>
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-verde">
                    <div className="titulo">
                        <h2>Educación</h2>
                    </div>
                    <div className="subtitulo">
                        <h3>Capacitación en Software</h3>
                    </div>
                    <div className="linea-delimitante"></div>
                    <div className="descripcion">
                        <p>
                            Mis certificaciones y la educación que he adquirido en el ámbito
                            del desarrollo de software.
                        </p>
                    </div>
                </div>

                <div className="filtros">
                    <label>Ordenar por fecha:</label>
                    <select
                        value={orden}
                        onChange={handleOrdenChange}
                        style={selectStyles}
                    >
                        <option value="reciente">Más recientes primero</option>
                        <option value="antiguo">Más antiguos primero</option>
                    </select>
                </div>

                <div className="contenedor-de-certificaciones">
                    <AnimatePresence mode="wait">
                        {certificacionesFiltradas.map((certificacion) => (
                            <CertificationCard
                                key={`${certificacion.id}-${orden}`}
                                certificacion={certificacion}
                                onImageZoom={handleImageZoom}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {isOpenImage && (
                    <ImageZoom
                        isOpenImage={isOpenImage}
                        setIsOpenImage={closeImageZoom}
                        image={imagenSeccionada}
                    />
                )}

                <div className="boton-de-ver-mas">
                    <button onClick={buttonConfig.action}>
                        {buttonConfig.text}
                    </button>
                </div>

                <div className="borde-inferior"></div>
            </div>
        </section>
    );
}
