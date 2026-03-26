import { useEffect, useRef, useState } from "react";
import {
  GEMINI_API_URL,
  GPT_API_URL,
  GPT_API_KEY,
  SYSTEM_INSTRUCTION,
  MAX_TOKENS_OUTPUT,
} from "../Constants/index";

const AI_SELECTED = "gpt"; // "gemini" | "gpt"
const MODEL_GPT_SELECTED = "gpt-4.1-mini";
const FOCUS_INPUT = 768;
const GREETING_MESSAGE = `Hola 👋 Soy el asistente IA de Lucas. ¿En qué puedo ayudarte?`;
const SESSION_MESSAGES_KEY = "chatbot_messages";
const SESSION_GPT_RESPONSE_ID_KEY = "chatbot_gpt_response_id";

const buildGeminiRequest = (messages, userText) => ({
  url: GEMINI_API_URL,
  options: {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
      contents: [
        ...messages.map((msg) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.text }],
        })),
        { role: "user", parts: [{ text: userText }] },
      ],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: MAX_TOKENS_OUTPUT,
        topP: 0.8,
        topK: 20,
      },
    }),
  },
  parseResponse: (data) => ({
    text: data?.candidates?.[0]?.content?.parts?.[0]?.text ?? null,
    responseId: null,
  }),
});

const buildGPTRequest = (userText, previousResponseId) => ({
  url: GPT_API_URL,
  options: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL_GPT_SELECTED,
      ...(previousResponseId
        ? { previous_response_id: previousResponseId }
        : {}),
      input: [
        ...(!previousResponseId
          ? [{ role: "system", content: SYSTEM_INSTRUCTION }]
          : []),
        { role: "user", content: userText },
      ],
    }),
  },
  parseResponse: (data) => ({
    text: data?.output?.[0]?.content?.[0]?.text ?? null,
    responseId: data?.id ?? null,
  }),
});

const getProviderRequest = (messages, userText, gptResponseId) =>
  AI_SELECTED === "gpt"
    ? buildGPTRequest(userText, gptResponseId)
    : buildGeminiRequest(messages, userText);

const useChatBot = () => {
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem(SESSION_MESSAGES_KEY);
    return saved
      ? JSON.parse(saved)
      : [{ id: 1, role: "assistant", text: GREETING_MESSAGE }];
  });

  const [gptResponseId, setGptResponseId] = useState(
    () => sessionStorage.getItem(SESSION_GPT_RESPONSE_ID_KEY) ?? null,
  );

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const isMobile = () => window.innerWidth < FOCUS_INPUT;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    sessionStorage.setItem(SESSION_MESSAGES_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (!isLoading && !isMobile()) inputRef.current?.focus();
  }, [isLoading]);

  const sendMessage = async () => {
    const userText = input.trim();
    if (!userText || isLoading) return;

    setInput("");
    setIsLoading(true);
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", text: userText },
    ]);

    try {
      const { url, options, parseResponse } = getProviderRequest(
        messages,
        userText,
        gptResponseId,
      );

      const res = await fetch(url, options);
      const data = await res.json();
      const { text, responseId } = parseResponse(data);

      if (responseId) {
        setGptResponseId(responseId);
        sessionStorage.setItem(SESSION_GPT_RESPONSE_ID_KEY, responseId);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: text ?? "No pude obtener una respuesta.",
        },
      ]);
    } catch {
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
    sessionStorage.removeItem(SESSION_MESSAGES_KEY);
    sessionStorage.removeItem(SESSION_GPT_RESPONSE_ID_KEY);
    setGptResponseId(null);
    setMessages([
      { id: Date.now(), role: "assistant", text: GREETING_MESSAGE },
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
