import { Helmet } from "react-helmet-async";

export default function Seo({ title, description, image, type = "website" }) {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const canonical = `${baseUrl.replace(/\/$/, "")}/`;

    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            {canonical && <link rel="canonical" href={canonical} />}

            <meta property="og:type" content={type} />
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {canonical && <meta property="og:url" content={canonical} />}
            {image && <meta property="og:image" content={image} />}

            <meta name="twitter:card" content="summary_large_image" />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    );
}
