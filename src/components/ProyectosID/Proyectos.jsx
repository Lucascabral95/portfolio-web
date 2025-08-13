import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Proyectos from "../../JSON/Projects.json"
import EstructuraDetalle from "../EstructuraDetalle/EstructuraDetalle.jsx"
import StructuraBody from "../EstructuraBody/EstructuraBody.jsx"

const ProyectosId = () => {
    const { id } = useParams()
    const [project, setProject] = useState(Proyectos)
    const [imagenSeleccionada, setImagenSeleccionada] = useState('')
    const [isOpenImage, setIsOpenImage] = useState(false)
    const [detallesTecnologia, setDetallesTecnologia] = useState([])

    useEffect(() => {
        const proyectoElegido = project.filter(item => item.id === Number(id))
        setProject(proyectoElegido[0])
        setImagenSeleccionada(proyectoElegido[0].imagen)
        setDetallesTecnologia(Proyectos.filter(item => item.id === Number(id))[0].tecnologia)
    }, [id])

    return (
        <StructuraBody>

            <EstructuraDetalle
                filtroCertificaciones={project}
                tecnologias={detallesTecnologia}
                existeProyecto={true}
                imagenesExtras={project.masImagenes}
                setImagenSeleccionada={setImagenSeleccionada}
                imagen={imagenSeleccionada}
                close={setIsOpenImage}
                setIsOpenImage={setIsOpenImage}
                isOpenImage={isOpenImage}
            />

        </StructuraBody>
    )
}

export default ProyectosId;