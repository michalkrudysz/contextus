import connectRabbitMQ from "../config/amqpConfig.js";
import gptConfig from "../config/gptConfig.js";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: gptConfig.apiKey,
});

async function startWorker() {
  try {
    const { channel } = await connectRabbitMQ();
    console.log("RabbitMQ connected successfully.");
    setupConsumer(channel);
  } catch (error) {
    console.error(`Error initializing worker: ${error}`);
  }
}

function setupConsumer(channel) {
  const queue = "gptQueue";
  channel.assertQueue(queue, { durable: true });
  console.log(`Queue ${queue} asserted as durable.`);
  channel.consume(queue, (msg) => messageHandler(msg, channel), {
    noAck: false,
  });
}

async function messageHandler(msg, channel) {
  if (msg && msg.content) {
    console.log("Message received:", msg.content.toString());
    const data = JSON.parse(msg.content.toString());
    const prompt = data.word;
    const userId = data.userId;
    console.log(
      `Processing request for userId: ${userId} with prompt: ${prompt}`
    );
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

      const payload = {
        message: response.choices[0].message.content,
        userId: userId,
      };

      console.log(
        `Response generated and being sent to dataProcessingQueue:`,
        payload
      );
      channel.sendToQueue(
        "dataProcessingQueue",
        Buffer.from(JSON.stringify(payload)),
        { persistent: true }
      );
      channel.ack(msg);
    } catch (error) {
      console.error(`Error processing request: ${error}`);
      channel.nack(msg);
    }
  } else {
    console.error("Invalid message received, message is null or undefined.");
    channel.nack(msg);
  }
}

startWorker();
