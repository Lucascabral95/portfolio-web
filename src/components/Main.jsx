import AboutMe from "./AboutMe/AboutMe"
import "./Main.scss"
import ContactMe from "./ContactMe/ContactMe"
import Education from "./Education/Education"
import Projects from "./Projects/Projects"
import Skills from "./Skill/Skills.jsx"
import EstructuraBody from "./EstructuraBody/EstructuraBody"
import Servicios from "./Servicios/Servicios.jsx"

export default function Main() {

  return (
    <EstructuraBody>

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