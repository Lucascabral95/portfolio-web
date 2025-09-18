import { MdError } from "react-icons/md";

const ErrorMessage = ({ error }) => {
    if (!error) return null;

    return (
        <div className="error-hook-form">
            <MdError className="icon-error-hook-form" />
            <span>{error.message}</span>
        </div>
    );
};

export default ErrorMessage;