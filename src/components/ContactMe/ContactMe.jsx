import "./ContactMe.scss"
import { useForm } from "react-hook-form"
import { MdError } from "react-icons/md";
import { db } from "../Firebase/Firebase.config.js";
import { addDoc, collection } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';

export default function ContactMe() {

    const { register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = async (data) => {
        try {
            addDoc(collection(db, "mensajes-recluiters"), {
                name: data.name,
                numberPhone: data.numberPhone,
                email: data.email,
                message: data.message,
                fecha: new Date()
            })
            reset()
            toast.success("Mensaje enviado con éxito", {
                position: "top-rigth",
                style: {
                    background: "#13111C",
                    color: "white",
                    fontSize: "16px",
                    padding: "16px",
                    border: "1px solid #853BCE",
                    borderRadius: "8px"
                },
                duration: 3000
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="contact-me" id="contactme">
            <div className="contenedor">
                <div className="borde-superior"></div>

                <div className="contenedor-numero contenedor-numero-contact">
                    <div className="numero">
                        <p> 5 </p>
                    </div>
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-contact">
                    <div className="titulo">
                        <h2> Contactame </h2>
                    </div>
                    <div className="subtitulo">
                        <h3> Comprometido con la excelencia en cada proyecto </h3>
                    </div>
                </div>

                <div className="contenedor-formulario">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="dos-input">
                            <div className="contenedor-input-dos-input">
                                <div className="label">
                                    <label htmlFor="name">Nombre / Empresa</label>
                                </div>
                                <div className="input">
                                    <input type="text" name="name" {...register("name", { required: true, minLength: 3 })}
                                        placeholder="Nombre o Empresa" />
                                </div>
                                <div className="error-hook-form">
                                    {errors.name?.type === "minLength"
                                        ?
                                        <>
                                            <MdError className="icon-error-hook-form" />
                                            <span> El nombre debe tener al menos 3 caracteres </span>
                                        </>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                            <div className="contenedor-input-dos-input c-i-d-i-telefono">
                                <div className="label">
                                    <label htmlFor="numberPhone">Teléfono </label>
                                </div>
                                <div className="input">
                                    <input type="number" name="numberPhone" {...register("numberPhone", { required: true, min: 1, minLength: 5 })} placeholder="*(Opcional)*" />
                                </div>
                                <div className="error-hook-form">
                                    {errors.numberPhone?.type === "minLength" &&
                                        <>
                                            <MdError className="icon-error-hook-form" />
                                            <span> El número debe tener al menos 5 caracteres </span>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="contenedor-input">
                            <div className="label">
                                <label htmlFor="Email">Dirección de Email</label>
                            </div>
                            <div className="input">
                                <input type="email" name="Email" {...register("email", { required: true, minLength: 3 })} placeholder="Email" />
                            </div>
                        </div>
                        <div className="contenedor-input">
                            <div className="label">
                                <label htmlFor="message">Mensaje</label>
                            </div>
                            <div className="input">
                                <textarea rows="4" type="text" name="message" {...register("message", { required: true })} placeholder="Tu mensaje"></textarea>
                            </div>
                        </div>
                        <div className="boton">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>

                <Toaster />

                <div className="borde-inferior"></div>
            </div>
        </section>
    )
}