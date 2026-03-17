import { useEffect, useRef, useState } from "react";
import {
  API_URL,
  SYSTEM_INSTRUCTION,
  MAX_TOKENS_OUTPUT,
} from "../Constants/index";

const FOCUS_INPUT = 768;
const GREETING_MESSAGE = `Hola 👋 Soy el asistente IA de Lucas. ¿En qué puedo ayudarte?`;

const useChatBot = () => {
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem("chatbot_messages");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            role: "assistant",
            text: GREETING_MESSAGE,
          },
        ];
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const isMobile = () => window.innerWidth < FOCUS_INPUT;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    sessionStorage.setItem("chatbot_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (!isLoading && !isMobile()) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const buildHistory = () =>
    messages.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.text }],
    }));

  const sendMessage = async () => {
    const userText = input.trim();
    if (!userText || isLoading) return;

    setInput("");
    setIsLoading(true);

    const userMsg = { id: Date.now(), role: "user", text: userText };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }],
          },
          contents: [
            ...buildHistory(),
            { role: "user", parts: [{ text: userText }] },
          ],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: MAX_TOKENS_OUTPUT,
            topP: 0.8,
            topK: 20,
          },
        }),
      });

      const data = await res.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No pude obtener una respuesta.";

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "assistant", text: reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: "Hubo un error al conectar. Intentá de nuevo.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
      if (!isMobile()) inputRef.current?.focus();
    }
  };

  const clearHistory = () => {
    sessionStorage.removeItem("chatbot_messages");
    setMessages([
      {
        id: Date.now(),
        role: "assistant",
        text: "Hola 👋 Soy la IA de Lucas. Preguntame lo que quieras saber sobre él.",
      },
    ]);
  };

  const renderText = (text) => {
    const cleaned = text.replace(/^\* /gm, "• ");
    const parts = cleaned.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );
  };

  return {
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
  };
};

export default useChatBot;
