import { useState, useMemo, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import Proyectos from "../../JSON/Projects.json";
import "./Projects.scss";

const PROYECTOS_A_MOSTRAR = 8;
const CANTIDAD_PROYECTOS = Proyectos.length;

const filterStyles = {
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'flex-end'
};

const labelStyles = {
    marginRight: '10px'
};

const selectStyles = {
    padding: '5px',
    borderRadius: '4px'
};

const ordenOptions = [
    { value: 'reciente', label: 'Más recientes primero' },
    { value: 'antiguo', label: 'Más antiguos primero' }
];

export default function Projects() {
    const [cantidadAMostrar, setCantidadAMostrar] = useState(PROYECTOS_A_MOSTRAR);
    const [orden, setOrden] = useState('reciente');

    const proyectosOrdenados = useMemo(() => {
        return [...Proyectos].sort((a, b) => {
            const fechaA = new Date(a.fechaFormateada);
            const fechaB = new Date(b.fechaFormateada);
            return orden === 'reciente' ? fechaB - fechaA : fechaA - fechaB;
        });
    }, [orden]);

    const proyectosAMostrar = useMemo(() => {
        return proyectosOrdenados.slice(0, cantidadAMostrar);
    }, [proyectosOrdenados, cantidadAMostrar]);

    const verMas = useCallback(() => {
        setCantidadAMostrar(prev => prev + PROYECTOS_A_MOSTRAR);
    }, []);

    const verMenos = useCallback(() => {
        setCantidadAMostrar(PROYECTOS_A_MOSTRAR);
    }, []);

    const handleOrdenChange = useCallback((e) => {
        setOrden(e.target.value);
        setCantidadAMostrar(PROYECTOS_A_MOSTRAR);
    }, []);

    const buttonState = useMemo(() => {
        const showVerMas = CANTIDAD_PROYECTOS > cantidadAMostrar;
        const showVerMenos = cantidadAMostrar > PROYECTOS_A_MOSTRAR;

        return {
            show: showVerMas || showVerMenos,
            text: showVerMas ? "Ver más" : "Ver menos",
            action: showVerMas ? verMas : verMenos
        };
    }, [cantidadAMostrar, verMas, verMenos]);

    const selectComponent = useMemo(() => (
        <select
            value={orden}
            onChange={handleOrdenChange}
            style={selectStyles}
        >
            {ordenOptions.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    ), [orden, handleOrdenChange]);

    return (
        <section className="projects-section" id="projects">
            <div className="contenedor">
                <div className="contenedor-numero contenedor-numero-violeta">
                    <div className="numero">
                        <p>3</p>
                    </div>
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-violeta">
                    <div className="titulo">
                        <h2>Proyectos</h2>
                    </div>
                    <div className="subtitulo">
                        <h3>Proyectos personales</h3>
                    </div>
                    <div className="linea-delimitante"></div>
                    <div className="descripcion">
                        <p>
                            Proyectos personales que fusionan mis habilidades en desarrollo Frontend y Backend,
                            demostrando mi dedicación a la calidad y la excelencia en el código.
                        </p>
                    </div>
                </div>

                <div className="filtros" style={filterStyles}>
                    <label style={labelStyles}>Ordenar por fecha:</label>
                    {selectComponent}
                </div>

                <div className="contenedor-de-proyectos">
                    <AnimatePresence mode="wait">
                        {proyectosAMostrar.map((project) => (
                            <ProjectCard
                                key={`${project.id}-${orden}`}
                                project={project}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {buttonState.show && (
                    <div className="boton-de-ver-mas">
                        <button onClick={buttonState.action}>
                            {buttonState.text}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
