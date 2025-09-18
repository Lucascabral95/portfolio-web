import { useCallback, useMemo } from "react";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
    const scrollToSection = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const socialLinks = useMemo(() => [
        {
            href: "https://www.linkedin.com/feed/",
            icon: FaLinkedin,
            label: "LinkedIn"
        },
        {
            href: "https://github.com/Lucascabral95",
            icon: FaGithub,
            label: "GitHub"
        },
        {
            href: "https://www.instagram.com/lucascabral95/",
            icon: FaInstagram,
            label: "Instagram"
        },
        {
            href: "https://web.facebook.com/lucas.cabral3/",
            icon: FaFacebook,
            label: "Facebook"
        }
    ], []);

    const navigationSections = useMemo(() => [
        { id: "aboutMe", label: "Sobre mí" },
        { id: "skills", label: "Habilidades" },
        { id: "projects", label: "Proyectos" },
        { id: "education", label: "Educación" },
        { id: "contactme", label: "Contacto" }
    ], []);

    const handleSectionClick = useCallback((sectionId) => {
        scrollToSection(sectionId);
    }, [scrollToSection]);

    return (
        <footer className="footer">
            <div className="contenedor">
                <div className="footer-redes">
                    <div className="contenedor">
                        {socialLinks.map(({ href, icon: Icon, label }) => (
                            <div key={href} className="icono">
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visitar perfil de ${label}`}
                                >
                                    <Icon className="icon" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <nav className="footer-secciones">
                    {navigationSections.map(({ id, label }) => (
                        <div
                            key={id}
                            className="seccion"
                            onClick={() => handleSectionClick(id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleSectionClick(id);
                                }
                            }}
                        >
                            <p>{label}</p>
                        </div>
                    ))}
                </nav>

                <div className="footer-derechos-reservados">
                    <div className="texto">
                        <p>© 2024 - Lucas Cabral - Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
