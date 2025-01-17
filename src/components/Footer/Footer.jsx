import "./Footer.scss"
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="contenedor">

                <div className="footer-redes">
                    <div className="contenedor">
                        <div className="icono">
                            <a href="https://www.linkedin.com/feed/" target="_blank">
                                <FaLinkedin className="icon" />
                            </a>
                        </div>
                        <div className="icono">
                            <a href="https://github.com/Lucascabral95" target="_blank">
                                <FaGithub className="icon" />
                            </a>
                        </div>
                        <div className="icono">
                            <a href="https://www.instagram.com/lucascabral95/" target="_blank">
                                <FaInstagram className="icon" />
                            </a>
                        </div>
                        <div className="icono">
                            <a href="https://web.facebook.com/lucas.cabral3/" target="_blank">
                                <FaFacebook className="icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-secciones">
                    <div className="seccion">
                        <Link to="#aboutme">
                            <p> Sobre mí </p>
                        </Link>
                    </div>
                    <div className="seccion">
                        <Link to="#skills">
                            <p> Habilidades </p>
                        </Link>
                    </div>
                    <div className="seccion">
                        <Link to="#projects">
                            <p> Proyectos </p>
                        </Link>
                    </div>
                    <div className="seccion">
                        <Link to="#education">
                            <p> Educación </p>
                        </Link>
                    </div>
                    <div className="seccion">
                        <Link to="#contactme">
                            <p> Contacto </p>
                        </Link>
                    </div>
                </div>

                <div className="footer-derechos-reservados">
                    <div className="texto">
                        <p> © 2024 - Lucas Cabral - Todos los derechos reservados </p>
                    </div>
                </div>

            </div>
        </footer>
    )
}