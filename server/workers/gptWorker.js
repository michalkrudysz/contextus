import connectRabbitMQ from "../config/amqpConfig.js";
import gptConfig from "../config/gptConfig.js";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { fileURLToPath, dirname } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const openai = new OpenAI({
  apiKey: gptConfig.apiKey,
});

async function startWorker() {
  try {
    const { channel } = await connectRabbitMQ();
    setupConsumer(channel);
  } catch (error) {
    console.error("Błąd:", error);
  }
}

function setupConsumer(channel) {
  const queue = "gptQueue";
  channel.assertQueue(queue, { durable: true });
  channel.consume(queue, (msg) => messageHandler(msg, channel), {
    noAck: false,
  });
}

async function messageHandler(msg, channel) {
  if (msg && msg.content) {
    const data = JSON.parse(msg.content.toString());
    const prompt = data.word;
    try {
      const response = await openai.chat.completions.create({
        model: gptConfig.model,
        messages: [
          {
            role: "user",
            content: `Generate 5 sentences, numbering from 1 to 5. First in English, then translate to Polish as e.g., 1-pl, followed by the next sentence, continuing until 5 sentences. Key word is '${prompt}'. They should be in different tenses, questions, future plans, negations.`,
          },
        ],
        temperature: gptConfig.temperature,
        max_tokens: gptConfig.maxTokens,
        top_p: gptConfig.topP,
        frequency_penalty: gptConfig.frequencyPenalty,
        presence_penalty: gptConfig.presencePenalty,
      });

      const outputPath = path.join(__dirname, "output.txt");
      fs.appendFileSync(
        outputPath,
        `Prompt: ${prompt}\nResponse: ${response.choices[0].message.content}\n\n`
      );

      channel.ack(msg);
    } catch (error) {
      console.error("Błąd:", error);
      channel.nack(msg);
    }
  } else {
    channel.nack(msg);
  }
}

export default startWorker;
