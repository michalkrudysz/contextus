import connectRabbitMQ from "../config/amqpConfig.js";
import gptConfig from "../config/gptConfig.js";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: gptConfig.apiKey,
});

async function startWorker() {
  try {
    const { channel } = await connectRabbitMQ();
    setupConsumer(channel);
  } catch (error) {
    console.error(`Error initializing worker: ${error}`);
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
    const { word, userId } = JSON.parse(msg.content.toString());
    try {
      const response = await openai.chat.completions.create({
        model: gptConfig.model,
        messages: [
          {
            role: "user",
            content: `Generate phrases based on '${word}' with userId '${userId}'.`,
          },
        ],
        temperature: gptConfig.temperature,
        max_tokens: gptConfig.maxTokens,
      });

      channel.ack(msg);
    } catch (error) {
      console.error(`Error processing request: ${error}`);
      channel.nack(msg);
    }
  } else {
    console.error("Invalid message.");
    channel.nack(msg);
  }
}

startWorker();
