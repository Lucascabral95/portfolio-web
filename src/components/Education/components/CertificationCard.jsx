import { useCallback } from "react";
import { IoIosLink } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
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

const CertificationCard = ({ certificacion, onImageZoom }) => {
    const handleZoomClick = useCallback(() => {
        onImageZoom(certificacion.imagen);
    }, [certificacion.imagen, onImageZoom]);

    return (
        <motion.div
            className="card-certificado"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={cardTransition}
            layout
        >
            <div className="contenido-card">
                <div className="nombre-fecha"></div>
                <div className="titulo-card">
                    <p className="tit-card">{certificacion.nombre}</p>
                    <div className="imagen-card">
                        <Link to={`/certificacion/${certificacion.id}`}>
                            <img
                                src={certificacion.imagen}
                                alt={certificacion.nombre}
                                className="img"
                            />
                        </Link>
                        <p className="fecha-emision-certificado">
                            {certificacion.fechaDeObtencion}
                        </p>
                    </div>
                    <div className="menu-iconos">
                        <a
                            href={certificacion.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver certificación de ${certificacion.nombre}`}
                        >
                            <div className="icono">
                                <IoIosLink className="icon" />
                            </div>
                        </a>
                        <div onClick={handleZoomClick}>
                            <div className="icono">
                                <MdOutlineZoomOutMap className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CertificationCard;
