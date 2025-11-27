import { useState, useMemo, useCallback } from "react";
import { 
    SiVercel,
     SiKubernetes, 
     SiMysql, 
     SiGnubash, 
     SiPrisma, 
     SiAmazonwebservices, 
     SiSocketdotio, 
     SiN8N,
     SiJest,
     SiCypress,
     SiJasmine,
    } from "react-icons/si";
import { FaGithub, FaGitAlt, FaNpm, FaStripe, FaLinux } from "react-icons/fa";
import { TbBrandDocker } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";
import { DiVisualstudio } from "react-icons/di";
import { BiTestTube } from "react-icons/bi";
import Stacks from "../../JSON/Skills.json";
import "./Skills.scss";

const developmentTools = [
    { icon: DiVisualstudio, name: "VSCode", className: "icon-vscode" },
    { icon: FaGitAlt, name: "Git", className: "icon-git" },
    { icon: FaGithub, name: "GitHub", className: "icon-github" },
    { icon: SiAmazonwebservices, name: "AWS", className: "icon-aws" },
    { icon: FaNpm, name: "NPM", className: "icon-npm" },
    { icon: SiN8N, name: "n8n", className: "icon-n8n" },
    { icon: FaLinux, name: "Linux", className: "icon-linux" },
    { icon: SiGnubash, name: "Bash Scripting", className: "icon-bash" },
    { icon: SiMysql, name: "Workbench", className: "icon-mysql" },
    { icon: FaStripe, name: "Stripe", className: "icon-stripe" },
    { icon: TbBrandDocker, name: "Docker", className: "icon-docker" },
    { icon: SiKubernetes, name: "Kubernetes", className: "icon-kubernetes" },
    { icon: SiJest, name: "Jest", className: "icon-jest" },
    { icon: BiTestTube , name: "React Testing Library", className: "icon-times" },
    { icon: SiCypress, name: "Cypress", className: "icon-cypress" },
    { icon: SiJasmine, name: "Jasmine", className: "icon-jasmine" },
    { icon: SiSocketdotio, name: "Socket.IO", className: "icon-socket" },
    { icon: SiPrisma, name: "Prisma", className: "icon-prisma" },
    { icon: RiSupabaseFill, name: "Supabase", className: "icon-supabase" },
    { icon: SiVercel, name: "Vercel", className: "icon-vercel" },
];

const DevelopmentTool = ({ icon: Icon, name, className }) => (
    <div className="imagen">
        <Icon className={`icon ${className}`} />
        <p className={`nombre-${className.replace('icon-', '')}`}>{name}</p>
    </div>
);

const SkillSection = ({ skills, title, className, selectedImage, onMouseEnter, onMouseLeave }) => (
    <div className={`especialidad ${className}`}>
        <div className="nombre-skill">
            <p>{title}</p>
        </div>
        <div className="imagenes">
            {skills.map((item, index) => (
                <div
                    className="contenedor-de-imagen"
                    key={item.id || index}
                    onMouseEnter={() => onMouseEnter(item.id)}
                    onMouseLeave={onMouseLeave}
                    style={{
                        borderImage: item.bordeColor,
                        boxShadow: item.id === selectedImage ? item.boxShadow : "0px 0px 0px 0px transparent"
                    }}
                >
                    <img
                        src={item.imagen}
                        alt={item.texto}
                        style={{
                            borderRadius: item.skill === "Next JS" ? "50%" : "0",
                            boxShadow: item.skill === "Next JS" ? item.boxShadowInterno : "none",
                            backgroundColor: item.skill === "Next JS" ? "white" : "transparent"
                        }}
                    />
                </div>
            ))}
        </div>
    </div>
);

export default function Skills() {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    const arraySkills = useMemo(() => ({
        frontend: Stacks.filter(skill => skill.tipo.includes("Frontend")),
        backend: Stacks.filter(skill => skill.tipo.includes("Backend")),
        allSkills: Stacks.filter(skill =>
            skill.tipo.includes("Frontend") || skill.tipo.includes("Backend")
        )
    }), []);

    const handleMouseEnter = useCallback((id) => {
        setImagenSeleccionada(id);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setImagenSeleccionada(null);
    }, []);

    return (
        <section className="skills" id="skills">
            <div className="contenedor">
                <div className="contenedor-numero contenedor-numero-azul">
                    <div className="numero">
                        <p>1</p>
                    </div>
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-azul">
                    <div className="titulo">
                        <h2>Creando experiencias fluidas desde el frontend hasta el backend</h2>
                    </div>
                    <div className="subtitulo">
                        <h3>Habilidades en el Desarrollo de Software</h3>
                    </div>
                    <div className="linea-delimitante"></div>
                    <div className="descripcion">
                        <p>
                            Con una pasión por la innovación y una atención meticulosa a los detalles,
                            me especializo en el desarrollo Full Stack, cerrando de manera fluida la brecha
                            entre las tecnologías de frontend y backend. Mi experiencia se centra en el diseño
                            e implementación de soluciones robustas y escalables que priorizan la experiencia
                            del usuario, asegurando al mismo tiempo una funcionalidad eficiente en toda la pila de software.
                        </p>
                    </div>
                </div>

                <div className="especialidades">
                    <SkillSection
                        skills={arraySkills.frontend}
                        title="Frontend Skills"
                        className="especialidad-frontend"
                        selectedImage={imagenSeleccionada}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />

                    <div className="separador">
                        <div className="img">
                            <img
                                src="https://railway.app/illustrations/trains/01-train-dark.svg"
                                alt="Cohete"
                            />
                        </div>
                    </div>

                    <SkillSection
                        skills={arraySkills.backend}
                        title="Backend Skills"
                        className="especialidad-backend"
                        selectedImage={imagenSeleccionada}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-herramientas">
                    <div className="subtitulo">
                        <h3>Herramientas de Desarrollo</h3>
                    </div>
                    <div className="linea-delimitante"></div>
                    <div className="descripcion">
                        <p>
                            Un conjunto seleccionado de herramientas modernas y tecnologías avanzadas
                            que optimizan mi flujo de trabajo en el desarrollo, garantizando eficiencia
                            y calidad en cada proyecto.
                        </p>
                    </div>
                </div>

                <div className="encuadrante">
                    {developmentTools.map((tool, index) => (
                        <DevelopmentTool
                            key={`${tool.name}-${index}`}
                            icon={tool.icon}
                            name={tool.name}
                            className={tool.className}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
