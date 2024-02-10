import { GoogleGenerativeAI } from "@google/generative-ai";

// api
const API_KEY: string =  import.meta.env.VITE_GEMINI_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);


export async function startGemini(prompt:string) {

  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}