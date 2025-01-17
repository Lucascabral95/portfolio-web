import "./Certificaciones.scss"
import EstructuraBody from "../EstructuraBody/EstructuraBody.jsx"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Certificados from "../../JSON/Certificaciones.json"
import Tecnologys from "../../JSON/Tecnologys.json"
import EstructuraDetalle from "../EstructuraDetalle/EstructuraDetalle.jsx"

const Certificaciones = () => {
  const { id } = useParams()
  const [filtroCertificaciones, setFiltroCertificaciones] = useState(Certificados)
  const [tecnologias, setTecnologias] = useState(Tecnologys)
  const [imagenSeleccionada, setImagenSeleccionada] = useState('')
  const [isOpenImage, setIsOpenImage] = useState(false)

  useEffect(() => {
    const filtro = filtroCertificaciones.filter(item => item.id === Number(id))
    setFiltroCertificaciones(filtro[0])

    const filtroTecnologias = tecnologias.filter(item => item.curso.includes(filtro[0].nombre))
    const tecnologiasFiltradas = filtroTecnologias.map(item => item.tecnologia)
    setTecnologias(filtroTecnologias)

    setImagenSeleccionada(filtro[0].imagen)
  }, [id])

  return (
    <EstructuraBody>

      <EstructuraDetalle
        filtroCertificaciones={filtroCertificaciones}
        tecnologias={tecnologias}
        imagen={imagenSeleccionada}
        setIsOpenImage={setIsOpenImage}
        isOpenImage={isOpenImage}
        close={setIsOpenImage}
      />

    </EstructuraBody>
  )
}

export default Certificaciones