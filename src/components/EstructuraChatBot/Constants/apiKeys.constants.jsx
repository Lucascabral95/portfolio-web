import { getSugestionTokenOutput } from "../utils/sugestionTokenOutput.utils";

export const API_KEY = import.meta.env.VITE_API_KEY;
export const MODEL_API = import.meta.env.VITE_MODEL_API;
export const MAX_TOKENS_OUTPUT = 180;
export const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_API}:generateContent?key=${API_KEY}`;

export const MAX_TOKENS_OUTPUT_SUGGESTION =
  getSugestionTokenOutput(MAX_TOKENS_OUTPUT);

// GPT
export const GPT_API_URL = "https://api.openai.com/v1/responses";
export const GPT_API_KEY = import.meta.env.VITE_GPT_API_KEY;
