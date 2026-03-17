import { getSugestionTokenOutput } from "../utils/sugestionTokenOutput.utils";

export const API_KEY = import.meta.env.VITE_API_KEY;
export const MODEL_API = import.meta.env.VITE_MODEL_API;
export const MAX_TOKENS_OUTPUT = 180;
export const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_API}:generateContent?key=${API_KEY}`;

export const MAX_TOKENS_OUTPUT_SUGGESTION =
  getSugestionTokenOutput(MAX_TOKENS_OUTPUT);
