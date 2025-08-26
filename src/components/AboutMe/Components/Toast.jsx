import "./Toast.scss";

function Toast({ message, show }) {
    return (
        <div className={`tostada ${show ? "show" : ""}`}>
            <div className="contenedor-tostada">
                <div className="message">
                    <div className="text-message">{message}</div>
                </div>
            </div>
        </div>
    );
}

export default Toast;