import useChatBot from "../Hook/index";
import "./ChatBot.scss";

const ChatBot = () => {
  const {
    messages,
    input,
    isLoading,
    messagesEndRef,
    inputRef,
    sendMessage,
    handleKey,
    clearHistory,
    setInput,
    renderText,
  } = useChatBot();

  return (
    <div className="chatbot">
      <div className="chatbot__header">
        <div className="chatbot__avatar">
          <span>L</span>
          <div className="chatbot__avatar-ring" />
        </div>
        <div className="chatbot__header-info">
          <p className="chatbot__header-name">Lucas IA </p>
          <p className="chatbot__header-status">
            <span className="chatbot__dot" />
            Online ahora
          </p>
        </div>
        <button
          className="chatbot__clear"
          onClick={clearHistory}
          title="Limpiar historial"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <polyline
              points="3 6 5 6 21 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M19 6l-1 14H6L5 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 11v6M14 11v6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 6V4h6v2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="chatbot__messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chatbot__bubble chatbot__bubble--${msg.role}`}
          >
            <p>{renderText(msg.text)}</p>
          </div>
        ))}

        {isLoading && (
          <div className="chatbot__bubble chatbot__bubble--assistant chatbot__bubble--loading">
            <span />
            <span />
            <span />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot__input-area">
        <input
          ref={inputRef}
          className="chatbot__input"
          type="text"
          placeholder="Preguntá algo sobre Lucas..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          disabled={isLoading}
        />
        <button
          className={`chatbot__send ${input.trim() && !isLoading ? "chatbot__send--active" : ""}`}
          onClick={sendMessage}
          disabled={isLoading}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 2L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
