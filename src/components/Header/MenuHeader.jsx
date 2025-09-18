import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import MenuItem from "./components/HeaderMobile/MenuItem";
import "./MenuHeader.scss";

const menuItems = [
    { id: "aboutme", label: "Sobre Mí" },
    { id: "skills", label: "Habilidades" },
    { id: "servicios", label: "Servicios" },
    { id: "projects", label: "Proyectos" },
    { id: "education", label: "Educación" },
    { id: "contactme", label: "Contacto" }
];

const springConfig = { duration: 400 };

export default function MenuHeader({ visible, setVisible }) {
    const navigate = useNavigate();

    const irAlLink = useCallback((id) => {
        navigate(`/#${id}`);
        document.body.style.overflow = 'auto';
        setVisible(false);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    }, [navigate, setVisible]);

    const menuAbriendose = useSpring({
        to: { transform: "translateY(0)", opacity: 1 },
        from: { transform: "translateY(10%)", opacity: 0 },
        config: springConfig,
        reset: true
    });

    const combinedStyle = useMemo(() => ({
        ...menuAbriendose,
        display: visible ? "block" : 'none'
    }), [menuAbriendose, visible]);

    return (
        <animated.div
            style={combinedStyle}
            className="menu-header"
        >
            <div className="contenedor">
                <div className="category">
                    {menuItems.map(({ id, label }) => (
                        <MenuItem
                            key={id}
                            id={id}
                            label={label}
                            onClick={irAlLink}
                        />
                    ))}
                </div>
            </div>
        </animated.div>
    );
}
