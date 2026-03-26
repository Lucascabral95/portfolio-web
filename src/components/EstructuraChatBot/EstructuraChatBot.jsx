import { useState } from "react";
import ChatBot from "./components/ChatBot";
import "./EstructuraChatBot.scss";

const TEXT_BUTTON_IA = "Hablá con mi IA";

const EstructuraChatBot = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);

  return (
    <div className="container-chat-bot">
      {isOpenChat && (
        <div className="chat-window" onClick={(e) => e.stopPropagation()}>
          <ChatBot />
        </div>
      )}

      <button
        className={`chat-trigger ${isOpenChat ? "is-open" : ""}`}
        onClick={() => setIsOpenChat(!isOpenChat)}
        aria-label="Abrir chat de ayuda"
      >
        <span className="chat-trigger__glow" />

        <span className="chat-trigger__icon">
          {!isOpenChat ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="8"
                width="18"
                height="13"
                rx="3"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8 8V6a4 4 0 0 1 8 0v2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="9" cy="14" r="1.5" fill="currentColor" />
              <circle cx="15" cy="14" r="1.5" fill="currentColor" />
              <path
                d="M9 18h6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>

        {!isOpenChat && (
          <span className="chat-trigger__label">{TEXT_BUTTON_IA}</span>
        )}
      </button>
    </div>
  );
};

export default EstructuraChatBot;
