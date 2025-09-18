import { useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import EstructuraBody from "../EstructuraBody/EstructuraBody.jsx";
import EstructuraDetalle from "../EstructuraDetalle/EstructuraDetalle.jsx";
import Seo from "../common/Seo/Seo.jsx";
import Certificados from "../../JSON/Certificaciones.json";
import Tecnologys from "../../JSON/Tecnologys.json";
import NotFound from "../NotFound/NotFound.jsx";
import "./Certificaciones.scss";

const Certificaciones = () => {
  const { id } = useParams();
  const [isOpenImage, setIsOpenImage] = useState(false);

  const baseUrl = useMemo(() => {
    return import.meta.env.VITE_BASE_URL;
  }, []);

  const canonical = useMemo(() => {
    return `${baseUrl.replace(/\/$/, "")}/`;
  }, [baseUrl]);

  const certificacionActual = useMemo(() => {
    if (!id) return null;
    const numericId = Number(id);
    if (isNaN(numericId)) return null;
    return Certificados.find(item => item.id === numericId) || null;
  }, [id]);

  const tecnologiasFiltradas = useMemo(() => {
    if (!certificacionActual?.nombre) return [];
    return Tecnologys.filter(item =>
      item.curso.includes(certificacionActual.nombre)
    );
  }, [certificacionActual?.nombre]);

  const imagenSeleccionada = useMemo(() => {
    return certificacionActual?.imagen || '';
  }, [certificacionActual?.imagen]);

  const handleCloseImage = useCallback(() => {
    setIsOpenImage(false);
  }, []);

  const seoProps = useMemo(() => {
    if (!certificacionActual) {
      return {
        title: 'Certificación | Lucas Cabral',
        description: 'Certificación en tecnología.',
        canonical: `/certificacion/${id}`,
        image: `${canonical}/default-image.jpg`,
        type: "article"
      };
    }

    return {
      title: `${certificacionActual.nombre} | Lucas Cabral`,
      description: `Certificación en ${certificacionActual.nombre} obtenida en ${certificacionActual.institucion}.`,
      canonical: `/certificacion/${id}`,
      image: `${canonical}/${certificacionActual.imagen || certificacionActual.urlIngles}`,
      type: "article"
    };
  }, [certificacionActual, id, canonical]);

  const estructuraDetalleProps = useMemo(() => ({
    filtroCertificaciones: certificacionActual,
    tecnologias: tecnologiasFiltradas,
    imagen: imagenSeleccionada,
    setIsOpenImage: setIsOpenImage,
    isOpenImage: isOpenImage,
    close: handleCloseImage
  }), [certificacionActual, tecnologiasFiltradas, imagenSeleccionada, isOpenImage, handleCloseImage]);

  if (!certificacionActual) {
    return (
      <EstructuraBody>
        <NotFound
          canonical={canonical}
          detail="La certificación solicitada no existe o ha sido eliminada."
        />
      </EstructuraBody>
    );
  }

  return (
    <EstructuraBody>
      <Seo {...seoProps} />
      <EstructuraDetalle {...estructuraDetalleProps} />
    </EstructuraBody>
  );
};

export default Certificaciones;
