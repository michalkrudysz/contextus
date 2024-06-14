import connectRabbitMQ from "../config/amqpConfig.js";

export async function enqueuePhraseGeneration(data) {
  const { channel } = await connectRabbitMQ();
  const queue = "gptQueue";

  try {
    await channel.assertQueue(queue, { durable: true });
  } catch (assertQueueError) {
    throw new Error(
      `Nie udało się potwierdzić lub utworzyć kolejki: ${assertQueueError.message}`
    );
  }

  const messageBuffer = Buffer.from(JSON.stringify(data));
  try {
    channel.sendToQueue(queue, messageBuffer, { persistent: true });
    return { message: "Phrase generation request enqueued successfully" };
  } catch (error) {
    throw new Error(`Nie udało się wysłać do kolejki: ${error.message}`);
  }
}
