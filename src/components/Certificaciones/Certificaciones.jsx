import "./Certificaciones.scss"
import EstructuraBody from "../EstructuraBody/EstructuraBody.jsx"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Certificados from "../../JSON/Certificaciones.json"
import Tecnologys from "../../JSON/Tecnologys.json"
import EstructuraDetalle from "../EstructuraDetalle/EstructuraDetalle.jsx"
import Seo from "../common/Seo/Seo.jsx"

const Certificaciones = () => {
  const { id } = useParams()
  const [filtroCertificaciones, setFiltroCertificaciones] = useState(Certificados)
  const [tecnologias, setTecnologias] = useState(Tecnologys)
  const [imagenSeleccionada, setImagenSeleccionada] = useState('')
  const [isOpenImage, setIsOpenImage] = useState(false)
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const canonical = `${baseUrl.replace(/\/$/, "")}/`;

  useEffect(() => {
    const filtro = filtroCertificaciones.filter(item => item.id === Number(id))
    setFiltroCertificaciones(filtro[0])

    const filtroTecnologias = tecnologias.filter(item => item.curso.includes(filtro[0].nombre))
    setTecnologias(filtroTecnologias)

    setImagenSeleccionada(filtro[0].imagen)
  }, [id])

  return (
    <EstructuraBody>

      <Seo
        title={`${filtroCertificaciones.nombre || 'Certificación'} | Lucas Cabral`}
        description={`Certificación en ${filtroCertificaciones.nombre || 'tecnología'} obtenida en ${filtroCertificaciones.institucion || 'la institución'}.`}
        canonical={`/certificacion/${id}`}
        image={`${canonical}/${filtroCertificaciones.imagen || filtroCertificaciones.urlIngles}`}
        type="article"
      />

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