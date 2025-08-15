import AboutMe from "./AboutMe/AboutMe"
import "./Main.scss"
import ContactMe from "./ContactMe/ContactMe"
import Education from "./Education/Education"
import Projects from "./Projects/Projects"
import Skills from "./Skill/Skills.jsx"
import EstructuraBody from "./EstructuraBody/EstructuraBody"
import Servicios from "./Servicios/Servicios.jsx"
import Seo from "./common/Seo/Seo.jsx"

export default function Main() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const canonical = `${baseUrl.replace(/\/$/, "")}/`;

  return (
    <EstructuraBody>

      <Seo
        title="Lucas Cabral - Desarrollador Full Stack"
        description="Desarrollador Full Stack con foco en React, React Native, Angular, Node.js, NestJS y TypeScript, orientado a construir aplicaciones escalables, seguras y de alto rendimiento siguiendo buenas prácticas, pruebas automatizadas e integración continua."
        canonical={"/"}
        image={`${canonical}img/lucas2-cv.jpg`}
        type="website"
      />

      <div className="main-principal">

        <AboutMe />
        <Skills />
        <Servicios />
        <Projects />
        <Education />
        <ContactMe />

      </div>

    </EstructuraBody>
  )
}