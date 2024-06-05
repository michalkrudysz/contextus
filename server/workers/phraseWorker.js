import connectRabbitMQ from "../config/amqpConfig.js";
import { updatePhraseProgress } from "../services/updatePhraseProgressService.js";

async function startWorker() {
  const { channel } = await connectRabbitMQ();

  channel.consume(
    "phraseUpdateQueue",
    async (msg) => {
      if (msg && msg.content) {
        const data = JSON.parse(msg.content.toString());
        try {
          await updatePhraseProgress(data);
          channel.ack(msg);
        } catch (error) {
          channel.nack(msg);
        }
      } else {
        throw new Error(
          "Received null or empty message, invalid message properties."
        );
      }
    },
    {
      noAck: false,
    }
  );
}

startWorker();
