import { useCallback, useMemo } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { SiCyberdefenders } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { FaMicrochip } from "react-icons/fa6";
import { GiDatabase, GiNetworkBars } from "react-icons/gi";

const iconMap = {
    FaLaptopCode: FaLaptopCode,
    GiDatabase: GiDatabase,
    FaMicrochip: FaMicrochip,
    DiResponsive: DiResponsive,
    GiNetworkBars: GiNetworkBars,
    SiCyberdefenders: SiCyberdefenders
};

const hoverTransition = "box-shadow 0.2s ease-in-out";

const ServicioCard = ({ servicio, index, isHovered, onMouseEnter, onMouseLeave }) => {
    const Icono = iconMap[servicio.icono];

    const containerStyle = useMemo(() => ({
        backgroundColor: servicio.colorFondoDiv,
        boxShadow: isHovered ? servicio.boxShadow : "none",
        transition: hoverTransition
    }), [servicio.colorFondoDiv, servicio.boxShadow, isHovered]);

    const iconContainerStyle = useMemo(() => ({
        backgroundColor: servicio.colorFondoIcono
    }), [servicio.colorFondoIcono]);

    const iconStyle = useMemo(() => ({
        color: servicio.colorIcono
    }), [servicio.colorIcono]);

    const handleMouseEnter = useCallback(() => {
        onMouseEnter(index);
    }, [index, onMouseEnter]);

    const handleMouseLeave = useCallback(() => {
        onMouseLeave();
    }, [onMouseLeave]);

    return (
        <div
            className="servicio"
            style={containerStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="primera-seccion">
                <div className="icono" style={iconContainerStyle}>
                    <Icono className='icon' style={iconStyle} />
                </div>
            </div>

            <div className="segunda-seccion">
                <div className="titulo">
                    <p>{servicio.titulo}</p>
                </div>
                <div className="descripcion">
                    <p>{servicio.descripcion}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicioCard;