import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgMenuCake } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import MenuHeader from "./MenuHeader";
import "./Header.scss";

const navigationItems = [
    { id: "aboutme", label: "Sobre mí" },
    { id: "skills", label: "Habilidades" },
    { id: "servicios", label: "Servicios" },
    { id: "projects", label: "Proyectos" },
    { id: "education", label: "Educación" },
    { id: "contactme", label: "Contacto" }
];

const NavigationItem = ({ id, label, onClick }) => (
    <div className="categoria-desktop" onClick={() => onClick(id)}>
        <div className="seccion">
            <p>{label}</p>
        </div>
    </div>
);

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false);
    const navigate = useNavigate();

    const scrollToSection = useCallback((id) => {
        navigate(`/#${id}`);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    }, [navigate]);

    const toggleMenuHeader = useCallback(() => {
        setActiveMenu(prev => !prev);
    }, []);

    const handleNavigationClick = useCallback((sectionId) => {
        scrollToSection(sectionId);
    }, [scrollToSection]);

    useEffect(() => {
        document.body.style.overflow = activeMenu ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [activeMenu]);

    const menuIcon = useMemo(() => (
        activeMenu ? <IoIosCloseCircle className="icon" /> : <CgMenuCake className="icon" />
    ), [activeMenu]);

    const menuHeaderProps = useMemo(() => ({
        visible: activeMenu,
        setVisible: setActiveMenu
    }), [activeMenu]);

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <h2>Lucas Cabral</h2>
                        </Link>
                    </div>

                    <div className="categorias">
                        {navigationItems.map(({ id, label }) => (
                            <NavigationItem
                                key={id}
                                id={id}
                                label={label}
                                onClick={handleNavigationClick}
                            />
                        ))}

                        <div
                            className="seccion seccion-menu"
                            style={{ display: "none" }}
                            onClick={toggleMenuHeader}
                        >
                            <button
                                className="icono"
                                type="button"
                                aria-label={activeMenu ? "Cerrar menú" : "Abrir menú"}
                            >
                                {menuIcon}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <MenuHeader {...menuHeaderProps} />
        </>
    );
}
