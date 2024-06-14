import connectRabbitMQ from "../config/amqpConfig.js";

export async function logPhraseResponse(data) {
  console.log(`Dane z serwisu '${data.prompt}': ${data.response}`);
}

export async function enqueuePhraseGeneration(data) {
  const { channel } = await connectRabbitMQ();
  const queue = "gptQueue";

  try {
    await channel.assertQueue(queue, { durable: true });
    const messageBuffer = Buffer.from(JSON.stringify(data));
    channel.sendToQueue(queue, messageBuffer, { persistent: true });
    return { message: "Phrase generation request enqueued successfully" };
  } catch (error) {
    throw new Error(`Nie udało się wysłać do kolejki: ${error.message}`);
  }
}
