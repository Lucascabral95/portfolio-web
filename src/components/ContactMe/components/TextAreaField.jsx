import ErrorMessage from "./ErrorMessage";

const TextAreaField = ({
    label,
    name,
    placeholder,
    register,
    validation,
    error,
    disabled = false,
    rows = 4
}) => (
    <div className="contenedor-input">
        <div className="label">
            <label htmlFor={name}>{label}</label>
        </div>
        <div className="input">
            <textarea
                rows={rows}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                {...register(name, validation)}
            />
        </div>
        <ErrorMessage error={error} />
    </div>
);

export default TextAreaField;
