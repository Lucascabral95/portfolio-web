import { useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";

import Proyectos from "../../JSON/Projects.json";
import EstructuraDetalle from "../EstructuraDetalle/EstructuraDetalle.jsx";
import StructuraBody from "../EstructuraBody/EstructuraBody.jsx";
import Seo from "../common/Seo/Seo.jsx";
import NotFound from "../NotFound/NotFound.jsx";

const ProyectosId = () => {
    const { id } = useParams();
    const [isOpenImage, setIsOpenImage] = useState(false);
    const [imagenSeleccionada, setImagenSeleccionada] = useState('');

    const baseUrl = useMemo(() => {
        return import.meta.env.VITE_BASE_URL;
    }, []);

    const canonical = useMemo(() => {
        return `${baseUrl.replace(/\/$/, "")}/`;
    }, [baseUrl]);

    const project = useMemo(() => {
        if (!id) return null;
        const numericId = Number(id);
        if (isNaN(numericId)) return null;
        return Proyectos.find(item => item.id === numericId) || null;
    }, [id]);

    const detallesTecnologia = useMemo(() => {
        return project?.tecnologia || [];
    }, [project?.tecnologia]);

    const imagenPrincipal = useMemo(() => {
        const imagenInicial = project?.imagen || '';
        if (!imagenSeleccionada || imagenSeleccionada === '') {
            setImagenSeleccionada(imagenInicial);
        }
        return imagenSeleccionada || imagenInicial;
    }, [project?.imagen, imagenSeleccionada]);

    const handleCloseImage = useCallback(() => {
        setIsOpenImage(false);
    }, []);

    const handleSetImagenSeleccionada = useCallback((imagen) => {
        setImagenSeleccionada(imagen);
    }, []);

    const seoProps = useMemo(() => {
        if (!project) {
            return {
                title: 'Proyecto no encontrado | Lucas Cabral',
                description: 'El proyecto solicitado no fue encontrado.',
                canonical: `/proyecto/${id}`,
                image: `${canonical}default-image.jpg`,
                type: "article"
            };
        }

        const title = `${project.nombre || 'Proyecto'} | Lucas Cabral`;
        const description = project?.tecnologias?.length > 0
            ? `Proyecto desarrollado con: ${project.tecnologias.map(t => t.nombre).join(', ')}.`
            : 'Proyecto de desarrollo web profesional.';

        return {
            title,
            description,
            canonical: `/proyecto/${id}`,
            image: `${canonical}${project.imagen}`,
            type: "article"
        };
    }, [project, id, canonical]);

    const estructuraDetalleProps = useMemo(() => ({
        filtroCertificaciones: project,
        tecnologias: detallesTecnologia,
        existeProyecto: true,
        imagenesExtras: project?.masImagenes || [],
        setImagenSeleccionada: handleSetImagenSeleccionada,
        imagen: imagenPrincipal,
        close: handleCloseImage,
        setIsOpenImage: setIsOpenImage,
        isOpenImage: isOpenImage
    }), [project, detallesTecnologia, imagenPrincipal, handleSetImagenSeleccionada, handleCloseImage, isOpenImage]);

    if (!project) {
        return (
            <StructuraBody>
                <NotFound
                    canonical={canonical}
                    detail="El proyecto que buscás no está disponible en este momento."
                    showButton={true}
                />
            </StructuraBody>
        );
    }

    return (
        <StructuraBody>
            <Seo {...seoProps} />
            <EstructuraDetalle {...estructuraDetalleProps} />
        </StructuraBody>
    );
};

export default ProyectosId;