import "./EstructuraBody.scss"
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

export default function EstructuraBody({ children }) {
    return (
        <body>
            <div className="estructura-body">
                <div className="contenedor contenedor-de-estructura-body">

                    <Header />

                    <main>
                        {children}
                    </main>

                    <Footer />

                </div>
            </div>
        </body>
    )
}