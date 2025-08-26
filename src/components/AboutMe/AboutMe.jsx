import { useState, useMemo } from "react"
import { Typewriter } from "react-simple-typewriter"
import { useSpring, animated } from "@react-spring/web"
import "./AboutMe.scss"
import Toast from "./Components/Toast"

export default function AboutMe() {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [emailCopied, setEmailCopied] = useState(false)

    const email = "lucassimple1995@hotmail.com"
    const linkedinUrl = "https://www.linkedin.com/in/lucas-gast%C3%B3n-cabral/"
    const githubUrl = "https://github.com/Lucascabral95"

    const containerSpring = useSpring({
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
        config: { tension: 200, friction: 26, clamp: true },
        delay: 80,
    })

    const photoSpring = useSpring({
        from: { opacity: 0, y: 50, scale: 0.98 },
        to: { opacity: 1, y: 0, scale: 1 },
        config: { tension: 180, friction: 18 },
        delay: 150,
    })

    const skills = useMemo(
        () => [
            "TypeScript",
            "React/Next.js",
            "NestJS",
            "Angular",
            "PostgreSQL/Prisma",
            "Redis",
            "Docker",
            "CI/CD",
            "Microservicios",
        ],
        []
    )

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setEmailCopied(true)
            setTimeout(() => setEmailCopied(false), 1800)
        } catch {
            console.error("Error al copiar el email")
        }
    }

    return (
        <section className="aboutMe" id="aboutMe" aria-labelledby="about-me-title">
            <div className="aboutMe__bg" aria-hidden="true" />
            <div className="aboutMe__container">
                <animated.div style={containerSpring} className="aboutMe__content">
                    <div className="aboutMe__text">
                        <span className="aboutMe__availability" aria-label="Disponible para trabajar">
                            <span className="dot" /> Disponible para trabajar
                        </span>

                        <h1 id="about-me-title" className="aboutMe__title">
                            Soy <span className="accent">Lucas Cabral</span>
                        </h1>

                        <h2 className="aboutMe__subtitle">
                            <span>Soy un </span>
                            <span className="typewriter">
                                <Typewriter
                                    words={[
                                        "Code Lover",
                                        "Full Stack Developer",
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={90}
                                    deleteSpeed={40}
                                    delaySpeed={1400}
                                />
                            </span>
                        </h2>

                        <p className="aboutMe__description">
                            Desarrollador Full Stack con +2 años creando productos escalables y de alto rendimiento con React/Next.js y NestJS, alcanzando hasta 30% menos tiempo de carga con SSR/ISR, optimización de consultas y caching con Redis sobre PostgreSQL/Prisma.
                            Diseño APIs REST y WebSockets con seguridad (JWT/OAuth2/Passport), automatizo entrega con Docker y CI/CD y despliego en Vercel, Render y Linux, priorizando testing y arquitectura limpia.
                        </p>

                        <ul className="aboutMe__badges" aria-label="Tecnologías principales">
                            {skills.map((s) => (
                                <li key={s} className="badge">
                                    {s}
                                </li>
                            ))}
                        </ul>

                        <div className="aboutMe__actions">
                            <a href="#projects" className="btn btn--primary" aria-label="Ver proyectos">
                                Ver proyectos
                            </a>
                            <a href="#contactme" className="btn btn--ghost" aria-label="Ir a contacto">
                                Contacto
                            </a>
                            <a
                                href="/pdf/LUCAS-CABRAL-CV.pdf"
                                className="btn btn--soft"
                                download
                                aria-label="Descargar CV en PDF"
                            >
                                Descargar CV
                            </a>

                            <button
                                type="button"
                                className="btn btn--icon"
                                onClick={copyEmail}
                                aria-live="polite"
                                aria-label="Copiar email"
                                title="Copiar email"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M4 8l8 5 8-5"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <rect
                                        x="3"
                                        y="5"
                                        width="18"
                                        height="14"
                                        rx="3"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />
                                </svg>
                            </button>

                            <span className={`toast ${emailCopied ? "toast--show" : ""}`}>Email copiado</span>
                        </div>

                        <div className="aboutMe__social" aria-label="Redes">
                            <a
                                href={githubUrl}
                                className="social"
                                aria-label="GitHub"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                                    <path
                                        fill="currentColor"
                                        d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.31 3.53 1 .11-.79.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.92 1.23 3.23 0 4.6-2.81 5.61-5.49 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0012 .5z"
                                    />
                                </svg>
                            </a>
                            <a
                                href={linkedinUrl}
                                className="social"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                                    <path
                                        fill="currentColor"
                                        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.84v2.18h.05C12.06 8.73 13.62 8 15.5 8 20.04 8 21 10.96 21 15.23V24h-4v-7.56c0-1.8-.03-4.11-2.51-4.11-2.51 0-2.9 1.96-2.9 3.98V24h-4V8z"
                                    />
                                </svg>
                            </a>
                            <a href="#contactme" className="social" aria-label="Ir a contacto">
                                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                                    <path
                                        fill="currentColor"
                                        d="M12 12.713l-11.99-7.2v13.487h23.98V5.512L12 12.713zM12 10.64l11.99-7.2H.01l11.99 7.2z"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div className="aboutMe__stats" aria-label="Algunos datos">
                            <div className="stat">
                                <strong>2+</strong>
                                <span>Años de experiencia</span>
                            </div>
                            <div className="stat">
                                <strong>15+</strong>
                                <span>Proyectos creados</span>
                            </div>
                            <div className="stat">
                                <strong>8</strong>
                                <span>Stacks dominados</span>
                            </div>
                        </div>
                    </div>

                    <animated.div style={photoSpring} className="aboutMe__photo">
                        <div className={`photo__ring ${imageLoaded ? "is-loaded" : ""}`} aria-hidden="true" />
                        {!imageLoaded && <div className="photo__skeleton" aria-hidden="true" />}
                        <img
                            src="/img/lucas2-cv.jpg"
                            alt="Foto de perfil de Lucas Cabral"
                            className={`photo ${imageLoaded ? "is-visible" : ""}`}
                            onLoad={() => setImageLoaded(true)}
                            decoding="async"
                            loading="eager"
                        />
                    </animated.div>
                </animated.div>
            </div>

            <div className="borde-superior-skills" aria-hidden="true" />

            <Toast message="Correo copiado" show={emailCopied} />

        </section>
    )
}
