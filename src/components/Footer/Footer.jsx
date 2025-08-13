import "./Footer.scss";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="footer">
            <div className="contenedor">
                <div className="footer-redes">
                    <div className="contenedor">
                        <div className="icono">
                            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="icon" />
                            </a>
                        </div>
                        <div className="icono">
                            <a href="https://github.com/Lucascabral95" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" />
                            </a>
                        </div>
                        <div className="icono">
                            <a href="https://www.instagram.com/lucascabral95/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="icon" />
                            </a>
                        </div>
                        <div className="icono">
                            <a href="https://web.facebook.com/lucas.cabral3/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-secciones">
                    <div className="seccion" onClick={() => scrollToSection("aboutMe")}>
                        <p>Sobre mí</p>
                    </div>
                    <div className="seccion" onClick={() => scrollToSection("skills")}>
                        <p>Habilidades</p>
                    </div>
                    <div className="seccion" onClick={() => scrollToSection("projects")}>
                        <p>Proyectos</p>
                    </div>
                    <div className="seccion" onClick={() => scrollToSection("education")}>
                        <p>Educación</p>
                    </div>
                    <div className="seccion" onClick={() => scrollToSection("contactme")}>
                        <p>Contacto</p>
                    </div>
                </div>

                <div className="footer-derechos-reservados">
                    <div className="texto">
                        <p>© 2024 - Lucas Cabral - Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
