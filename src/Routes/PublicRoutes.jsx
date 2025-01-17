import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import ProgressBar from "../components/Animacion/ProgressBar.jsx"
import LucasWeb from "../components/Animacion/LucasWeb.jsx"
import Certificaciones from "../components/Certificaciones/Certificaciones.jsx"
import Main from "../components/Main.jsx"
import ProyectosId from "../components/ProyectosID/Proyectos.jsx"

export default function PublicRoutes() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <>

            <ProgressBar />

            <LucasWeb />

            <Routes>

                <Route path="/" element={<Main />} />
                <Route path="/*" element={<Main />} />
                <Route path="/certificacion/:id" element={<Certificaciones />} />
                <Route path="/proyecto/:id" element={<ProyectosId />} />

            </Routes>

        </>
    )
}