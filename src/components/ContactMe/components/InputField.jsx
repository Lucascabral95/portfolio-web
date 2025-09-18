import ErrorMessage from "./ErrorMessage";

const InputField = ({
    label,
    name,
    type = "text",
    placeholder,
    register,
    validation,
    error,
    disabled = false,
    ...props
}) => (
    <div className="contenedor-input">
        <div className="label">
            <label htmlFor={name}>{label}</label>
        </div>
        <div className="input">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                {...register(name, validation)}
                {...props}
            />
        </div>
        <ErrorMessage error={error} />
    </div>
);

export default InputField;
