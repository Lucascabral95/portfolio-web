import "./MenuHeader.scss"
import { animated, useSpring } from "@react-spring/web"
import { useNavigate } from "react-router-dom"

export default function MenuHeader({ visible, setVisible }) {
    const navigate = useNavigate();

    const irAlLink = (id) => {
        navigate(`/#${id}`)
        document.body.style.overflow = 'auto';
        setVisible(false);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    }

    const menuAbriendose = useSpring({
        to: { transform: "translateY(0)", opacity: 1 },
        from: { transform: "translateY(10%)", opacity: 0 },
        config: { duration: 400 },
        reset: true
    })

    return (
        <>
            <animated.div
                style={{ ...menuAbriendose, display: visible ? "block" : 'none' }}
                className="menu-header">
                <div className="contenedor">

                    <div className="category">
                        <div className="cat">
                            <p onClick={() => irAlLink("aboutme")}> Sobre Mí </p>
                        </div>
                        <div className="cat">
                            <p onClick={() => irAlLink("skills")}> Habilidades </p>
                        </div>
                        <div className="cat">
                            <p onClick={() => irAlLink("servicios")}> Servicios  </p>
                        </div>
                        <div className="cat">
                            <p onClick={() => irAlLink("projects")}> Proyectos  </p>
                        </div>
                        <div className="cat">
                            <p onClick={() => irAlLink("education")}> Educación  </p>
                        </div>
                        <div className="cat">
                            <p onClick={() => irAlLink("contactme")}> Contacto </p>
                        </div>
                    </div>

                </div>
            </animated.div>
        </>
    )
}