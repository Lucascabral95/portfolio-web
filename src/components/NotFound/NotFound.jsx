import Seo from "../common/Seo/Seo";
import NotFoundDetail from "./components/NotFoundDetail";

function NotFound({ canonical, detail, showButton = true }) {
    return (
        <>
            <Seo
                title="Página no encontrada | Lucas Cabral"
                description="La página solicitada no fue encontrada."
                canonical={canonical}
                image={`${canonical}/default-image.jpg`}
                type="article"
            />
            <NotFoundDetail detail={detail} showButton={showButton} />
        </>
    );
}

export default NotFound;