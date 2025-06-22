import "./Skills.scss"
import Stacks from "../../JSON/Skills.json"
import { useState } from "react"
import { FaGithub, FaGitAlt, FaNpm, FaStripe, FaLinux } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { SiVercel, SiVisualstudiocode, SiKubernetes, SiMysql, SiBun, SiGnubash, SiPrisma, SiSequelize, SiSocketdotio } from "react-icons/si";
import { TbBrandDocker } from "react-icons/tb";

export default function Skills() {
    const [arraySkills] = useState({
        frontend: Stacks.filter(skill => skill.tipo.includes("Frontend")),
        backend: Stacks.filter(skill => skill.tipo.includes("Backend")),
        allSkills: Stacks.filter(skill => skill.tipo.includes("Frontend") || skill.tipo.includes("Backend"))
    })

    const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

    return (
        <section className="skills" id="skills">
            <div className="contenedor">

                <div className="contenedor-numero contenedor-numero-azul">
                    <div className="numero">
                        <p> 1 </p>
                    </div>
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-azul">
                    <div className="titulo">
                        <h2> Creando experiencias fluidas desde el frontend hasta el backend </h2>
                    </div>
                    <div className="subtitulo">
                        <h3> Habilidades en el Desarrollo de Software </h3>
                    </div>
                    <div className="linea-delimitante"></div>
                    <div className="descripcion">
                        <p> Con una pasión por la innovación y una atención meticulosa a los detalles, me especializo en el desarrollo Full Stack, cerrando de manera fluida la brecha entre las tecnologías de frontend y backend. Mi experiencia se centra en el diseño e implementación de soluciones robustas y escalables que priorizan la experiencia del usuario, asegurando al mismo tiempo una funcionalidad eficiente en toda la pila de software. </p>
                    </div>
                </div>

                <div className="especialidades">
                    <div className="especialidad especialidad-frontend">
                        <div className="nombre-skill">
                            <p> Frontend Skills </p>
                        </div>
                        <div className="imagenes">
                            {arraySkills.frontend.map((item, index) => (
                                <div className="contenedor-de-imagen" key={index} onMouseOver={() => setImagenSeleccionada(item.id)} onMouseOut={() => setImagenSeleccionada(null)}
                                    style={{
                                        borderImage: `${item.bordeColor}`, boxShadow: `${item.id === imagenSeleccionada ? item.boxShadow : "0px 0px 0px 0px transparent"}`,
                                    }}
                                >
                                    <img src={item.imagen} alt={item.texto}
                                        style={{
                                            borderRadius: `${item.skill === "Next JS" ? "50%" : "0"}`,
                                            boxShadow: `${item.skill === "Next JS" && item.boxShadowInterno}`,
                                            backgroundColor: `${item.skill === "Next JS" ? "white" : "transparent"}`
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="separador">
                        <div className="img">
                            <img src="https://railway.app/illustrations/trains/01-train-dark.svg" alt="Cohete" />
                        </div>
                    </div>

                    <div className="especialidad especialidad-backend ">
                        <div className="nombre-skill">
                            <p> Backend Skills </p>
                        </div>
                        <div className="imagenes">
                            {arraySkills.backend.map((item, index) => (
                                <div className="contenedor-de-imagen" onMouseOver={() => setImagenSeleccionada(item.id)} onMouseOut={() => setImagenSeleccionada(null)} key={index}
                                    style={{
                                        borderImage: `${item.bordeColor}`, boxShadow: `${item.id === imagenSeleccionada ? item.boxShadow : "0px 0px 0px 0px transparent"}`,
                                    }} >
                                    <img src={item.imagen} alt={item.texto}
                                        style={{
                                            borderRadius: `${item.skill === "Next JS" ? "50%" : "0"}`,
                                            boxShadow: `${item.skill === "Next JS" && item.boxShadowInterno}`,
                                            backgroundColor: `${item.skill === "Next JS" ? "white" : "transparent"}`
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-herramientas">
                    <div className="subtitulo">
                        <h3> Herramientas de Desarrollo </h3>
                    </div>
                    <div className="linea-delimitante"></div>
                    <div className="descripcion">
                        <p> Un conjunto seleccionado de herramientas modernas y tecnologías avanzadas que optimizan mi flujo de trabajo en el desarrollo, garantizando eficiencia y calidad en cada proyecto.</p>
                    </div>
                </div>

                <div className="encuadrante">
                    <div className="imagen">
                        <SiVisualstudiocode className="icon icon-vscode" />
                        <p className="nombre-vscode"> VSCode </p>
                    </div>
                    <div className="imagen">
                        <FaGitAlt className="icon icon-git" />
                        <p className="nombre-git"> Git </p>
                    </div>
                    <div className="imagen">
                        <FaGithub className="icon icon-github" />
                        <p className="nombre-github"> GitHub </p>
                    </div>
                    <div className="imagen">
                        <FaNpm className="icon icon-npm" />
                        <p className="nombre-npm"> NPM </p>
                    </div>
                    <div className="imagen">
                        <SiBun className="icon icon-bun" />
                        <p className="nombre-bun"> Bun </p>
                    </div>
                    <div className="imagen">
                        <FaLinux className="icon icon-linux" />
                        <p className="nombre-linux"> Linux </p>
                    </div>
                    <div className="imagen">
                        <SiGnubash className="icon icon-bash" />
                        <p className="nombre-bash"> Bash Scripting </p>
                    </div>
                    <div className="imagen">
                        <SiMysql className="icon icon-mysql" />
                        <p className="nombre-mysql"> Workbench</p>
                    </div>
                    <div className="imagen">
                        <FaStripe className="icon icon-stripe" />
                        <p className="nombre-stripe"> Stripe </p>
                    </div>
                    <div className="imagen">
                        <TbBrandDocker className="icon icon-docker" />
                        <p className="nombre-docker"> Docker </p>
                    </div>
                    <div className="imagen">
                        <SiKubernetes className="icon icon-kubernetes" />
                        <p className="nombre-kubernetes"> Kubernetes </p>
                    </div>
                    <div className="imagen">
                        <SiSocketdotio className="icon icon-socket" />
                        <p className="nombre-socket"> Socket.IO </p>
                    </div>


                    <div className="imagen">
                        <SiSequelize className="icon icon-sequelize" />
                        <p className="nombre-sequelize"> Sequelize </p>
                    </div>
                    <div className="imagen">
                        <SiPrisma className="icon icon-prisma" />
                        <p className="nombre-prisma"> Prisma </p>
                    </div>
                    <div className="imagen">
                        <RiSupabaseFill className="icon icon-supabase" />
                        <p className="nombre-supabase"> Supabase </p>
                    </div>
                    <div className="imagen">
                        <SiVercel className="icon icon-vercel" />
                        <p className="nombre-vercel"> Vercel </p>
                    </div>
                </div>

            </div>
        </section>
    )
}