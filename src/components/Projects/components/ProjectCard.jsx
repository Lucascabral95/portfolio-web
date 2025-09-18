import { useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 0.95 }
};

const cardTransition = {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1]
};

const ProjectCard = ({ project }) => {
    const getTechStyles = useCallback((techName) => ({
        backgroundColor: techName === "Next JS" || techName === "Pusher" ? "white" : null,
        borderRadius: techName === "Next JS" || techName === "Pusher" ? "50%" : null
    }), []);

    return (
        <motion.div
            className="card"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={cardTransition}
            layout
        >
            <Link to={`/proyecto/${project.id}`} className="imagen-caracteristicas">
                <div className="img">
                    <img src={project.imagen} alt={project.titulo} />
                </div>
                <div className="caracteristicas">
                    <div className="titulo">
                        <p>{project.titulo}</p>
                    </div>
                    <div className="subtitulo">
                        <p>{project.subtitulo}</p>
                    </div>
                    <div className="descripcion">
                        <p>{project.descripcion}</p>
                    </div>
                </div>
            </Link>
            <div className="detalles">
                <div className="tecnologias">
                    <div className="img">
                        {project.tecnologias.map((tecnologia, techIndex) => (
                            <img
                                key={`${project.id}-tech-${techIndex}`}
                                style={getTechStyles(tecnologia.nombre)}
                                src={tecnologia.imagen}
                                alt={tecnologia.nombre}
                            />
                        ))}
                    </div>
                    <div className="fecha">
                        <p>{project.creacion}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;