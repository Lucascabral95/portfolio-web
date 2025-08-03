import "./AboutMe.scss"
import { Typewriter } from "react-simple-typewriter"
import { useSpring, animated } from "@react-spring/web"

export default function AboutMe() {

    const stylePhotoProfile = useSpring({
        from: { opacity: 0, transform: "translateY(60px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { duration: 1000 },
        reset: true,
    });

    return (
        <section className="aboutMe" id="aboutMe">
            <div className="contenedor">

                <div className="presentacion">
                    <div className="titulo-subtitulo">
                        <div className="titulo">
                            <h1> Soy Lucas Cabral</h1>
                        </div>
                        <div className="subtitulo">
                            <h2> Soy un </h2>
                            <h2 className="color-typewriter">
                                <Typewriter
                                    words={["Code Lover", "Full-Stack Developer"]}
                                    loop={2}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={140}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h2>
                        </div>
                    </div>
                    <div className="descripcion">
                        <p>Desarrollador Full Stack con más de dos años de experiencia, especializado en transformar ideas complejas en aplicaciones web escalables y de alto rendimiento. Con expertise técnico avanzado en React, Angular, Next.js, NestJS y TypeScript, combino mi sólido background en gestión de datos empresariales con arquitecturas modernas utilizando Docker, PostgreSQL y MongoDB, potenciado con IA para soluciones empresariales eficientes.</p>
                    </div>
                </div>

                <animated.div style={stylePhotoProfile} className="img">
                    <img src="/img/dev-lucas-cat-dos.png" alt="Imagen de presentación" />
                </animated.div>

            </div>

            <div className="borde-superior-skills"></div>

        </section>
    )
}