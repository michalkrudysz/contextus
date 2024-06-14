import connectRabbitMQ from "../config/amqpConfig.js";

export async function enqueuePhraseGeneration(data) {
  const { channel } = await connectRabbitMQ();
  const queue = "gptQueue";
  const message = { word: data.word, userId: data.userId };

  try {
    await channel.assertQueue(queue, { durable: true });
    const messageBuffer = Buffer.from(JSON.stringify(message));
    channel.sendToQueue(queue, messageBuffer, { persistent: true });
    console.log(`Request for user ${data.userId} enqueued.`);
    return { message: "Phrase generation request enqueued successfully" };
  } catch (error) {
    throw new Error(`Nie udało się wysłać do kolejki: ${error.message}`);
  }
}
