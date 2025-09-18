import { useState, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { db } from "../Firebase/Firebase.config.js";
import { addDoc, collection } from "firebase/firestore";
import "./ContactMe.scss";
import InputField from "./components/InputField.jsx";
import TextAreaField from "./components/TextAreaField.jsx";

const VALIDATION_RULES = {
    name: {
        required: "El nombre es obligatorio",
        minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" }
    },
    numberPhone: {
        minLength: { value: 5, message: "El número debe tener al menos 5 caracteres" },
        pattern: { value: /^[0-9]+$/, message: "Solo se permiten números" }
    },
    email: {
        required: "El email es obligatorio",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Formato de email inválido"
        }
    },
    message: {
        required: "El mensaje es obligatorio",
        minLength: { value: 10, message: "El mensaje debe tener al menos 10 caracteres" }
    }
};

const TOAST_CONFIG = {
    position: "top-right",
    style: {
        background: "#13111C",
        color: "white",
        fontSize: "16px",
        padding: "16px",
        border: "1px solid #853BCE",
        borderRadius: "8px"
    },
    duration: 3000
};

const TOAST_ERROR_CONFIG = {
    ...TOAST_CONFIG,
    style: {
        ...TOAST_CONFIG.style,
        border: "1px solid #e74c3c"
    }
};

export default function ContactMe() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm({
        mode: 'onChange'
    });

    const onSubmit = useCallback(async (data) => {
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            await addDoc(collection(db, "mensajes-recluiters"), {
                name: data.name,
                numberPhone: data.numberPhone || null,
                email: data.email,
                message: data.message,
                fecha: new Date(),
                timestamp: Date.now()
            });

            reset();
            toast.success("¡Mensaje enviado con éxito! Te contactaré pronto.", TOAST_CONFIG);

        } catch (error) {
            console.error('Error al enviar mensaje:', error);
            toast.error("Error al enviar el mensaje. Por favor, intenta nuevamente.", TOAST_ERROR_CONFIG);
        } finally {
            setIsSubmitting(false);
        }
    }, [reset, isSubmitting]);

    const buttonState = useMemo(() => ({
        disabled: isSubmitting || !isValid,
        text: isSubmitting ? "Enviando..." : "Enviar",
        className: isSubmitting ? "enviando" : ""
    }), [isSubmitting, isValid]);

    return (
        <section className="contact-me" id="contactme">
            <div className="contenedor">
                <div className="borde-superior"></div>

                <div className="contenedor-numero contenedor-numero-contact">
                    <div className="numero">
                        <p>5</p>
                    </div>
                </div>

                <div className="seccion-titulo-subtitulo seccion-titulo-subtitulo-contact">
                    <div className="titulo">
                        <h2>Contáctame</h2>
                    </div>
                    <div className="subtitulo">
                        <h3>Comprometido con la excelencia en cada proyecto</h3>
                    </div>
                </div>

                <div className="contenedor-formulario">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="dos-input">
                            <div className="contenedor-input-dos-input">
                                <InputField
                                    label="Nombre / Empresa"
                                    name="name"
                                    placeholder="Nombre o Empresa"
                                    register={register}
                                    validation={VALIDATION_RULES.name}
                                    error={errors.name}
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="contenedor-input-dos-input c-i-d-i-telefono">
                                <InputField
                                    label="Teléfono"
                                    name="numberPhone"
                                    type="tel"
                                    placeholder="*(Opcional)*"
                                    register={register}
                                    validation={VALIDATION_RULES.numberPhone}
                                    error={errors.numberPhone}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <InputField
                            label="Dirección de Email"
                            name="email"
                            type="email"
                            placeholder="tu@email.com"
                            register={register}
                            validation={VALIDATION_RULES.email}
                            error={errors.email}
                            disabled={isSubmitting}
                        />

                        <TextAreaField
                            label="Mensaje"
                            name="message"
                            placeholder="Cuéntame sobre tu proyecto..."
                            register={register}
                            validation={VALIDATION_RULES.message}
                            error={errors.message}
                            disabled={isSubmitting}
                            rows={4}
                        />

                        <div className="boton">
                            <button
                                type="submit"
                                disabled={buttonState.disabled}
                                className={buttonState.className}
                                aria-label={buttonState.text}
                            >
                                {buttonState.text}
                            </button>
                        </div>
                    </form>
                </div>

                <Toaster />

                <div className="borde-inferior"></div>
            </div>
        </section>
    );
}
