import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./NotFoundDetail.scss";

function NotFoundDetail({ detail, showButton = true }) {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="not-found-detail">
            <div className="not-found-detail__container">
                <div className="not-found-detail__icon">
                    <FaExclamationTriangle />
                </div>
                <h1 className="not-found-detail__title">¡Ups! No encontrado</h1>
                <p className="not-found-detail__message">
                    {detail || "El recurso que estás buscando no existe o ha sido movido."}
                </p>
                {showButton && (
                    <button
                        onClick={handleGoBack}
                        className="not-found-detail__button"
                        aria-label="Volver atrás"
                    >
                        Volver atrás
                    </button>
                )}
            </div>
        </div>
    );
}

export default NotFoundDetail;