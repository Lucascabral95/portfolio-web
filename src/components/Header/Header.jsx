import "./Header.scss"
import { Link, useNavigate } from "react-router-dom"
import { CgMenuCake } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import MenuHeader from "./MenuHeader";
import { useState, useEffect } from "react";

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false)
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        navigate(`/#${id}`);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    const activateMenuHeader = () => {
        setActiveMenu(!activeMenu);
    };

    useEffect(() => {
        document.body.style.overflow = activeMenu ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [activeMenu]);

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <h2> Lucas Cabral </h2>
                        </Link>
                    </div>

                    <div className="categorias">
                        <div className="categoria-desktop" onClick={() => scrollToSection("aboutme")}>
                            <div className="seccion">
                                <p> Sobre mí </p>
                            </div>
                        </div>
                        <div className="categoria-desktop" onClick={() => scrollToSection("skills")}>
                            <div className="seccion">
                                <p> Habilidades </p>
                            </div>
                        </div>
                        <div className="categoria-desktop" onClick={() => scrollToSection("servicios")}>
                            <div className="seccion">
                                <p> Servicios </p>
                            </div>
                        </div>
                        <div className="categoria-desktop" onClick={() => scrollToSection("projects")}>
                            <div className="seccion">
                                <p> Proyectos </p>
                            </div>
                        </div>
                        <div className="categoria-desktop" onClick={() => scrollToSection("education")}>
                            <div className="seccion">
                                <p> Educación </p>
                            </div>
                        </div>
                        <div className="categoria-desktop" onClick={() => scrollToSection("contactme")}>
                            <div className="seccion">
                                <p> Contacto </p>
                            </div>
                        </div>
                        <div className="seccion seccion-menu" style={{ display: "none" }} onClick={() => activateMenuHeader()}>
                            <button className="icono">
                                {activeMenu ? <IoIosCloseCircle className="icon" /> : <CgMenuCake className="icon" />}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <MenuHeader visible={activeMenu} setVisible={setActiveMenu} />
        </>
    )
}