import connectRabbitMQ from "../config/amqpConfig.js";

export async function enqueuePhraseUpdate(data) {
  const { channel } = await connectRabbitMQ();
  const queue = "phraseUpdateQueue";
  const messageBuffer = Buffer.from(JSON.stringify(data));

  try {
    channel.sendToQueue(queue, messageBuffer, { persistent: true });
  } catch (error) {
    throw new Error(`Failed to send to queue: ${error.message}`);
  }
}
