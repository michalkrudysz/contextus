import dotenv from "dotenv";
dotenv.config();

const gptConfig = {
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4",
  temperature: 1,
  maxTokens: 4095,
  topP: 1,
  frequencyPenalty: 0,
  presencePenalty: 0,
};

export default gptConfig;
