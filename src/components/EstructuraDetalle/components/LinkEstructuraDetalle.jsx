import { FaGithubAlt, FaGoogleDrive } from "react-icons/fa";

function LinkEstructuraDetalle({ linkRepo, id, isBackend }) {
    if (!linkRepo) {
        return null;
    }

    const isDriveLink = id === 10;
    const text = isDriveLink ? "Ir al Drive" : (isBackend ? "Repo Backend" : "Repo Frontend");
    const Icon = isDriveLink ? FaGoogleDrive : FaGithubAlt;

    return (
        <a href={linkRepo} target="_blank" rel="noopener noreferrer" title={text}>
            <div className="caja-credencial">
                <p>{text}</p>
                <Icon className="icon-link-repo" />
            </div>
        </a>
    );
}

export default LinkEstructuraDetalle;
